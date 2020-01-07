import React, { useEffect } from 'react';
import { useRepos, Repo } from "./";
import Api from '../../services';

const Repos = (props) => {
  const {
    reposInit,
    repos,
    addRepos
  } = useRepos();

  useEffect(() => {
    if (!reposInit) {
      (async () => {
        const repos = await Api.getRepos();
        await addRepos(repos);
      })();
    }
    return () => {};
  }, [repos]);

  return (
    <div>
      {repos.map(repo => <Repo key={repo.id} {...repo} />)}
    </div>
  );
};

export default Repos;
