let cdnUrl = "https://server.cocreate.app/";

let glob = require("glob");
const path = require("path")
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

function globUpdater(er, files) {
    if (er)
        console.log(files, 'glob resolving issue')
    else
        files.forEach(filename => update(filename))
}
// console.log(Object.keys(require("../CoCreateJS/package.json").dependencies))
// process.exit();


async function update(dpath) {
  // let packageName = path.basename(dpath);
    console.log(dpath);
    return;
  // console.log(path.resolve(dpath))
    let res = await exec(`yarn link`, { cwd: path.resolve(dpath) })

     console.log(res.stdout, res.stderr)

     let packageName = res.stdout.match(/\"@cocreate\/[a-z0-9]+?\"/i);
     if(!packageName)
      packageName = res.stderr.match(/\"@cocreate\/[a-z0-9]+?\"/i);
    packageName = packageName[0].substr(1,packageName[0].length-2)



     res = await exec(`yarn link ${packageName}`, { cwd: path.resolve('../CoCreateJS') })

         console.log(res.stdout, res.stderr)
    console.log(packageName)





}

// async function update2(dpath) {



//     let res;

//         for (let rpackageName of Object.keys(require("../CoCreateJS/package.json").dependencies)) {
//     try {
//             console.log(rpackageName)
//             res = await exec(`yarn link ${rpackageName}`, { cwd: path.resolve('../CoCreateJS') })

//     }
//     catch (err) {
//         console.log(err)
//     }
//         }

// }
// async function update3(dpath) {
//     let pacakgejson = require(dpath + '/package.json');
//     if(!pacakgejson) return; 
//     let packageName = pacakgejson.name;
//     console.log(packageName)    

//     // try {
        
//     //         let res = await exec(`yarn link ${packageName}`, { cwd: path.resolve('./tt') })

//     // }
//     // catch (err) {
//     //     console.log(err)
//     // }
   

// }

glob("../CoCreate-components/*", globUpdater)
glob("../CoCreate-modules/*", globUpdater)
glob("../CoCreate-plugins/*", globUpdater)
glob("../CoCreateCSS", globUpdater)



