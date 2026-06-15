// Wrapper for KANGO XMD to work on Render
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

// Get session from environment variable
const sessionData = process.env.SESSION_ID;

if (sessionData) {
    console.log('✅ SESSION_ID found, length:', sessionData.length);
    
    // Create session directory
    if (!fs.existsSync('./session')) {
        fs.mkdirSync('./session');
    }
    
    // Write session to creds.json
    fs.writeFileSync('./session/creds.json', sessionData);
    console.log('✅ Session written to ./session/creds.json');
} else {
    console.log('⚠️ No SESSION_ID found in environment variables');
}

// Start the actual KANGO bot
const bot = spawn('node', ['index.js'], {
    env: { ...process.env },
    cwd: process.cwd()
});

bot.stdout.on('data', (data) => {
    console.log(`[BOT]: ${data}`);
});

bot.stderr.on('data', (data) => {
    console.error(`[BOT ERROR]: ${data}`);
});

// HTTP server to keep Render happy
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🤖 KANGO XMD Bot is running! WhatsApp bot active.\n');
});

server.listen(PORT, () => {
    console.log(`✅ HTTP server running on port ${PORT}`);
    console.log(`✅ KANGO XMD bot wrapper active`);
});

// Handle bot process exit
bot.on('exit', (code) => {
    console.log(`Bot exited with code ${code}`);
});

// Handle process termination
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down...');
    bot.kill();
    server.close();
    process.exit(0);
});
