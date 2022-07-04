import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomOutUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/OutUp',
  component: ZoomOutUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomOutUp>

const Template: ComponentStory<typeof ZoomOutUp> = () => (
  <Wrapper>
    <ZoomOutUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomOutUp>
  </Wrapper>
)

export const OutUp = Template.bind({})
