import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideOutDown } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/OutDown',
  component: SlideOutDown,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideOutDown>

const Template: ComponentStory<typeof SlideOutDown> = () => (
  <Wrapper>
    <SlideOutDown duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideOutDown>
  </Wrapper>
)

export const OutDown = Template.bind({})
