import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateInAnimation = keyframes`
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  to {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`

export const RotateIn = styled(BaseAnimation)`
  animation-name: ${RotateInAnimation};
`
