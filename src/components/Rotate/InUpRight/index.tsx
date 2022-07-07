import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateInUpRightAnimation = keyframes`
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`

export const RotateInUpRight = styled(BaseAnimation)`
  animation-name: ${RotateInUpRightAnimation};
`
