import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomInLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/InLeft',
  component: ZoomInLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomInLeft>

const Template: ComponentStory<typeof ZoomInLeft> = () => (
  <Wrapper>
    <ZoomInLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomInLeft>
  </Wrapper>
)

export const InLeft = Template.bind({})
