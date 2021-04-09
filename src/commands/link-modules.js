// install nodejs 14 from: https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions
// install yarn from https://classic.yarnpkg.com/en/docs/install/#debian-stable
// -> alternatives -> debian/ununtu -> run the 3 commands there consecutively

let glob = require("glob");
const fs = require('fs')
const path = require("path")
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
let list = require('../list_repositories.js');

let onlyInstall = ['CoCreate-crdt',
    'CoCreate-codemirror',
    'CoCreate-quill',
    'CoCreate-monaco',
    'CoCreate-pickr'
];

let yarnLink = list.map(o => o.path)
let yarnInstall = [];
yarnLink.forEach(p => {
    if (onlyInstall.includes(path.basename(p))) {
        yarnInstall.push(p);
    }
})


let syarnInstall = yarnInstall.map(fn => path.basename(fn).toLowerCase());
let syarnlink = yarnLink.map(fn => path.basename(fn).toLowerCase());







(async() => {

    for (let [index, dep] of syarnlink.entries()) {




        await sleep(100)

        await updateYarnLink(yarnLink[index], dep)

    }
    for (let [index, dep] of syarnInstall.entries()) {

        await sleep(100)


        await updateYarnInstall(yarnInstall[index], dep)
    }

})()
// console.log(path.existsSync)
// process.exit();

async function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function updateYarnLink(dpath, name) {
    // let packageName = path.basename(dpath);
    let res1, res2;
    dpath = path.resolve(dpath);
    if(!fs.existsSync(dpath))
        return console.error(dpath, 'not exist')
        
    try {
        console.log('linking', name);
        res1 = await exec(`yarn`, { cwd: dpath })

    console.log(path.resolve(dpath), name);
    return;


        let packageName = res1.stdout.match(/\"@cocreate\/[a-z0-9\-]+?\"/i);
        if (!packageName)
            packageName = res1.stderr.match(/\"@cocreate\/[a-z0-9\-]+?\"/i);


        packageName = packageName[0].substr(1, packageName[0].length - 2)


        res2 = await exec(`yarn link ${packageName}`, { cwd: path.resolve('../CoCreateJS') })

        console.log(name, 'is finished')
    }
    catch (err) {
            console.log(path.resolve(dpath), name);
        console.error(name, 'had error for command', err.cmd, 'with response:', res1, res2 ,err)
    }

}


async function updateYarnInstall(dpath, name) {
    
        dpath = path.resolve(dpath);
    if(!fs.existsSync(dpath))
        return console.error(dpath, 'not exist')
    
    let res;
    
    
    try {
        console.log('yarn installing ', name)
        res = await exec(`yarn install`, { cwd:dpath })
        console.log(name, 'is finished')

    }
    catch (err) {
        console.error(name, 'had error for command', err.cmd, 'with response:', err)
    }
}

function getAllComponents() {
    // let ignore = require("./ignores")

    // let options = { ignore: ['../**/node_modules*/**'] };


    // const yarnlink = glob.sync("../*/package.json", options).concat(
    //         glob.sync("../*/*/package.json", options))
    //     .map(p => path.dirname(p))


    // console.log(path.pwd)
    //  process.exit()



    // let packageJson = require("../CoCreateJS/package.json")
    // let deps = Object.keys(packageJson.dependencies)
    //     .concat(Object.keys(packageJson.devDependencies))
    //     .map(dep =>
    //         dep.replace('@', '').replace('/', '-'));
}
