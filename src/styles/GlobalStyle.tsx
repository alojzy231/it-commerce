import { createGlobalStyle } from 'styled-components';

import { ITheme } from './theme';
import { Header1, Header2, Header3, Header4, Header5, Header6, ParagraphBig } from './typography';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    :root {
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Segoe UI' , sans-serif;

        overflow: ${({ theme: { hideOverflowOnBody } }): string =>
          hideOverflowOnBody ? 'hidden' : 'auto'} !important;
    }

    h1{
        ${Header1};
    }
    h2{
        ${Header2};
    }
    h3{
        ${Header3};
    }
    h4{
        ${Header4};
    }
    h5{
        ${Header5};
    }
    h6{
        ${Header6};
    }
    p{
        ${ParagraphBig}
    }

    img{
        content-visibility: auto;
    }
`;

export default GlobalStyle;
