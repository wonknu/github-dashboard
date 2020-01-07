import { useState } from 'react';
import Api from "../../services";

export const useRepos = () => {
  const [reposInit, setReposInit] = useState(false);
  const [repos, setRepos] = useState([]);
  
  const addRepos = async (repos = []) => {
    // let newGist = [];
    // for (const gistName in repos) {
    //   if (repos.hasOwnProperty(gistName)) {
    //     const { files } = repos[gistName];
    //     let newFiles = {};
    //     for (const fileName in files) {
    //       if (files.hasOwnProperty(fileName)) {
    //         const content = await Api.getGistFile(files[fileName].raw_url);
    //         newFiles[fileName] = Object.assign(files[fileName], {content})
    //       }
    //     }
    //     newGist.push(Object.assign(repos[gistName], {files: newFiles}))
    //   }
    // }
    setReposInit(true);
    setRepos(repos);
  };

  return {
    reposInit,
    setReposInit,
    repos,
    addRepos,
  };
};
