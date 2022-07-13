import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionFlash } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/Flash',
  component: AttentionFlash,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionFlash>

const Template: ComponentStory<typeof AttentionFlash> = () => (
  <Wrapper>
    <AttentionFlash duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionFlash>
  </Wrapper>
)

export const Flash = Template.bind({})
