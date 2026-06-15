// Wrapper for KANGO XMD to work on Render
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

console.log('🚀 Starting KANGO XMD Bot Wrapper...');

// Ensure session directory exists with the hardcoded session
if (!fs.existsSync('./session')) {
    fs.mkdirSync('./session');
    console.log('📁 Created session directory');
}

// Check if creds.json exists, if not, the hardcoded session in settings.js will be used
if (!fs.existsSync('./session/creds.json')) {
    console.log('📝 No creds.json found, will use SESSION_ID from settings.js');
}

// Create a simple marker file
fs.writeFileSync('./.setup-complete', Date.now().toString());

// Start the actual KANGO bot
console.log('🤖 Launching KANGO XMD bot...');

const bot = spawn('node', ['index.js'], {
    env: { ...process.env },
    cwd: process.cwd()
});

bot.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(`[BOT]: ${output}`);
    
    // Check for connection success
    if (output.includes('connected') || output.includes('Connected')) {
        console.log('🎉 BOT CONNECTED SUCCESSFULLY!');
    }
    
    // Check for QR code
    if (output.includes('QR') || output.includes('Scan')) {
        console.log('📱 QR Code detected - please scan if needed');
    }
});

bot.stderr.on('data', (data) => {
    console.error(`[BOT ERROR]: ${data.toString()}`);
});

// HTTP server to keep Render happy
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🤖 KANGO XMD Bot is running!\n\nWhatsApp Bot: Active\nOwner: Warren\n');
});

server.listen(PORT, () => {
    console.log(`✅ HTTP server running on port ${PORT}`);
    console.log(`✅ KANGO XMD bot wrapper active`);
});

// Health check endpoint
server.on('request', (req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', timestamp: Date.now(), bot: 'KANGO-XMD' }));
    }
});

// Handle bot process exit
bot.on('exit', (code, signal) => {
    console.log(`Bot exited with code ${code}, signal ${signal}`);
});

// Handle process termination
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down...');
    bot.kill('SIGTERM');
    server.close();
    process.exit(0);
});

console.log('✅ Wrapper ready. Bot starting...');
