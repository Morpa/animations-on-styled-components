import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeOutLeftAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`

export const FadeOutLeft = styled(BaseAnimation)`
  animation-name: ${FadeOutLeftAnimation};
`
