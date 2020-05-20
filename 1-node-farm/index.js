const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////File

// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8' );


// const textOut = `This is what we know about the avocado: ${textIn}.\n Create on: ${Date.now()}`;

// fs.writeFileSync('./sta`rter/txt/output.txt', textOut);
// console.log('Writed in the file');no

// fs.readFile('./starter/txt/start.txt', 'utf-8' , (err, data1) => {
//     if (err) console.log('Error ')
//    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8' , (err, data2) => {
//        console.log(data2);
//        fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3)=> {
//            console.log(data3);
//            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`,'utf-8', err => {
//                 console.log('data has been written into final.txt file')
//            });
//        });   
//    });
// });
// console.log('Will reading File!')

////////////////Server
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8')
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName =req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product'){
        res.end('This is the PRODUCT');
    } else if (pathName === '/api'){

        res.writeHead(200, { 'Content-type': 'application/json'})
        res.end(data);

        
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'

        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8080, '127.0.0.1', () =>{
    console.log('Listening the request on port 8000');
});