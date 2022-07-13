import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceInRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/InRight',
  component: BounceInRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceInRight>

const Template: ComponentStory<typeof BounceInRight> = () => (
  <Wrapper>
    <BounceInRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceInRight>
  </Wrapper>
)

export const InRight = Template.bind({})
