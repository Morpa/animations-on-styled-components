import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideInDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/InDown',
  component: SlideInDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideInDown>

const Template: ComponentStory<typeof SlideInDown> = () => (
  <Wrapper>
    <SlideInDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideInDown>
  </Wrapper>
)

export const InDown = Template.bind({})
