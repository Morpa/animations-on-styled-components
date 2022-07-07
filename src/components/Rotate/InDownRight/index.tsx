import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateInDownRightAnimation = keyframes`
  from {
     transform-origin: right bottom;
     transform: rotate3d(0, 0, 1, 45deg);
     opacity: 0;
   }
   to {
     transform-origin: right bottom;
     transform: none;
     opacity: 1;
   }
`

export const RotateInDownRight = styled(BaseAnimation)`
  animation-name: ${RotateInDownRightAnimation};
`
