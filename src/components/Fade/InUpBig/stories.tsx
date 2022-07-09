import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInUpBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InUpBig',
  component: FadeInUpBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInUpBig>

const Template: ComponentStory<typeof FadeInUpBig> = () => (
  <Wrapper>
    <FadeInUpBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInUpBig>
  </Wrapper>
)

export const InUpBig = Template.bind({})
