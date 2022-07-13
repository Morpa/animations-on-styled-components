import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceOutLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/OutLeft',
  component: BounceOutLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceOutLeft>

const Template: ComponentStory<typeof BounceOutLeft> = () => (
  <Wrapper>
    <BounceOutLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceOutLeft>
  </Wrapper>
)

export const OutLeft = Template.bind({})
