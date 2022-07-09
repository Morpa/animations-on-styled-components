import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeInRightAnimation = keyframes`
  from {
     opacity: 0;
     transform: translate3d(100%, 0, 0);
   }
   to {
     opacity: 1;
     transform: none;
   }
`

export const FadeInRight = styled(BaseAnimation)`
  animation-name: ${FadeInRightAnimation};
`
