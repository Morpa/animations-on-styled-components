import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomOutLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/OutLeft',
  component: ZoomOutLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomOutLeft>

const Template: ComponentStory<typeof ZoomOutLeft> = () => (
  <Wrapper>
    <ZoomOutLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomOutLeft>
  </Wrapper>
)

export const OutLeft = Template.bind({})
