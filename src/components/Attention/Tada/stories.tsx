import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionTada } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/Tada',
  component: AttentionTada,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionTada>

const Template: ComponentStory<typeof AttentionTada> = () => (
  <Wrapper>
    <AttentionTada duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionTada>
  </Wrapper>
)

export const Tada = Template.bind({})
