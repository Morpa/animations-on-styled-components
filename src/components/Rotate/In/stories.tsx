import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateIn } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/In',
  component: RotateIn,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateIn>

const Template: ComponentStory<typeof RotateIn> = () => (
  <Wrapper>
    <RotateIn duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateIn>
  </Wrapper>
)

export const In = Template.bind({})
