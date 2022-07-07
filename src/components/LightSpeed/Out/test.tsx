import React from 'react'
import { render } from '@testing-library/react'

import { LightSpeedOut } from '.'

describe('<LightSpeedOut />', () => {
  it('should render correctly', () => {
    const { container } = render(<LightSpeedOut />)

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
