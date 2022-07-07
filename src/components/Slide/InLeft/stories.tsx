import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideInLeft } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/InLeft',
  component: SlideInLeft,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideInLeft>

const Template: ComponentStory<typeof SlideInLeft> = () => (
  <Wrapper>
    <SlideInLeft duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideInLeft>
  </Wrapper>
)

export const InLeft = Template.bind({})
