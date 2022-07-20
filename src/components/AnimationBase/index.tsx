/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

type BaseAnimationProps = {
  duration?: string
  timingFunction?: string
  delay?: string
  iterationCount?: string
  direction?: string
  fillMode?: string
  playState?: string
  display?: string
}

export const BaseAnimation = styled.div<BaseAnimationProps>`
  ${({
  duration = '1s',
  timingFunction = 'ease',
  delay = '0s',
  iterationCount = '1',
  direction = 'normal',
  fillMode = 'both',
  playState = 'running',
  display = 'block'
}) => css`
    animation-duration: ${duration};
    animation-timing-function: ${timingFunction};
    animation-delay: ${delay};
    animation-iteration-count: ${iterationCount};
    animation-direction: ${direction};
    animation-fill-mode: ${fillMode};
    animation-play-state: ${playState};
    display: ${display};
  `}
`
