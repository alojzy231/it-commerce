import React from 'react';

import useSubtitleItemText from '@hooks/useSubtitleItem';
import photo from '@img/HomepageHeroImagePhoto.jpg';

import {
  HomepageHeroContainer,
  HomepageHeroImage,
  HomepageHeroSubtitleContainer,
  HomepageHeroSubtitleInsertionPoint,
  HomepageHeroSubtitleText,
  HomepageHeroTextContainer,
  HomepageHeroTitle,
} from './HomepageHero.styles';

export default function HomepageHero(): JSX.Element {
  const subtitleItemText = useSubtitleItemText();

  return (
    <HomepageHeroContainer>
      <HomepageHeroTextContainer>
        <HomepageHeroTitle>Hello World,</HomepageHeroTitle>
        <HomepageHeroSubtitleContainer>
          <HomepageHeroSubtitleText>I want to buy {subtitleItemText}</HomepageHeroSubtitleText>
          <HomepageHeroSubtitleInsertionPoint />
        </HomepageHeroSubtitleContainer>
      </HomepageHeroTextContainer>

      <HomepageHeroImage src={photo.src} alt="Photo by Tembela Bohle from Pexels" />
    </HomepageHeroContainer>
  );
}
