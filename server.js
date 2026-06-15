// Wrapper for KANGO XMD to work on Render
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

// Force skip install
process.env.SKIP_INSTALL = 'true';
process.env.DISABLE_AUTO_UPDATE = 'true';
process.env.AUTO_INSTALL = 'false';

console.log('🚀 Starting KANGO XMD Bot Wrapper...');

// Create a marker file to indicate install is done
const markerFile = './.installed';
if (!fs.existsSync(markerFile)) {
    fs.writeFileSync(markerFile, Date.now().toString());
    console.log('✅ Installation marker created');
}

// Ensure session directory exists
if (!fs.existsSync('./session')) {
    fs.mkdirSync('./session');
    console.log('📁 Created session directory');
}

// Start the actual KANGO bot with modified environment
console.log('🤖 Launching KANGO XMD bot...');

const bot = spawn('node', ['index.js'], {
    env: { 
        ...process.env,
        SKIP_INSTALL: 'true',
        DISABLE_AUTO_UPDATE: 'true',
        AUTO_INSTALL: 'false'
    },
    cwd: process.cwd()
});

bot.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(`[BOT]: ${output}`);
    
    if (output.includes('connected') || output.includes('Connected')) {
        console.log('🎉 BOT CONNECTED SUCCESSFULLY!');
    }
});

bot.stderr.on('data', (data) => {
    console.error(`[BOT ERROR]: ${data.toString()}`);
});

// HTTP server
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🤖 KANGO XMD Bot is running!\n');
});

server.listen(PORT, () => {
    console.log(`✅ HTTP server running on port ${PORT}`);
});

bot.on('exit', (code) => {
    console.log(`Bot exited with code ${code}`);
});

console.log('✅ Wrapper ready');
