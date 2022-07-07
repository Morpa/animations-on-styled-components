import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideInUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Slide/InUp',
  component: SlideInUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof SlideInUp>

const Template: ComponentStory<typeof SlideInUp> = () => (
  <Wrapper>
    <SlideInUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </SlideInUp>
  </Wrapper>
)

export const InUp = Template.bind({})
