import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceBasic } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/Basic',
  component: BounceBasic,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceBasic>

const Template: ComponentStory<typeof BounceBasic> = () => (
  <Wrapper>
    <BounceBasic duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceBasic>
  </Wrapper>
)

export const Basic = Template.bind({})
