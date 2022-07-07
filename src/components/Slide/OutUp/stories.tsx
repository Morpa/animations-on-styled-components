import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideOutUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/OutUp',
  component: SlideOutUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideOutUp>

const Template: ComponentStory<typeof SlideOutUp> = () => (
  <Wrapper>
    <SlideOutUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideOutUp>
  </Wrapper>
)

export const OutUp = Template.bind({})
