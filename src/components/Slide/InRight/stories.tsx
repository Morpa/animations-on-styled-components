import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideInRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/InRight',
  component: SlideInRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideInRight>

const Template: ComponentStory<typeof SlideInRight> = () => (
  <Wrapper>
    <SlideInRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideInRight>
  </Wrapper>
)

export const InRight = Template.bind({})
