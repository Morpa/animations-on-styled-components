import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const SlideInUpAnimation = keyframes`
  from {
     transform: translate3d(0, 100%, 0);
     visibility: visible;
   }
   to {
     transform: translate3d(0, 0, 0);
   }
`

export const SlideInUp = styled(BaseAnimation)`
  animation-name: ${SlideInUpAnimation};
`
