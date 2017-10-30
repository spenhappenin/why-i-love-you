import React, { Component } from 'react';
import AppContainer from '../assets/styledComponents/AppContainer';
import MainBanner from './MainBanner';
import ReasonsList from './ReasonsList';
import Placeholder from '../assets/images/mainheader.JPG';
import MainTitle from '../assets/styledComponents/MainTitle';
import reasons from '../data/reasons';
import { Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <MainBanner backgroundImage={Placeholder} />
        <AppContainer>
          <Header as={MainTitle} textAlign='center'>Heather Olsen</Header>
          <ReasonsList reasons={reasons} />
        </AppContainer>
      </div>
    );
  }
}

export default App;