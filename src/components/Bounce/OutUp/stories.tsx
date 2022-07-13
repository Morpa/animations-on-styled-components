import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceOutUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/OutUp',
  component: BounceOutUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceOutUp>

const Template: ComponentStory<typeof BounceOutUp> = () => (
  <Wrapper>
    <BounceOutUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceOutUp>
  </Wrapper>
)

export const OutUp = Template.bind({})
