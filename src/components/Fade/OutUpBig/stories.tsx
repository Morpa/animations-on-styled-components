import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeOutUpBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/OutUpBig',
  component: FadeOutUpBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeOutUpBig>

const Template: ComponentStory<typeof FadeOutUpBig> = () => (
  <Wrapper>
    <FadeOutUpBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeOutUpBig>
  </Wrapper>
)

export const OutUpBig = Template.bind({})
