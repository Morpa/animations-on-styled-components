import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutLeft',
  component: FadeOutLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutLeft>

const Template: ComponentStory<typeof FadeOutLeft> = () => (
  <Wrapper>
    <FadeOutLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutLeft>
  </Wrapper>
)

export const OutLeft = Template.bind({})
