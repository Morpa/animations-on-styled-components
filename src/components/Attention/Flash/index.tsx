import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const AttentionFlashAnimation = keyframes`
  from, 50%, to {
     opacity: 1;
   }
   25%, 75% {
     opacity: 0;
   }
`

export const AttentionFlash = styled(BaseAnimation)`
  animation-name: ${AttentionFlashAnimation};
`
