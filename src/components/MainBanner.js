import React from 'react'
import DarkOverlay from '../assets/styledComponents/DarkOverlay';
import ImageSectionDiv from '../assets/styledComponents/ImageSectionDiv';
import MainTitleText from './MainTitleText';

const MainBanner = ({ backgroundImage }) => (
  <ImageSectionDiv backgroundImage={backgroundImage}>
    <DarkOverlay>
      <MainTitleText />
    </DarkOverlay>
  </ImageSectionDiv>
)

export default MainBanner;