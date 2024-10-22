import { createGlobalStyle } from 'styled-components';

export const mqMobile = '@media (max-width: 600px)';
export const mqTablet = '@media (min-width: 601px) and (max-width: 992px)';
export const mqDesktop = '@media (min-width: 993px)';
export const mqTabletAndMobile = '@media (max-width: 992px)';

const styled = { createGlobalStyle }; // To fix by Prettier

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --txt-0: #0f172a;
    --primary-color: #581c87;
    --secondary-color: #fcd34d;
    --tertiary-color: #78350f;
  }

  * {
    box-sizing: border-box;
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  html {
    /* stylelint-disable-next-line unit-allowed-list */
    font-size: 16px;

    /* 1.1713vw = (16 / 1366).toFixed(6) * 100 */
    font-size: 1.1713vw;

    a {
      color: unset;
      text-decoration: none;
    }

    ${mqMobile} {
      /* 4.4444vw = (16 / 360).toFixed(6) * 100 */
      font-size: 4.4444vw;
    }
    ${mqTablet} {
      /* 2.0833vw = (16 / 768).toFixed(6) * 100 */
      font-size: 2.0833vw;
    }
  }

  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
