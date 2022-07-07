import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const LightSpeedOutAnimation = keyframes`
  from {
     opacity: 1;
   }
   to {
     transform: translate3d(100%, 0, 0) skewX(30deg);
     opacity: 0;
   }
`

export const LightSpeedOut = styled(BaseAnimation)`
  animation-name: ${LightSpeedOutAnimation};
  animation-timing-function: ease-in;
`
