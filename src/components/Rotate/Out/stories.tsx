import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateOut } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/Out',
  component: RotateOut,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateOut>

const Template: ComponentStory<typeof RotateOut> = () => (
  <Wrapper>
    <RotateOut duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateOut>
  </Wrapper>
)

export const Out = Template.bind({})
