import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlipBasic } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Flip/Basic',
  component: FlipBasic,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FlipBasic>

const Template: ComponentStory<typeof FlipBasic> = () => (
  <Wrapper>
    <FlipBasic duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FlipBasic>
  </Wrapper>
)

export const Basic = Template.bind({})
