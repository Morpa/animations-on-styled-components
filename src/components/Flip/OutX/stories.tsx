import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FlipOutX } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Flip/OutX',
  component: FlipOutX,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof FlipOutX>

const Template: ComponentStory<typeof FlipOutX> = () => (
  <Wrapper>
    <FlipOutX duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </FlipOutX>
  </Wrapper>
)

export const OutX = Template.bind({})
