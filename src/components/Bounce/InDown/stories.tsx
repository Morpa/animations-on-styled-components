import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceInDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/InDown',
  component: BounceInDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceInDown>

const Template: ComponentStory<typeof BounceInDown> = () => (
  <Wrapper>
    <BounceInDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceInDown>
  </Wrapper>
)

export const InDown = Template.bind({})
