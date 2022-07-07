import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LightSpeedIn } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'LightSpeed/In',
  component: LightSpeedIn,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof LightSpeedIn>

const Template: ComponentStory<typeof LightSpeedIn> = () => (
  <Wrapper>
    <LightSpeedIn duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </LightSpeedIn>
  </Wrapper>
)

export const In = Template.bind({})
