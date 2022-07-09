import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FadeInDownBig } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Fade/InDownBig',
  component: FadeInDownBig,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FadeInDownBig>

const Template: ComponentStory<typeof FadeInDownBig> = () => (
  <Wrapper>
    <FadeInDownBig duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FadeInDownBig>
  </Wrapper>
)

export const InDownBig = Template.bind({})
