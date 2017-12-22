import React, { Component } from 'react';
import AppContainer from '../assets/styledComponents/AppContainer';
import MainBanner from './MainBanner';
import ReasonsList from './ReasonsList';
import Placeholder from '../assets/images/mainheader2.JPG';
import MainTitle from '../assets/styledComponents/MainTitle';
import { reasons, testReasons }from '../data/reasons';
import { Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <MainBanner backgroundImage={Placeholder} />
        <AppContainer>
          <ReasonsList reasons={reasons} />
        </AppContainer>
      </div>
    );
  }
}

export default App;