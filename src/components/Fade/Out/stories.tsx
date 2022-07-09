import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOut } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/Out',
  component: FadeOut,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOut>

const Template: ComponentStory<typeof FadeOut> = () => (
  <Wrapper>
    <FadeOut duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOut>
  </Wrapper>
)

export const Out = Template.bind({})
