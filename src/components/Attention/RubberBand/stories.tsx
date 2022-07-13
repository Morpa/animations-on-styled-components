import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttentionRubberBand } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Attention/RubberBand',
  component: AttentionRubberBand,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof AttentionRubberBand>

const Template: ComponentStory<typeof AttentionRubberBand> = () => (
  <Wrapper>
    <AttentionRubberBand duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </AttentionRubberBand>
  </Wrapper>
)

export const RubberBand = Template.bind({})
