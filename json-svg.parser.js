const fs = require('fs');
const { optimize } = require('svgo');
const { decompress, compress } = require('./string.utils');

function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

function generateJson (path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            throw err;
        }

        const a  = optimize(data, { path });
        const compressedData = compress(a.data);
        const decompressedData = decompress(compressedData);

        console.log('Original', a.data, 'size:',  byteCount(a.data));
        console.log('Compress', compressedData, 'size:',  byteCount(compressedData));
        console.log('Decompress', decompressedData, 'size:',  byteCount(decompressedData));
    });
}

module.exports = { generateJson }