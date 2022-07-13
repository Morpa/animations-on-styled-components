import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionHeadShake } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/HeadShake',
  component: AttentionHeadShake,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionHeadShake>

const Template: ComponentStory<typeof AttentionHeadShake> = () => (
  <Wrapper>
    <AttentionHeadShake duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionHeadShake>
  </Wrapper>
)

export const HeadShake = Template.bind({})
