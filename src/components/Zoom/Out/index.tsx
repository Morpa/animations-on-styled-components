import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const ZoomOutAnimation = keyframes`
  from {
   opacity: 1;
  }
  50% {
   opacity: 0;
   transform: scale3d(.3, .3, .3);
  }
  to {
   opacity: 0;
  }
`

export const ZoomOut = styled(BaseAnimation)`
  animation-name: ${ZoomOutAnimation};
`
