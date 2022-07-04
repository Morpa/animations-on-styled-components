import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomOut } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/Out',
  component: ZoomOut,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomOut>

const Template: ComponentStory<typeof ZoomOut> = () => (
  <Wrapper>
    <ZoomOut duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomOut>
  </Wrapper>
)

export const Out = Template.bind({})
