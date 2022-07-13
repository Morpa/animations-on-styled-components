import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceOutRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/OutRight',
  component: BounceOutRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceOutRight>

const Template: ComponentStory<typeof BounceOutRight> = () => (
  <Wrapper>
    <BounceOutRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceOutRight>
  </Wrapper>
)

export const OutRight = Template.bind({})
