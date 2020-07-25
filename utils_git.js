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
        // add local git config like username and email
        simpleGit.addConfig('user.email',prompt.config_email_git);
        simpleGit.addConfig('user.name',prompt.config_name_git);
        change_url(simpleGitPromise,gitHubUrl)
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
                console.log('failed commmit');
         });
        // Finally push to online repository
        gitHubUrl = `https://${repository.repo}`; 
         simpleGitPromise.push('origin','master')
            .then((success) => {
               console.log("************* -> ",'repo successfully pushed '+repository.path);
               change_url(simpleGitPromise,gitHubUrl)
            },(failed)=> {
               console.log("************* -> ",'repo push failed '+repository.path);
               change_url(simpleGitPromise,gitHubUrl)
         });
        
        //change_url(simpleGitPromise,gitHubUrl)
  
    
}//end push

 function change_url(simpleGitPromise,url){
        
         simpleGitPromise.removeRemote('origin')
            .then(
               (addSuccess) => {
                  //console.log("remove Origin");
               }, (failedAdd) => {
                  console.log('Remove adding files failed');
            });
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
    change_url(simpleGitPromise,gitHubUrl)
    gitHubUrl = `https://${repository.repo}`; 
    simpleGitPromise.pull('origin','master')
        .then((success) => {
           console.log("************* -> ",'Pull repo successfully  '+repository.path);
           change_url(simpleGitPromise,gitHubUrl);
        },(failed)=> {
           console.log("************* -> ",'Pull repo failed '+repository.path);
           change_url(simpleGitPromise,gitHubUrl);
     });
}