import React from 'react'
import DarkOverlay from '../assets/styledComponents/DarkOverlay';
import ImageSectionDiv from '../assets/styledComponents/ImageSectionDiv';
import MainTitle from '../assets/styledComponents/MainTitle';
import MainTitleText from './MainTitleText';
import { Header, Transition } from 'semantic-ui-react';

const MainBanner = ({ backgroundImage }) => (
  <ImageSectionDiv backgroundImage={backgroundImage}>
    <DarkOverlay>
      <MainTitleText />
    </DarkOverlay>
  </ImageSectionDiv>
)

export default MainBanner;