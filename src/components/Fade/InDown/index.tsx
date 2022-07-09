import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeInDownAnimation = keyframes`
  from {
     opacity: 0;
     transform: translate3d(0, -100%, 0);
   }
   to {
     opacity: 1;
     transform: none;
   }
`

export const FadeInDown = styled(BaseAnimation)`
  animation-name: ${FadeInDownAnimation};
`
