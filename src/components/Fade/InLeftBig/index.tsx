import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeInLeftBigAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const FadeInLeftBig = styled(BaseAnimation)`
  animation-name: ${FadeInLeftBigAnimation};
`
