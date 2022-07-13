import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionSwing } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/Swing',
  component: AttentionSwing,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionSwing>

const Template: ComponentStory<typeof AttentionSwing> = () => (
  <Wrapper>
    <AttentionSwing duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionSwing>
  </Wrapper>
)

export const Swing = Template.bind({})
