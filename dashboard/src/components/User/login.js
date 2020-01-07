import React from 'react';
import SocialButton from './SocialButton';
import Api from "../../services";

const Login = ({ onLogin }) => {
  const token = localStorage.getItem('token');

  const handleSocialLogin = (user) => {
    localStorage.setItem('token', user.token.accessToken);
    localStorage.setItem('user', user.profile.name);
    onLogin(user);
  };
  
  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const handleSocialLoginFromToken = async () => {
    const user = await Api.getUser();
    onLogin({profile: user, token: localStorage.getItem('token')});
  }

  if (token) {
    handleSocialLoginFromToken();
  }

  return (
    <div>
      <SocialButton
        provider='github'
        gatekeeper={process.env.REACT_APP_GITHUB_GATEKEEPER}
        appId={process.env.REACT_APP_GITHUB_CLIENT_ID}
        redirect={process.env.REACT_APP_AUTH_DOMAIN}
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Github
      </SocialButton>
    </div>
  );
};

export default Login;
