import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlipOutY } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Flip/OutY',
  component: FlipOutY,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FlipOutY>

const Template: ComponentStory<typeof FlipOutY> = () => (
  <Wrapper>
    <FlipOutY duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FlipOutY>
  </Wrapper>
)

export const OutY = Template.bind({})
