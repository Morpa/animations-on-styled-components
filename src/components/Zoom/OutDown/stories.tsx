import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomOutDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/OutDown',
  component: ZoomOutDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomOutDown>

const Template: ComponentStory<typeof ZoomOutDown> = () => (
  <Wrapper>
    <ZoomOutDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomOutDown>
  </Wrapper>
)

export const OutDown = Template.bind({})
