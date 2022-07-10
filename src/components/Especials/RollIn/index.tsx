import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const EspecialRollInAnimation = keyframes`
  from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
    to {
      opacity: 1;
      transform: none;
    }
`

export const EspecialRollIn = styled(BaseAnimation)`
  animation-name: ${EspecialRollInAnimation};
`
