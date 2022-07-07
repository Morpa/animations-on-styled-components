import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateOutDownLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/OutDownLeft',
  component: RotateOutDownLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateOutDownLeft>

const Template: ComponentStory<typeof RotateOutDownLeft> = () => (
  <Wrapper>
    <RotateOutDownLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateOutDownLeft>
  </Wrapper>
)

export const OutDownLeft = Template.bind({})
