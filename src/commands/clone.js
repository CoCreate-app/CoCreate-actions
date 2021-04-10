const utils_git = require('../utils/git.js');
const shellJs = require('shelljs');
const list_repositories = require('../list_repositories.js');

const prompt = require('prompt');

prompt.start();

const properties = [
    {
        name: 'user_git',
    },
    {
        name: 'password_git',
        hidden: true
    }
];

prompt.get(properties,  function (err, result) {
    if (err) { return console.error(err); }
    let tmp_pwd = process.cwd()
    list_repositories.forEach(repo=>{
        shellJs.cd(tmp_pwd);
        var path_repo = repo.path.split('/');
        path_repo.pop()
        path_repo = path_repo.join('/')
        //console.log("path_repo ",path_repo)
        shellJs.mkdir('-p', path_repo)
        shellJs.cd(path_repo);
        //console.log("Cd actual ",process.cwd())
        utils_git.cloneRepository(repo,result);
    });
});