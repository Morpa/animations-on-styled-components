import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const SlideOutLeftAnimation = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
`

export const SlideOutLeft = styled(BaseAnimation)`
  animation-name: ${SlideOutLeftAnimation};
`
