import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const BounceOutLeftAnimation = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`

export const BounceOutLeft = styled(BaseAnimation)`
  animation-name: ${BounceOutLeftAnimation};
`
