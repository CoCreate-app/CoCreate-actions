const utils_git = require('../utils/git.js');
const shellJs = require('shelljs');
const list_repositories = require('../list_repositories.js');

const prompt = require('prompt');

prompt.start();

const properties = [
    {
        name: 'branch_from',
        default: 'From',
    },
    {
        name: 'branch_to',
    },
    {
        name: 'commit',
        default: 'Cocreate commit',
    }
];

prompt.get(properties,  function (err, result) {
    if (err) { return console.error(err); }
    let tmp_pwd = process.cwd()
    let branch_to = result.branch_to
    let branch_from = result.branch_from
    let commit = result.commit
    list_repositories.forEach(repo=>{
        shellJs.cd(tmp_pwd)
        shellJs.cd(repo.path);
        //console.log(" pwd ",process.cwd(),shellJs.pwd())
        if (shellJs.exec('git add .').code !== 0) {
          shellJs.echo('1 Error: Git add . '+branch_to+' failed');
          shellJs.exit(1);
        }
        if (shellJs.exec('git commit -am "'+commit+'" ').code !== 0) {
          shellJs.echo('1 Error: Git commit '+branch_to+' failed');
          shellJs.exit(1);
        }
        
        if (shellJs.exec('git checkout '+branch_to).code !== 0) {
          shellJs.echo('Error: Git checkout '+branch_to+' failed');
          shellJs.exit(1);
        }
        if (shellJs.exec('git pull origin '+branch_to).code !== 0) {
          shellJs.echo('Error: Git pull '+branch_to+' failed');
          shellJs.exit(1);
        }
        if (shellJs.exec('git merge '+branch_from).code !== 0) {
          shellJs.echo('Error: Git checkout '+branch_to+' failed');
          shellJs.exit(1);
        }
        
        /*//hey frank
        if (shellJs.exec('git add .').code !== 0) {
          shellJs.echo('2 Error: Git add . '+branch_to+' failed');
          shellJs.exit(1);
        }
        if (shellJs.exec('git commit -am "'+commit+'" ').code !== 0) {
          shellJs.echo('2 Error: Git commit '+branch_to+' failed');
          shellJs.exit(1);
        }*/
        
       // utils_git.merge(repo,result);
    });
});
