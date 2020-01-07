import { useState } from 'react';
import Api from "../../services";

export const useGists = () => {
  const [gistsInit, setGistsInit] = useState(false);
  const [gists, setGists] = useState([]);
  
  const addGists = async (gists = []) => {
    let newGist = [];
    for (const gistName in gists) {
      if (gists.hasOwnProperty(gistName)) {
        const { files } = gists[gistName];
        let newFiles = {};
        for (const fileName in files) {
          if (files.hasOwnProperty(fileName)) {
            const content = await Api.getGistFile(files[fileName].raw_url);
            newFiles[fileName] = Object.assign(files[fileName], {content})
          }
        }
        newGist.push(Object.assign(gists[gistName], {files: newFiles}))
      }
    }
    setGistsInit(true);
    setGists(newGist);
  };

  return {
    gistsInit,
    setGistsInit,
    gists,
    addGists,
  };
};
