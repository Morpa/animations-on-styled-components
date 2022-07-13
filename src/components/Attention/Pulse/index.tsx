import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const AttentionPulseAnimation = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`

export const AttentionPulse = styled(BaseAnimation)`
  animation-name: ${AttentionPulseAnimation};
`
