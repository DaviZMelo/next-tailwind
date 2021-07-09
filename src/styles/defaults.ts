import { css, keyframes } from 'styled-components';

const FadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeInAnimation = css`
  animation: ${FadeAnimation} ease-in-out 1s;
`;
