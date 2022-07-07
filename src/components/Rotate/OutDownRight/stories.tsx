import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateOutDownRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/OutDownRight',
  component: RotateOutDownRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateOutDownRight>

const Template: ComponentStory<typeof RotateOutDownRight> = () => (
  <Wrapper>
    <RotateOutDownRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateOutDownRight>
  </Wrapper>
)

export const OutDownRight = Template.bind({})
