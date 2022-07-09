import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InDown',
  component: FadeInDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInDown>

const Template: ComponentStory<typeof FadeInDown> = () => (
  <Wrapper>
    <FadeInDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInDown>
  </Wrapper>
)

export const InDown = Template.bind({})
