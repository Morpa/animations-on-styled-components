import React from 'react'
import { render } from '@testing-library/react'

import { ZoomOutRight } from '.'

describe('<ZoomOutRight />', () => {
  it('should render correctly', () => {
    const { container } = render(<ZoomOutRight />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        -webkit-animation-direction: normal;
        animation-direction: normal;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-play-state: running;
        animation-play-state: running;
        display: block;
      }

      .c1 {
        -webkit-animation-name: jZKJcG;
        animation-name: jZKJcG;
      }

      <div
        class="c0 c1"
      />
    `)
  })
})