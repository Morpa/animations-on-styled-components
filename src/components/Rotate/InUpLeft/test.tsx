import React from 'react'
import { render } from '@testing-library/react'

import { RotateInUpLeft } from '.'

describe('<RotateInUpLeft />', () => {
  it('should render correctly', () => {
    const { container } = render(<RotateInUpLeft />)

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
        -webkit-animation-name: iXTXzy;
        animation-name: iXTXzy;
      }

      <div
        class="c0 c1"
      />
    `)
  })
})
