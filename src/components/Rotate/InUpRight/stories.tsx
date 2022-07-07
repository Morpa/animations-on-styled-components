import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateInUpRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/InUpRight',
  component: RotateInUpRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateInUpRight>

const Template: ComponentStory<typeof RotateInUpRight> = () => (
  <Wrapper>
    <RotateInUpRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateInUpRight>
  </Wrapper>
)

export const InUpRight = Template.bind({})
