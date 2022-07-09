import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInLeftBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InLeftBig',
  component: FadeInLeftBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInLeftBig>

const Template: ComponentStory<typeof FadeInLeftBig> = () => (
  <Wrapper>
    <FadeInLeftBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInLeftBig>
  </Wrapper>
)

export const InLeftBig = Template.bind({})
