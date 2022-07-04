import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomInDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/InDown',
  component: ZoomInDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomInDown>

const Template: ComponentStory<typeof ZoomInDown> = () => (
  <Wrapper>
    <ZoomInDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomInDown>
  </Wrapper>
)

export const InDown = Template.bind({})
