import React from 'react'
import { render } from '@testing-library/react'

import { LightSpeedIn } from '.'

describe('<LightSpeedIn />', () => {
  it('should render correctly', () => {
    const { container } = render(<LightSpeedIn />)

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
