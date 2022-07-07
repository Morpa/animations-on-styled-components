import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateInDownLeftAnimation = keyframes`
  from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
    to {
      transform-origin: left bottom;
      transform: none;
      opacity: 1;
    }
`

export const RotateInDownLeft = styled(BaseAnimation)`
  animation-name: ${RotateInDownLeftAnimation};
`
