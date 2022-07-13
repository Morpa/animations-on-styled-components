import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceOut } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/Out',
  component: BounceOut,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceOut>

const Template: ComponentStory<typeof BounceOut> = () => (
  <Wrapper>
    <BounceOut duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceOut>
  </Wrapper>
)

export const Out = Template.bind({})
