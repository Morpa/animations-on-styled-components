import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateInUpLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/InUpLeft',
  component: RotateInUpLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateInUpLeft>

const Template: ComponentStory<typeof RotateInUpLeft> = () => (
  <Wrapper>
    <RotateInUpLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateInUpLeft>
  </Wrapper>
)

export const InUpLeft = Template.bind({})
