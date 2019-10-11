const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // path.exists(filePath, function (exists) {

    //     if (exists) {
    //         fs.readFile(filePath, function (error, content) {
    //             if (error) {
    //                 res.writeHead(500);
    //                 res.end();
    //             }
    //             else {
    //                 res.writeHead(200, {
    //                     'Content-Type': contentType
    //                 });
    //                 res.end(content, 'utf-8');
    //             }
    //         });
    //     }
    //     else {
    //         response.writeHead(404);
    //         response.end();
    //     }
    // });
    console.log(req.url);
    switch (req.method) {

        case 'GET':
            if (req.url === '/') {
                console.log(req.url);
                res.writeHead(200, {
                    'ContentType': 'text/html'
                });
                const myReadStream = fs.createReadStream(process.env.PWD + '/client/index.html', 'utf8');
                console.log(process.env.PWD + '/client/index.html');

                myReadStream.pipe(res);

            }
            else if (req.url === '/dictionary') {
                fs.readFile('assets/dictionary.txt', (err, data) => {
                    if (err) {
                        res.writeHead(404, 'File not found', {
                            ContentType: 'text/html'
                        });
                    }
                    res.writeHead(200, {
                        'ContentType': 'application/json'
                    })
                    let str = data.toString();
                    const arr = str.split(',');
                    console.log(arr);
                    res.write(JSON.stringify(arr))
                    res.end()
                })
            }
            else {
                let filePath = process.env.PWD + req.url;
                var extName = path.extname(filePath);
                console.log(extName);
                console.log(filePath);


                fs.access(filePath, fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }

                    let contentType = 'text/html';
                    switch (extName) {
                        case '.js':
                            contentType = 'text/javascript';
                            break;
                        case '.css':
                            contentType = 'text/css';
                            break;
                    }

                    fs.readFile(filePath, function (error, content) {
                        if (error) {
                            res.writeHead(500);
                            res.end();
                        }
                        else {
                            res.writeHead(200, {
                                'Content-Type': contentType
                            });
                            res.end(content, 'utf-8');
                        }
                    });
                })

            }
            break;

        default:
            break;
    }
});

server.listen(3000)
    .on('listening', () => {
        console.log('server listen on port 3000');
    })
