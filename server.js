// Simple wrapper for KANGO XMD
const { spawn } = require('child_process');
const http = require('http');

console.log('🚀 Starting KANGO XMD Bot...');

// Start the bot directly
const bot = spawn('node', ['index.js'], {
    env: process.env,
    cwd: process.cwd()
});

bot.stdout.on('data', (data) => {
    console.log(data.toString());
});

bot.stderr.on('data', (data) => {
    console.error(data.toString());
});

// Simple HTTP server for Render
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('KANGO XMD Bot Running\n');
});

server.listen(PORT, () => {
    console.log(`✅ Server on port ${PORT}`);
});

bot.on('exit', (code) => {
    console.log(`Bot exited with code ${code}`);
});
