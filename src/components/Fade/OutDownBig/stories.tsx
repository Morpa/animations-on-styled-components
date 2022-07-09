import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutDownBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutDownBig',
  component: FadeOutDownBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutDownBig>

const Template: ComponentStory<typeof FadeOutDownBig> = () => (
  <Wrapper>
    <FadeOutDownBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutDownBig>
  </Wrapper>
)

export const OutDownBig = Template.bind({})
