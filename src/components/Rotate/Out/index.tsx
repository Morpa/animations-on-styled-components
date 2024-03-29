import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateOutAnimation = keyframes`
  from {
      transform-origin: center;
      opacity: 1;
    }
    to {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
`

export const RotateOut = styled(BaseAnimation)`
  animation-name: ${RotateOutAnimation};
`
