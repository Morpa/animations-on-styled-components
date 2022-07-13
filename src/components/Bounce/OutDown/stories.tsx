import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceOutDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/OutDown',
  component: BounceOutDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceOutDown>

const Template: ComponentStory<typeof BounceOutDown> = () => (
  <Wrapper>
    <BounceOutDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceOutDown>
  </Wrapper>
)

export const OutDown = Template.bind({})
