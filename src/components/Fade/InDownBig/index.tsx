import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeInDownBigAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const FadeInDownBig = styled(BaseAnimation)`
  animation-name: ${FadeInDownBigAnimation};
`
