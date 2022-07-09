import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const FadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const FadeOut = styled(BaseAnimation)`
  animation-name: ${FadeOutAnimation};
`
