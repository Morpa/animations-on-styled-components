import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BounceInUp } from '.'
import { Wrapper, Component } from 'components/Exemple'

export default {
  title: 'Bounce/InUp',
  component: BounceInUp,
  argTypes: {
    tooltip: {
      control: false
    }
  }
} as ComponentMeta<typeof BounceInUp>

const Template: ComponentStory<typeof BounceInUp> = () => (
  <Wrapper>
    <BounceInUp duration="0.8s" delay="0.2s">
      <Component>Hello World!</Component>
    </BounceInUp>
  </Wrapper>
)

export const InUp = Template.bind({})
