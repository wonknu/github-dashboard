import React from 'react';
import { userContext } from '../User';
import { format } from 'date-fns';

const Profile = (props) => {
  return (
    <div className="header">
      <userContext.Consumer>
        {(value) => {
          const { 
            html_url,
            avatar_url,
            login,
            blog,
            name,
            company,
            location,
            bio,
            email,
            hireable,
            public_repos,
            public_gists,
            followers,
            following,
            created_at
          } = value.user.profile
          return (
            <div>
              <a href={html_url}>
                <img src={avatar_url} alt={`${login}'s avatar`} style={{width: 100}}/>
                <div>{login}</div>
              </a>
              <div>
                {name} work's at {company} in {location}.
                <br/>
                Bio: {bio}
              </div>
              <div>
                <h3>Informations</h3>
                <ul>
                  <li>Email: {email}</li>
                  <li>Hireable: {hireable}</li>
                  <li>Public repos: {public_repos}</li>
                  <li>Public gists: {public_gists}</li>
                  <li>Followers: {followers}</li>
                  <li>Following: {following}</li>
                  <li>On Github since: {`${format(new Date(created_at), 'dd MMMM yyyy')}`}</li>
                </ul>
              </div>
            </div>
          )
        }}
      </userContext.Consumer>
    </div>
  );
};

export default Profile;