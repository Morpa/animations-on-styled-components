import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceIn } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/In',
  component: BounceIn,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceIn>

const Template: ComponentStory<typeof BounceIn> = () => (
  <Wrapper>
    <BounceIn duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceIn>
  </Wrapper>
)

export const In = Template.bind({})
