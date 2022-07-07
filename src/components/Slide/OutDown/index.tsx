import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const SlideOutDownAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`

export const SlideOutDown = styled(BaseAnimation)`
  animation-name: ${SlideOutDownAnimation};
`
