import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionWobble } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/Wobble',
  component: AttentionWobble,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionWobble>

const Template: ComponentStory<typeof AttentionWobble> = () => (
  <Wrapper>
    <AttentionWobble duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionWobble>
  </Wrapper>
)

export const Wobble = Template.bind({})
