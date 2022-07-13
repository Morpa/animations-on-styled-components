import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionPulse } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/Pulse',
  component: AttentionPulse,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionPulse>

const Template: ComponentStory<typeof AttentionPulse> = () => (
  <Wrapper>
    <AttentionPulse duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionPulse>
  </Wrapper>
)

export const Pulse = Template.bind({})
