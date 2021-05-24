const fs = require('fs');
const fetch = require('node-fetch');
const { optimize } = require('svgo');
const svg64 = require('svg64');

function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

function decodeBase64Image(dataString) {
    const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

async function dataUrlToFile(data, filename) {
    const imageBuffer = decodeBase64Image(data);

    fs.writeFile(filename, imageBuffer.data, function(err) {
        if(err){
            console.log('Error: ', err);
        }
    });
}

function generateJson (path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            throw err;
        }

        const svg  = optimize(data, { path });
        const base64  = svg64(svg.data);

        console.log('Original', svg.data, 'size:',  byteCount(svg.data));
        console.log('Compress', base64, 'size:',  byteCount(base64));

        dataUrlToFile(base64, 'test.svg');
    });
}

module.exports = { generateJson }