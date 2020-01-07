import React from 'react';
import { format } from 'date-fns';

import { GistFile } from "./";

const Gist = (props) => {
  const {
    html_url,
    description,
    created_at,
    updated_at,
    comments,
    files
  } = props;

  return (
    <div>
      <a href={html_url}>{description}</a>
      <div>Creation date: {`${format(new Date(created_at), 'dd MMMM yyyy')}`}</div>
      <div>Last modification: {`${format(new Date(updated_at), 'dd MMMM yyyy')}`}</div>
      <div>{comments} comments</div>

      {Object.keys(files).map(name => <GistFile key={name} {...files[name]} />)}
      <hr/>
    </div>
  );
};

export default Gist;