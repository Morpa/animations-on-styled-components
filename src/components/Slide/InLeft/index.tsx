import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const SlideInLeftAnimation = keyframes`
  from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
`

export const SlideInLeft = styled(BaseAnimation)`
  animation-name: ${SlideInLeftAnimation};
`
