import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeIn } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/In',
  component: FadeIn,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeIn>

const Template: ComponentStory<typeof FadeIn> = () => (
  <Wrapper>
    <FadeIn duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeIn>
  </Wrapper>
)

export const In = Template.bind({})
