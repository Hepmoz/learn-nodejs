"use strict";

/*
const fs = require('fs');
const util = require('util');
const fs_readdir = util.promisify(fs.readdir);


var dir = '.';
if (process.argv[2]) dir = process.argv[2];
const files = await fs_readdir(dir);
for (let fn of files){
    console.log("File: " + fn);
}
})().catch(err => { console.error(err); });
*/

const fs_reç = dir => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, fileList) => {
            if (err) reject(err);else resolve(fileList);
        });
    });
};
