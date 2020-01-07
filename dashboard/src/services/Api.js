const apiUrl = process.env.REACT_APP_GITHUB_API_URL;

const getOptions = (method = 'GET', contentType = 'application/json') => {
  return {
    method: method,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': contentType
    }
  }
}

const getUserName = () => localStorage.getItem('user');

const getApiUrlForUserName = () => {
  const userName = getUserName();

  return userName ? `${apiUrl}users/${userName}` : null;
}

const getUser = async () => {
  const url = getApiUrlForUserName();
  if (!url) return null;

  const response = await fetch(url, getOptions());

  return await response.json();
}

const getRepos = async () => {
  const url = getApiUrlForUserName();
  if (!url) return null;
  const response = await fetch(`${url}/repos`, getOptions());

  return await response.json();
}

const getGists = async () => {
  const url = getApiUrlForUserName();
  if (!url) return null;

  const response = await fetch(`${url}/gists`, getOptions());

  return await response.json();
}

const getGistFile = async (url) => {
  const response = await fetch(url, getOptions('GET', 'text/plain'));
  return await response.text();
}

export default {
  getUser,
  getRepos,
  getGists,
  getGistFile
};
