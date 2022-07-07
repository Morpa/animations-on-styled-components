import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideOutLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/OutLeft',
  component: SlideOutLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideOutLeft>

const Template: ComponentStory<typeof SlideOutLeft> = () => (
  <Wrapper>
    <SlideOutLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideOutLeft>
  </Wrapper>
)

export const OutLeft = Template.bind({})
