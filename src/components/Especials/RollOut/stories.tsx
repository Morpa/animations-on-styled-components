import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EspecialRollOut } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Especial/RollOut',
  component: EspecialRollOut,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof EspecialRollOut>

const Template: ComponentStory<typeof EspecialRollOut> = () => (
  <Wrapper>
    <EspecialRollOut duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </EspecialRollOut>
  </Wrapper>
)

export const RollOut = Template.bind({})
