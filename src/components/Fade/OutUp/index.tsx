import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeOutUpAnimation = keyframes`
  from {
     opacity: 1;
   }
   to {
     opacity: 0;
     transform: translate3d(0, -100%, 0);
   }
`

export const FadeOutUp = styled(BaseAnimation)`
  animation-name: ${FadeOutUpAnimation};
`
