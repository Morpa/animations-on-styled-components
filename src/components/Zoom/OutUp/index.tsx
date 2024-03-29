import { BaseAnimation } from 'components/AnimationBase'
import styled, { keyframes } from 'styled-components'

const ZoomOutUpAnimation = keyframes`
  40% {
      opacity: 1;
      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
    to {
      opacity: 0;
      transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
`

export const ZoomOutUp = styled(BaseAnimation)`
  animation-name: ${ZoomOutUpAnimation};
`
