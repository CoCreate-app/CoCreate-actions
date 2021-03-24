const utils_git = require('../utils/git.js');
const shellJs = require('shelljs');
const list_repositories = require('../list_repositories.js');

const prompt = require('prompt');

prompt.start();

const properties = [
    {
        name: 'commit',
        default: 'Cocreate commit',
    }
];

prompt.get(properties,  function (err, result) {
    if (err) { return console.error(err); }
    let tmp_pwd = process.cwd()
    list_repositories.forEach(repo=>{
        shellJs.cd(tmp_pwd);
        utils_git.commit(repo,result);
    });
});
