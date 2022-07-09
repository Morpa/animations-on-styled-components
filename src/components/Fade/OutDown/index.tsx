import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeOutDownAnimation = keyframes`
  from {
     opacity: 1;
   }
   to {
     opacity: 0;
     transform: translate3d(0, 100%, 0);
   }
`

export const FadeOutDown = styled(BaseAnimation)`
  animation-name: ${FadeOutDownAnimation};
`
