import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LightSpeedOut } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'LightSpeed/Out',
  component: LightSpeedOut,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof LightSpeedOut>

const Template: ComponentStory<typeof LightSpeedOut> = () => (
  <Wrapper>
    <LightSpeedOut duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </LightSpeedOut>
  </Wrapper>
)

export const Out = Template.bind({})
