const http = require('http');

const PORT = process.env.PORT || 5000;

console.log('test_1: starting server');
http.createServer((req, res) => {
    console.log('METHOD:', req.method);
    console.log('PATH:', req.url);
    console.log('HEADERS:', req.headers);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK\n');
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
