const shellJs = require('shelljs');

module.exports.push = function(repository,prompt){
    
    /*  
    shellJs.ls('*').forEach(function (file) {
           console.log(file) 
        });
    */
        console.log("************* -> ",repository.path)
        // change current directory to repo directory in local
        
        const simpleGitPromise = require('simple-git/promise')();
        const simpleGit = require('simple-git')();
        // Repo name
        // Set up GitHub url like this so no manual entry of user pass needed
        let gitHubUrl = `https://${prompt.user_git}:${prompt.password_git}@${repository.repo}`;
        // add local git config like username and email

        simpleGit.addConfig('user.email',prompt.config_email_git);
        simpleGit.addConfig('user.name',prompt.config_name_git);
        
        change_url(simpleGitPromise,gitHubUrl)
        
        simpleGit.add('.')
        simpleGit.commit(prompt.commit_git)
        simpleGit.push('origin','master')
        /*
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
         simpleGitPromise.push('origin','master')
            .then((success) => {
               console.log("************* -> ",'repo successfully pushed');
            },(failed)=> {
               console.log("************* -> ",'repo push failed');
         });
        */
        gitHubUrl = `https://${repository.repo}`; 
        
        change_url(simpleGit,gitHubUrl)
    
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



module.exports.pull = function(){
    console.log("pull GIT")
    
}