import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateOutUpLeftAnimation = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`

export const RotateOutUpLeft = styled(BaseAnimation)`
  animation-name: ${RotateOutUpLeftAnimation};
`
