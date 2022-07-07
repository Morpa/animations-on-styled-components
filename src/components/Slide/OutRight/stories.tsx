import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideOutRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/OutRight',
  component: SlideOutRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideOutRight>

const Template: ComponentStory<typeof SlideOutRight> = () => (
  <Wrapper>
    <SlideOutRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideOutRight>
  </Wrapper>
)

export const OutRight = Template.bind({})
