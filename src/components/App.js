import React, { Component } from 'react';
import AppContainer from '../assets/styledComponents/AppContainer';
import MainBanner from './MainBanner';
import ReasonsList from './ReasonsList';
import MainImage from '../assets/images/mainheader2.JPG';
import { reasons }from '../data/reasons';

class App extends Component {
  render() {
    return (
      <div>
        <MainBanner backgroundImage={MainImage} />
        <AppContainer>
          <ReasonsList reasons={reasons} />
        </AppContainer>
      </div>
    );
  }
}

export default App;