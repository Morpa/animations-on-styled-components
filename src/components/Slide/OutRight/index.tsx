import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const SlideOutRightAnimation = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
`

export const SlideOutRight = styled(BaseAnimation)`
  animation-name: ${SlideOutRightAnimation};
`
