import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateOutUpLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/OutUpLeft',
  component: RotateOutUpLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateOutUpLeft>

const Template: ComponentStory<typeof RotateOutUpLeft> = () => (
  <Wrapper>
    <RotateOutUpLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateOutUpLeft>
  </Wrapper>
)

export const OutUpLeft = Template.bind({})
