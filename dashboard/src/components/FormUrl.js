import React, { useState, useRef, useEffect } from 'react';

import Api, { GET_USER, GET_REPO } from './Api';

const FormUrl = (props) => {
  const [url, setUrl] = useState('');
  const inputRef = useRef(null);

  const greet = () => {
    Api.post('', { query: GET_USER("wonknu") })
      .then(result => console.log(result));
  };

  useEffect(() => {
    greet();
    Api.post('', { query: GET_REPO(10) })
      .then(result => console.log(result));
    return () => {};
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('url', url);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="url">
        Show open issues for https://github.com/
      </label>
      <input
        ref={inputRef}
        id="url"
        type="text"
        onChange={(e) => setUrl(inputRef.current.value)}
        style={{ width: '300px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormUrl;
