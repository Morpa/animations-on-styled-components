import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeOutUpBigAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`

export const FadeOutUpBig = styled(BaseAnimation)`
  animation-name: ${FadeOutUpBigAnimation};
`
