import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const SlideOutUpAnimation = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
`

export const SlideOutUp = styled(BaseAnimation)`
  animation-name: ${SlideOutUpAnimation};
`
