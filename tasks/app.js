const fs = require('fs');
const fse = require('fs-extra')
const path = require('path');

const repeatCount = 10

const parentDir = './'

const getId = function () {
    let id = 0;
    return () => {
        return ++id;
    }
}();
const copyDirAndChangeMeta = (dirPath) => {
    const id = getId();
    const destPath = dirPath + id;
    const metaPath = path.join(destPath, 'meta.txt');
    fse.copySync(dirPath, destPath);

    let metaContent = fs.readFileSync(metaPath, 'utf-8');
    metaContent = metaContent.replace(/task_id=advanced_mathOperations_sumTwoNumbers/, 'task_id=advanced_mathOperations_sumTwoNumbers' + id)
    fs.writeFileSync(metaPath, metaContent, 'utf-8');
}

const run = () => {
    var dirs = fs.readdirSync(parentDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .map(dir => path.join(parentDir, dir));

    dirs.forEach(dir => copyDirAndChangeMeta(dir));
};


for (var i = 0; i < repeatCount; i++) {
    run();
}