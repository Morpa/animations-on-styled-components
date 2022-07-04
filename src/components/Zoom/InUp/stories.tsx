import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ZoomInUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Zoom/InUp',
  component: ZoomInUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof ZoomInUp>

const Template: ComponentStory<typeof ZoomInUp> = () => (
  <Wrapper>
    <ZoomInUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </ZoomInUp>
  </Wrapper>
)

export const InUp = Template.bind({})
