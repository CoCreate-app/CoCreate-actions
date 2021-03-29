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
        
        simpleGit
        .addConfig('user.email',prompt.config_email_git)
        .addConfig('user.name',prompt.config_name_git)
        .removeRemote('origin')
        .addRemote('origin',gitHubUrl)
        .pull(['origin', prompt.branch], () => {
            //console.log("PULL Before PULL SUCCESSFULL "+repository.path)
        })
        .add('./*')
        .commit(prompt.commit_git)
        .push(['-u', 'origin', prompt.branch], () => {
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

module.exports.pull = async function(repository,prompt){
    console.log("pull GIT ",repository.path)
    const git = init(repository.path);
    const simpleGitPromise = git['simpleGitPromise'];
    const simpleGit = git['simpleGit'];
    
    let gitHubUrl = `https://${prompt.user_git}:${prompt.password_git}@${repository.repo}`;
    
    let change_gitHubUrl = `https://${repository.repo}`; 
    await simpleGit
    .removeRemote('origin')
    .addRemote('origin',gitHubUrl)
    .pull(['origin', prompt.pull_branch], () => {
        console.log("PULL SUCCESSFULL "+repository.path + ' from branch : '+prompt.pull_branch)
    }).removeRemote('origin')
    .addRemote('origin',change_gitHubUrl)
    
}

module.exports.commit = function(repository,prompt){
    console.log("commit GIT ",repository.path)
    const git = init(repository.path);
    const simpleGit = git['simpleGit'];

    simpleGit
    .add('./*')
   .commit(prompt.commit)
}

module.exports.merge = async function(repository,prompt){
    console.log("merge GIT ",repository.path)
    const git = init(repository.path);
    const simpleGit = git['simpleGit'];

    //simpleGit
    //.merge(prompt.branch_dev,prompt.branch_from)
    try {
          const mergeSummary = await simpleGit.mergeFromTo(prompt.branch_dev,prompt.branch_from);
          console.log(`Merged ${ mergeSummary.merges.length } files`);
        }
        catch (err) {
          // err.message - the string summary of the error
          // err.stack - some stack trace detail
          // err.git - where a parser was able to run, this is the parsed content
        console.log(err)
          console.error(`Merge resulted in ${ err?.git?.conflicts?.length } conflicts`);
        }
    simpleGit.add('./*')
    .commit(prompt.commit)
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



module.exports.cloneRepository = function(repository,prompt){
    console.log("Clone Repository ",repository.repo)

    let gitHubUrl_repo = `https://${prompt.user_git}:${prompt.password_git}@${repository.repo}`;
    const git = init(repository.path);
    const simpleGit = git['simpleGit'];
    let folder_list_repo = process.cwd()
    let gitHubUrl = `https://${repository.repo}`; 
    
    
    
    simpleGit.silent(true)
      .clone(gitHubUrl_repo,()=>{
          let folder_repo = repository.repo.split('/')[2].split('.git')[0]
          let new_repo = folder_list_repo+'/'+folder_repo
          shellJs.cd(folder_list_repo+'/'+folder_repo);
          console.log("Process ",process.cwd())
          console.log("Clone")
             const git = init(new_repo);
            const simpleGit = git['simpleGit'];
            simpleGit.removeRemote('origin')
          .addRemote('origin',gitHubUrl)
      })

}