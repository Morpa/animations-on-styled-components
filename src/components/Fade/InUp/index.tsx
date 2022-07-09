import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeInUpAnimation = keyframes`
  from {
   opacity: 0;
   transform: translate3d(0, 100%, 0);
  }
  to {
   opacity: 1;
   transform: none;
  }
`

export const FadeInUp = styled(BaseAnimation)`
  animation-name: ${FadeInUpAnimation};
`
