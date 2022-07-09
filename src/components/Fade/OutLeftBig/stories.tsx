import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutLeftBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutLeftBig',
  component: FadeOutLeftBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutLeftBig>

const Template: ComponentStory<typeof FadeOutLeftBig> = () => (
  <Wrapper>
    <FadeOutLeftBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutLeftBig>
  </Wrapper>
)

export const OutLeftBig = Template.bind({})
