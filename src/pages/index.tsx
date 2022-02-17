import React from 'react';

import HomepageHero from '@homepage/HomepageHero';

export default function Homeapage(): JSX.Element {
  return (
    <>
      <HomepageHero />
      <div style={{ minHeight: '100vh' }}>
        <h1>Test</h1>
      </div>
    </>
  );
}
