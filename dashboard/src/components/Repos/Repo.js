import React from 'react';

const Repo = ({
  name,
  full_name,
  html_url,
  description,
  fork,
  size,
  stargazers_count,
  watchers_count,
  language,
  forks_count,
  archived,
  disabled,
  open_issues_count,
  license,
  open_issues,
  watchers,
  default_branch,
}) => {

  return (
    <div>
      <h4>
        <a href={html_url}>{name}</a>
      </h4>
      <div>description: {description}</div>
      <div>fork: {fork ? 'yes' : 'no'}</div>
      <div>forked {forks_count} times</div>
      <div>stars: {stargazers_count}</div>
      <div>watchers: {watchers_count}</div>
      <div>Language: {language}</div>
      <div>status {archived ? 'archived' : 'not archived'}, {disabled ? 'disabled' : 'not disabled'}</div>
      <div>opened issues: {open_issues}</div>
      <div>license: {license && license.name ? <a href={license.url}>{license.name}</a> : 'none'}</div>
      <div>Numbers of watchers: {watchers}</div>
      <div>default branch: {default_branch}</div>
      <hr/>
    </div>
  );
};

export default Repo;