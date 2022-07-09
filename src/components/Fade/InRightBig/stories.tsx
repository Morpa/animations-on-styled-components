import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInRightBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InRightBig',
  component: FadeInRightBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInRightBig>

const Template: ComponentStory<typeof FadeInRightBig> = () => (
  <Wrapper>
    <FadeInRightBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInRightBig>
  </Wrapper>
)

export const InRightBig = Template.bind({})
