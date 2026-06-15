// Wrapper for KANGO XMD to work on Render
const { spawn } = require('child_process');
const http = require('http');

// Start the actual KANGO bot
const bot = spawn('node', ['index.js']);

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
    res.send = res.write;
    res.end('🤖 KANGO XMD Bot is running! WhatsApp bot active.');
});

server.listen(PORT, () => {
    console.log(`✅ HTTP server running on port ${PORT}`);
    console.log(`✅ KANGO XMD bot wrapper active`);
});

// Handle bot process exit
bot.on('exit', (code) => {
    console.log(`Bot exited with code ${code}`);
    process.exit(code);
});
