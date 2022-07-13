import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceInLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/InLeft',
  component: BounceInLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceInLeft>

const Template: ComponentStory<typeof BounceInLeft> = () => (
  <Wrapper>
    <BounceInLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceInLeft>
  </Wrapper>
)

export const InLeft = Template.bind({})
