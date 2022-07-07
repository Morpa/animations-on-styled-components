import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateOutUpRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/OutUpRight',
  component: RotateOutUpRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateOutUpRight>

const Template: ComponentStory<typeof RotateOutUpRight> = () => (
  <Wrapper>
    <RotateOutUpRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateOutUpRight>
  </Wrapper>
)

export const OutUpRight = Template.bind({})
