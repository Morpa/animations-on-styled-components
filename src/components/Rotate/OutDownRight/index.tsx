import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const RotateOutDownRightAnimation = keyframes`
  from {
      transform-origin: right bottom;
      opacity: 1;
    }
    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
`

export const RotateOutDownRight = styled(BaseAnimation)`
  animation-name: ${RotateOutDownRightAnimation};
`
