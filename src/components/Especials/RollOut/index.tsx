import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const EspecialRollOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`

export const EspecialRollOut = styled(BaseAnimation)`
  animation-name: ${EspecialRollOutAnimation};
`
