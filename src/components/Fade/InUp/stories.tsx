import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InUp',
  component: FadeInUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInUp>

const Template: ComponentStory<typeof FadeInUp> = () => (
  <Wrapper>
    <FadeInUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInUp>
  </Wrapper>
)

export const InUp = Template.bind({})
