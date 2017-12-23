import React from 'react';
import MainTitle from '../assets/styledComponents/MainTitle';
import { Header } from 'semantic-ui-react';

class MainTitleText extends React.Component {
  render() {
    return(
      <div>
        <Header as={MainTitle} textAlign='center'>I Love</Header>
        <Header as={MainTitle} textAlign='center'>Heather Olsen</Header>
      </div>
    )
  }
}

export default MainTitleText;