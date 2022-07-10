import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EspecialRollIn } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Especial/RollIn',
  component: EspecialRollIn,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof EspecialRollIn>

const Template: ComponentStory<typeof EspecialRollIn> = () => (
  <Wrapper>
    <EspecialRollIn duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </EspecialRollIn>
  </Wrapper>
)

export const RollIn = Template.bind({})
