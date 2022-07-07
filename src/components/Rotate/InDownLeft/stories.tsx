import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateInDownLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/InDownLeft',
  component: RotateInDownLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateInDownLeft>

const Template: ComponentStory<typeof RotateInDownLeft> = () => (
  <Wrapper>
    <RotateInDownLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateInDownLeft>
  </Wrapper>
)

export const InDownLeft = Template.bind({})
