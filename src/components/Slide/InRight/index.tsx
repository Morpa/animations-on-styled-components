import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const SlideInRightAnimation = keyframes`
  from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
`

export const SlideInRight = styled(BaseAnimation)`
  animation-name: ${SlideInRightAnimation};
`
