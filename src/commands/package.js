let glob = require("glob");
let fs = require('fs');
const prettier = require("prettier");


function globUpdater(er, files) {
    if (er)
        console.log(files, 'glob resolving issue')
    else
        files.forEach(filename => update(filename))
}




function update(name) {
   


    let object = require(name)

    console.log(object)
    if (!object.devDependencies)
        return console.log(name, 'not updated')
    else
        Object.assign(object.devDependencies, {
            "@babel/core": "^7.9.6",
            "@babel/preset-env": "^7.9.6",
            "babel-loader": "^8.1.0",
            "clean-webpack-plugin": "^3.0.0",
            "file-loader": "^6.2.0",
            "style-loader": "^2.0.0",
            "css-loader": "^5.1.3",
            "terser-webpack-plugin": "^5.1.1",
            "webpack": "^5.24.4",
            "webpack-cli": "^4.5.0",
            "webpack-log": "^3.0.1"
        })

    let str = JSON.stringify(object)
    // console.log(str)
    let formated = prettier.format(str, { semi: false, parser: "json" });
    // process.exit()
    fs.writeFileSync(name, formated)
    console.log(name)
}



// glob("../CoCreate-components/*/package.json", globUpdater)
// glob("../CoCreate-modules/*/package.json", globUpdater)
// glob("../CoCreate-plugins/*/package.json", globUpdater)

glob("../CoCreateCSS/package.json", globUpdater)
