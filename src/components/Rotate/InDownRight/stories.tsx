import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RotateInDownRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Rotate/InDownRight',
  component: RotateInDownRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof RotateInDownRight>

const Template: ComponentStory<typeof RotateInDownRight> = () => (
  <Wrapper>
    <RotateInDownRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </RotateInDownRight>
  </Wrapper>
)

export const InDownRight = Template.bind({})
