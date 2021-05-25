const fs = require('fs');
const { optimize } = require('svgo');
const { parse, stringify } = require('svgson')

function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

function generateJson (path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            throw err;
        }

        const a  = optimize(data, { path });
        console.log('Original', a.data, 'size:',  byteCount(a.data));

        parse(a.data).then(jsonData => {
            console.log('Converted', JSON.stringify(jsonData, null, 2), 'size:',  byteCount(JSON.stringify(jsonData, null, 2)));

            const decompressedData = stringify(jsonData);

            console.log('Decompress', decompressedData, 'size:',  byteCount(decompressedData));
        })
    });
}

module.exports = { generateJson }
