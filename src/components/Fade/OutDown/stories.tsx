import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutDown',
  component: FadeOutDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutDown>

const Template: ComponentStory<typeof FadeOutDown> = () => (
  <Wrapper>
    <FadeOutDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutDown>
  </Wrapper>
)

export const OutDown = Template.bind({})
