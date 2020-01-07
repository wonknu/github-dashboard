import React from 'react'
import SocialLogin from 'react-social-login';
import { Button } from "@chakra-ui/core";
import { DiGithubAlt } from 'react-icons/di';

class SocialButton extends React.Component {

  render() {
    return (
      <Button
        borderColor="gray.400"
        color="gray.500"
        variant="outline"
        size="sm"
        leftIcon={DiGithubAlt}
        onClick={this.props.triggerLogin}
        {...this.props}>
        {this.props.children}
      </Button>
    );
  }
}

export default SocialLogin(SocialButton);