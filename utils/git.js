const shellJs = require('shelljs');

function init(path){
    shellJs.cd(path);
    const simpleGitPromise = require('simple-git/promise')();
    const simpleGit = require('simple-git')();
    return {'simpleGitPromise':simpleGitPromise,'simpleGit':simpleGit}
}

module.exports.push = function(repository,prompt){
      console.log("************* -> ",repository.path)
        // change current directory to repo directory in loca
        const git = init(repository.path);
        const simpleGitPromise = git['simpleGitPromise'];
        const simpleGit = git['simpleGit'];
        // [Repo name] Set up GitHub url like this so no manual entry of user pass needed
        let gitHubUrl = `https://${prompt.user_git}:${prompt.password_git}@${repository.repo}`;
        let change_gitHubUrl = `https://${repository.repo}`; 
        // add local git config like username and email
/*        simpleGit.addConfig('user.email',prompt.config_email_git);
        simpleGit.addConfig('user.name',prompt.config_name_git);
        change_url(simpleGitPromise,gitHubUrl,repository.path)
        // Add all files for commit
        simpleGitPromise.add('.')
            .then(
               (addSuccess) => {
                  
               }, (failedAdd) => {
                  console.log('Error adding files failed');
            });
        // Commit files as Initial Commit
         
         simpleGitPromise.commit(prompt.commit_git)
           .then(
              (successCommit) => {
                console.log("************* -> ",successCommit);
             }, (failed) => {
                console.log('failed commmit '+repository.repo);
         });
        // Finally push to online repository
        gitHubUrl = `https://${repository.repo}`; 
         simpleGitPromise.push('origin','master')
            .then((success) => {
               console.log("************* -> ",'repo successfully pushed '+repository.path);
               change_url(simpleGitPromise,gitHubUrl,repository.path)
            },(failed)=> {
               console.log("************* -> ",'repo push failed '+repository.path);
               change_url(simpleGitPromise,gitHubUrl,repository.path)
         });
        //change_url(simpleGitPromise,gitHubUrl)
        
        */
        
        simpleGit
        .addConfig('user.email',prompt.config_email_git)
        .addConfig('user.name',prompt.config_name_git)
        .removeRemote('origin')
        .addRemote('origin',gitHubUrl)
        .pull(['origin', 'master'], () => {
            //console.log("PULL Before PULL SUCCESSFULL "+repository.path)
        })
        .add('./*')
        .commit(prompt.commit_git)
        .push(['-u', 'origin', 'master'], () => {
         console.log('Done ',repository.path);
        })
        .removeRemote('origin')
        .addRemote('origin',change_gitHubUrl)
}//end push

 function change_url(simpleGitPromise,url,path){
        
         simpleGitPromise.removeRemote('origin')
            .then(
               (addSuccess) => {
                  //console.log("remove Origin");
               }, (failedAdd) => {
                  console.log('Remove adding files failed',path);
            });
            //.addRemote('origin',url);
         simpleGitPromise.addRemote('origin',url);
}



    /*  
    shellJs.ls('*').forEach(function (file) {
           console.log(file) 
        });
    */
    

module.exports.pull = function(repository,prompt){
    console.log("pull GIT ",repository.path)
    const git = init(repository.path);
    const simpleGitPromise = git['simpleGitPromise'];
    const simpleGit = git['simpleGit'];
    
    let gitHubUrl = `https://${prompt.user_git}:${prompt.password_git}@${repository.repo}`;
    
    let change_gitHubUrl = `https://${repository.repo}`; 
    
    simpleGit
    .removeRemote('origin')
    .addRemote('origin',gitHubUrl)
    .pull(['origin', 'master'], () => {
        console.log("PULL SUCCESSFULL "+repository.path)
    }).removeRemote('origin')
    .addRemote('origin',change_gitHubUrl)
    
    /*
    change_url(simpleGitPromise,gitHubUrl,repository.path)
    gitHubUrl = `https://${repository.repo}`; 
    simpleGitPromise.pull('origin','master')
        .then((success) => {
           console.log("************* -> ",'Pull repo successfully  '+repository.path);
           change_url(simpleGitPromise,gitHubUrl,repository.path);
        },(failed)=> {
           console.log(":( :( ;( -> ",'Pull repo failed '+repository.path);
           change_url(simpleGitPromise,gitHubUrl,repository.path);
     });
     */
}

module.exports.initRepository = function(repository,prompt){
    console.log("Init Repository ",repository.path)   
    const git = init(repository.path);
    const simpleGit = git['simpleGit'];
    let gitHubUrl = `https://${prompt.user_git}:${prompt.password_git}@${repository.repo}`;
    simpleGit
     .init()
     .addConfig('user.name', prompt.config_name_git)
     .addConfig('user.email', prompt.config_email_git)
     .add('./*')
     .commit(prompt.commit_git)
     .addRemote('origin', gitHubUrl)
     .push(['-u', 'origin', 'master'], () => {
         console.log('Done ',repository.repo);
         gitHubUrl = `https://${repository.repo}`; 
         change_url(simpleGit,gitHubUrl,repository.path);
     });
}