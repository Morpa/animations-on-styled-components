import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomOutRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/OutRight',
  component: ZoomOutRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomOutRight>

const Template: ComponentStory<typeof ZoomOutRight> = () => (
  <Wrapper>
    <ZoomOutRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomOutRight>
  </Wrapper>
)

export const OutRight = Template.bind({})
