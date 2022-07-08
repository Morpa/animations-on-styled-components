import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlipInX } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Flip/InX',
  component: FlipInX,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FlipInX>

const Template: ComponentStory<typeof FlipInX> = () => (
  <Wrapper>
    <FlipInX duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FlipInX>
  </Wrapper>
)

export const InX = Template.bind({})
