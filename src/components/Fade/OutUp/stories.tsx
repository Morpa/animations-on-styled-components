import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutUp',
  component: FadeOutUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutUp>

const Template: ComponentStory<typeof FadeOutUp> = () => (
  <Wrapper>
    <FadeOutUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutUp>
  </Wrapper>
)

export const OutUp = Template.bind({})
