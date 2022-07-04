import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomIn } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/In',
  component: ZoomIn,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomIn>

const Template: ComponentStory<typeof ZoomIn> = () => (
  <Wrapper>
    <ZoomIn duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomIn>
  </Wrapper>
)

export const In = Template.bind({})
