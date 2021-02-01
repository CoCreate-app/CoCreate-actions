const utils_git = require('../utils/git.js');
const shellJs = require('shelljs');
const list_repositories = require('../list_repositories.js');
//utils_git.push()


const prompt = require('prompt');

prompt.start();

const properties = [
    {
        name: 'commit_git',
    },
    {
        name: 'config_email_git',
    },
    {
        name: 'config_name_git',
    },
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
        utils_git.push(repo,result);
    });
});

/*

console.log(list_repositories)

console.log(" ----------- index ---------------")
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);



const { spawnSync} = require('child_process');
// status: 0 -> success
// status: 128 -> errror 

out = spawnSync('git', ['add']);
console.log('status: ' + out.status);
console.log('stdout: ' + out.stdout.toString('utf8'));
console.log('stderr: ' + out.stderr.toString('utf8'));
console.log();

out = spawnSync('ls', ['-lha']);
console.log('status: ' + out.status);
console.log('stdout: ' + out.stdout.toString('utf8'));
console.log('stderr: ' + out.stderr.toString('utf8'));
console.log();*/