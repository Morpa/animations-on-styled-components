# styled-components-animations

A simple port of animate css for styled-components

Based on the work of (https://github.com/dielduarte/animate-css-styled-components/)

Base on lib [animate-css-styled-components
](https://github.com/dielduarte/animate-css-styled-components/)

----------

## Instalation

```
 npm i styled-components-animations
 or
 yarn add styled-components-animations
```

## How to use

import animate-css-styled-components module calling global animations

```jsx
import { Wobble, FadeIn, FadeOut } from 'styled-components-animations';
```

Now, this animation is a component and you can encompassing the desired content within the component.

Example:

```jsx
  <Wobble duration="0.8s" delay="1s">
    <Card>
      card content...
    </Card>
  </Wobble>
```

## API

 - duration
	 - prop for represent animation-duration
	 - default `1s`
 - delay
	 - prop for represent animation-delay
	 - default `0s`
 - timingFunction
	 - prop for represent  animation-timing-function
	 - default `ease`
 - iterationCount
	 - prop for represent animation-iteration-count
	 - default `1`
 - direction
	 - prop for represent animation-direction
	 - default `normal`
 - fillMode
	 - prop for represent animation-fill-mode
	 - default `both`
 - playState
	 - prop for represent animation-play-state
	 - default `running`
 - display
	 - prop for represent display css property
	 - default `block`
