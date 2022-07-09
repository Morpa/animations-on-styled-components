import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutRight',
  component: FadeOutRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutRight>

const Template: ComponentStory<typeof FadeOutRight> = () => (
  <Wrapper>
    <FadeOutRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutRight>
  </Wrapper>
)

export const OutRight = Template.bind({})
