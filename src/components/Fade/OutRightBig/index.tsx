import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeOutRightBigAnimation = keyframes`
   from {
   opacity: 1;
  }
  to {
   opacity: 0;
   transform: translate3d(2000px, 0, 0);
  }
`

export const FadeOutRightBig = styled(BaseAnimation)`
  animation-name: ${FadeOutRightBigAnimation};
`
