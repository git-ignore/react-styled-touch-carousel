# react-styled-touch-carousel

It is an often case that you need to display some items collection as a grid on large screens
and as a carousel on small screens. So you want to have mobile-first(only?)-designed carousel to achieve that.

**react-styled-touch-carousel** - is a dead simple module without redundant dependencies for that cases.
It is built with [styled-components](https://www.styled-components.com/) and using the _flexbox order_ css-property to control the position of the items. So there is no shuffling the DOM elements around by javascript.

## Usage

### install:

`yarn add react-styled-touch-carousel`

or

`npm i react-styled-touch-carousel --save`

### use:

```jsx
import Carousel from 'react-styled-touch-carousel';

<Carousel interval={5000} autoplay>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
```

## API

| Prop name   | Type         | Default | Description                                                                          |
| ----------- | ------------ | ------- | ------------------------------------------------------------------------------------ |
| autoplay    | bool, number | false   | Used to make carousel auto play for every given time interval.                       |
| dots        | bool         | true    | Show navigation dots                                                                 |
| Dot         | node         | --      | Customized nav dot which will get `isCurrent` as bool prop when its slide is visible |
| DotsWrapper | node         | --      | Customized dots wrapper                                                              |
| afterSlide  | func         | --      | Some callback that will be called with `direction` argument after sliding is ended   |
| beforeSlide | func         | --      | Some callback that will be called with `direction` argument before sliding           |

---

## Roadmap

- [x] autoplay

- [x] afterSlide and beforeSlide callbacks

- [ ] add arrows

...
