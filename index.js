const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('./assets/dictionary.txt', (err, data) => {
            if (err) {
                res.write('error');
                res.end();
            }
            res.write(data);
            res.end();
        })
    }
});

server.listen(3000).on('listening', () => {
    console.log('server listen on port 3000');
})