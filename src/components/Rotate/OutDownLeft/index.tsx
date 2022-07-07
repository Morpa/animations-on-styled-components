import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateOutDownLeftAnimation = keyframes`
  from {
     transform-origin: left bottom;
     opacity: 1;
   }
   to {
     transform-origin: left bottom;
     transform: rotate3d(0, 0, 1, 45deg);
     opacity: 0;
   }
`

export const RotateOutDownLeft = styled(BaseAnimation)`
  animation-name: ${RotateOutDownLeftAnimation};
`
