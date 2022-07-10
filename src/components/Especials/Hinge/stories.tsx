import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EspecialHinge } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Especial/Hinge',
  component: EspecialHinge,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof EspecialHinge>

const Template: ComponentStory<typeof EspecialHinge> = () => (
  <Wrapper>
    <EspecialHinge duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </EspecialHinge>
  </Wrapper>
)

export const Hinge = Template.bind({})
