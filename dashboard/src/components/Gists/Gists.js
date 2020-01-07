import React, { useEffect } from 'react';
import { useGists, Gist } from "./";
import Api from '../../services';

const Gists = (props) => {
  const {
    gistsInit,
    gists,
    addGists
  } = useGists();

  useEffect(() => {
    if (!gistsInit) {
      (async () => {
        const gists = await Api.getGists();
        await addGists(gists);
      })();
    }
    return () => {};
  }, [gists]);

  return (
    <div>
      {gists.map(gist => <Gist key={gist.id} {...gist} />)}
    </div>
  );
};

export default Gists;
