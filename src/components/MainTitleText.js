import React from 'react';
import MainTitle from '../assets/styledComponents/MainTitle';
import { Header, Segment } from 'semantic-ui-react';

class MainTitleText extends React.Component {
  render() {
    return(
      <div>
        <Header as={MainTitle} textAlign='center'>I Love You</Header>
        <Header as={MainTitle} textAlign='center'>Heather Olsen</Header>
      </div>
    )
  }
}

export default MainTitleText;