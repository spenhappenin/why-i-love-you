import React from 'react'
import DarkOverlay from '../assets/styledComponents/DarkOverlay';
import ImageSectionDiv from '../assets/styledComponents/ImageSectionDiv';
import MainTitle from '../assets/styledComponents/MainTitle';
import { Header } from 'semantic-ui-react';

const MainBanner = ({ backgroundImage }) => (
  <ImageSectionDiv backgroundImage={backgroundImage}>
    <DarkOverlay>
      <Header as={MainTitle} textAlign='center'>Heather Olsen</Header>
    </DarkOverlay>
  </ImageSectionDiv>
)

const styles = {
  txt: {
    color: 'white'
  }
}

export default MainBanner;