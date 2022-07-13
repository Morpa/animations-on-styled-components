import React from 'react'
import { render } from '@testing-library/react'

import { AttentionSwing } from '.'

describe('<AttentionSwing />', () => {
  it('should render correctly', () => {
    const { container } = render(<AttentionSwing />)

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
        -webkit-animation-name: fvFieS;
        animation-name: fvFieS;
        -webkit-transform-origin: top center;
        -ms-transform-origin: top center;
        transform-origin: top center;
      }

      <div
        class="c0 c1"
      />
    `)
  })
})
