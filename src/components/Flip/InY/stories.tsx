import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlipInY } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Flip/InY',
  component: FlipInY,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FlipInY>

const Template: ComponentStory<typeof FlipInY> = () => (
  <Wrapper>
    <FlipInY duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FlipInY>
  </Wrapper>
)

export const InY = Template.bind({})
