import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutRightBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutRightBig',
  component: FadeOutRightBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutRightBig>

const Template: ComponentStory<typeof FadeOutRightBig> = () => (
  <Wrapper>
    <FadeOutRightBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutRightBig>
  </Wrapper>
)

export const OutRightBig = Template.bind({})
