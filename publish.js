#!/usr/bin/env node
// Publishes exported carousel PNGs to social media via the PostBridge API.
// Requires Node.js 18+ (built-in fetch). No npm install needed.
//
// Setup:
//   export POST_BRIDGE_API_KEY=pb_live_xxxxx
//
// Usage:
//   node publish.js --list-accounts
//   node publish.js --files slide-1.png slide-2.png --accounts acc_123,acc_456 --caption "Your caption here"
//   node publish.js --files slide-*.png --accounts acc_123 --caption "..." --schedule "2026-04-23T14:00:00Z"

const fs = require('fs');
const path = require('path');

const API_BASE = 'https://api.post-bridge.com';
const API_KEY = process.env.POST_BRIDGE_API_KEY;

if (!API_KEY) {
  console.error('Error: POST_BRIDGE_API_KEY environment variable is not set.');
  console.error('Get your key at: https://www.post-bridge.com/dashboard/api-keys');
  process.exit(1);
}

if (typeof fetch === 'undefined') {
  console.error('Error: Node.js 18+ is required (built-in fetch). Run: node --version');
  process.exit(1);
}

const authHeaders = {
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

async function listAccounts() {
  const res = await fetch(`${API_BASE}/v1/social-accounts`, { headers: authHeaders });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`list accounts failed (${res.status}): ${body}`);
  }
  return res.json();
}

async function createUploadUrl(filename, mimeType, sizeBytes) {
  const res = await fetch(`${API_BASE}/v1/media/create-upload-url`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({ name: filename, mime_type: mimeType, size_bytes: sizeBytes }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`create upload URL failed (${res.status}): ${body}`);
  }
  return res.json();
}

async function uploadFile(uploadUrl, fileBuffer, mimeType) {
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': mimeType },
    body: fileBuffer,
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`file upload failed (${res.status}): ${body}`);
  }
}

async function createPost({ caption, mediaIds, accountIds, scheduledAt }) {
  const body = {
    caption,
    media: mediaIds.map(id => ({ id })),
    social_accounts: accountIds.map(id => ({ id })),
  };
  if (scheduledAt) body.scheduled_at = scheduledAt;

  const res = await fetch(`${API_BASE}/v1/posts`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`create post failed (${res.status}): ${body}`);
  }
  return res.json();
}

function parseArgs(argv) {
  const args = { files: [], accounts: [], caption: '', scheduledAt: null, listAccounts: false };
  let i = 0;
  while (i < argv.length) {
    const flag = argv[i++];
    if (flag === '--list-accounts') {
      args.listAccounts = true;
    } else if (flag === '--files') {
      while (i < argv.length && !argv[i].startsWith('--')) args.files.push(argv[i++]);
    } else if (flag === '--accounts') {
      if (i < argv.length) args.accounts = argv[i++].split(',').map(s => s.trim()).filter(Boolean);
    } else if (flag === '--caption') {
      if (i < argv.length) args.caption = argv[i++];
    } else if (flag === '--schedule') {
      if (i < argv.length) args.scheduledAt = argv[i++];
    }
  }
  return args;
}

function printUsage() {
  console.log('Usage:');
  console.log('  node publish.js --list-accounts');
  console.log('  node publish.js --files slide-1.png slide-2.png \\');
  console.log('                  --accounts acc_id1,acc_id2 \\');
  console.log('                  --caption "Your caption"');
  console.log('  node publish.js --files slide-1.png \\');
  console.log('                  --accounts acc_id1 \\');
  console.log('                  --caption "Your caption" \\');
  console.log('                  --schedule "2026-04-23T14:00:00Z"');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.listAccounts) {
    console.log('Fetching connected accounts...\n');
    const accounts = await listAccounts();
    if (accounts.length === 0) {
      console.log('No accounts connected. Connect accounts at: https://www.post-bridge.com/dashboard');
      return;
    }
    console.log('ID                    Platform      Username');
    console.log('─'.repeat(60));
    for (const a of accounts) {
      console.log(`${String(a.id).padEnd(22)}${a.platform.padEnd(14)}@${a.username}`);
    }
    return;
  }

  if (args.files.length === 0) {
    console.error('Error: --files is required.\n');
    printUsage();
    process.exit(1);
  }

  if (args.accounts.length === 0) {
    console.error('Error: --accounts is required. Run --list-accounts to see available IDs.\n');
    printUsage();
    process.exit(1);
  }

  // Validate files exist
  for (const f of args.files) {
    if (!fs.existsSync(f)) {
      console.error(`Error: file not found: ${f}`);
      process.exit(1);
    }
  }

  // Upload each PNG
  const mediaIds = [];
  for (const filePath of args.files) {
    const filename = path.basename(filePath);
    const fileBuffer = fs.readFileSync(filePath);
    const mimeType = 'image/png';

    process.stdout.write(`Uploading ${filename}...`);
    const { media_id, upload_url } = await createUploadUrl(filename, mimeType, fileBuffer.length);
    await uploadFile(upload_url, fileBuffer, mimeType);
    mediaIds.push(media_id);
    console.log(` done (${media_id})`);
  }

  // Create the post
  process.stdout.write('\nCreating post...');
  const post = await createPost({
    caption: args.caption,
    mediaIds,
    accountIds: args.accounts,
    scheduledAt: args.scheduledAt,
  });
  console.log(' done\n');

  console.log(`Post ID : ${post.id}`);
  if (args.scheduledAt) {
    console.log(`Status  : scheduled for ${args.scheduledAt}`);
  } else {
    console.log(`Status  : ${post.status || 'queued'}`);
  }
}

main().catch(err => {
  console.error(`\nError: ${err.message}`);
  process.exit(1);
});
