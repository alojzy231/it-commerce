import React from 'react';

import photo from '@img/HomepageAboutUsCrewPhoto.png';
import HighlightedTitle from '@generic/HighlightedTitle';

import {
  HomepageAboutUsContainer,
  HomepageAboutUsTextContent,
  HomepageAboutUsTitle,
  HomepageAboutUsText,
  HomepageAboutUsTextParagraph,
  HomepageAboutUsTextCompanyName,
  HomepageAboutUsImage,
} from './HomepageAboutUs.styles';

export default function HomepageAboutUs(): JSX.Element {
  return (
    <HomepageAboutUsContainer id="about-us">
      <HomepageAboutUsTextContent>
        <HighlightedTitle>
          <HomepageAboutUsTitle>About Us</HomepageAboutUsTitle>
        </HighlightedTitle>
        <HomepageAboutUsText>
          <HomepageAboutUsTextParagraph>
            IT-commerce was founded in 2020 as a result of an unhappy coffee accident. One of our
            founders spilled his coffee on his brand clothes and was pleased with a newly formed
            stain so he decided to create a merchendise. So here we are!
          </HomepageAboutUsTextParagraph>
          <HomepageAboutUsTextParagraph>
            Our company is based on hours of sleepless nights, litres of coffeine and passsionate
            people.
          </HomepageAboutUsTextParagraph>

          <HomepageAboutUsTextParagraph>
            <b>
              We are happy to welcome you to{' '}
              <HomepageAboutUsTextCompanyName>IT-commerce.</HomepageAboutUsTextCompanyName>
            </b>
          </HomepageAboutUsTextParagraph>
        </HomepageAboutUsText>
      </HomepageAboutUsTextContent>
      <HomepageAboutUsImage src={photo.src} alt="Our crew" />
    </HomepageAboutUsContainer>
  );
}
