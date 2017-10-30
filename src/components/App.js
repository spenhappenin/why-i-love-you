import React, { Component } from 'react';
import AppContainer from '../assets/styledComponents/AppContainer';
import MainBanner from './MainBanner';
import ReasonsList from './ReasonsList';
import Placeholder from '../assets/images/placeholder.svg';
import reasons from '../data/reasons';

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