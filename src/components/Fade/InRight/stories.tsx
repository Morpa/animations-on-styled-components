import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InRight',
  component: FadeInRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInRight>

const Template: ComponentStory<typeof FadeInRight> = () => (
  <Wrapper>
    <FadeInRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInRight>
  </Wrapper>
)

export const InRight = Template.bind({})
