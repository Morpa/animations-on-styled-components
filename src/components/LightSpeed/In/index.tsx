import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const LightSpeedInAnimation = keyframes`
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }
  to {
    transform: none;
    opacity: 1;
  }
`

export const LightSpeedIn = styled(BaseAnimation)`
  animation-name: ${LightSpeedInAnimation};
  animation-timing-function: ease-out;
`
