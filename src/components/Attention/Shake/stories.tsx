import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionShake } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/Shake',
  component: AttentionShake,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionShake>

const Template: ComponentStory<typeof AttentionShake> = () => (
  <Wrapper>
    <AttentionShake duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionShake>
  </Wrapper>
)

export const Shake = Template.bind({})
