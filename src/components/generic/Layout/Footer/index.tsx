import React from 'react';

import { FooterContainer, FooterWrapper, FooterText, FooterPortfolioLink } from './Footer.styles';

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          Created with &lt;3 by{' '}
          <FooterPortfolioLink href="https://damian-klos-resume.vercel.app/">
            Damian Kłos
          </FooterPortfolioLink>
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
}
