import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomInRight } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/InRight',
  component: ZoomInRight,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomInRight>

const Template: ComponentStory<typeof ZoomInRight> = () => (
  <Wrapper>
    <ZoomInRight duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomInRight>
  </Wrapper>
)

export const InRight = Template.bind({})
