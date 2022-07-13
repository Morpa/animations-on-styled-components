import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionJello } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/Jello',
  component: AttentionJello,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionJello>

const Template: ComponentStory<typeof AttentionJello> = () => (
  <Wrapper>
    <AttentionJello duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionJello>
  </Wrapper>
)

export const Jello = Template.bind({})
