import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InLeft',
  component: FadeInLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInLeft>

const Template: ComponentStory<typeof FadeInLeft> = () => (
  <Wrapper>
    <FadeInLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInLeft>
  </Wrapper>
)

export const InLeft = Template.bind({})
