import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeOutRightAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`

export const FadeOutRight = styled(BaseAnimation)`
  animation-name: ${FadeOutRightAnimation};
`
