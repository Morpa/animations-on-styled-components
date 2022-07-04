import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const ZoomInAnimation = keyframes`
  from {
     opacity: 0;
     transform: scale3d(.3, .3, .3);
   }
   50% {
     opacity: 1;
   }
`

export const ZoomIn = styled(BaseAnimation)`
  animation-name: ${ZoomInAnimation};
`
