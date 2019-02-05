import React, { PureComponent } from 'react';
import Swipeable from 'react-swipeable';
import PropTypes from 'prop-types';
import Container from './container';
import Wrapper from './wrapper';
import Item from './item';

class Carousel extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    position: 0,
    isSliding: false,
    direction: 'next',
  };

  get itemsCount() {
    return this.props.children.length || 1;
  }

  getOrder = itemIndex =>
    (this.itemsCount + 1 - this.state.position + itemIndex) % this.itemsCount;

  nextSlide = () => {
    const { position } = this.state;

    this.doSliding('next', position === this.itemsCount - 1 ? 0 : position + 1);
  };

  prevSlide = () => {
    const { position } = this.state;
    const itemsCount = this.props.children.length;

    this.doSliding('prev', position === 0 ? itemsCount - 1 : position - 1);
  };

  doSliding = (direction, position) =>
    this.setState(
      {
        isSliding: true,
        position,
        direction,
      },
      () =>
        setTimeout(() => {
          this.setState({
            isSliding: false,
          });
        }, 20)
    );

  render = () => (
    <Swipeable onSwipedLeft={this.nextSlide} onSwipedRight={this.prevSlide}>
      <Wrapper>
        <Container
          isSliding={this.state.isSliding}
          direction={this.state.direction}
        >
          {this.props.children.map((child, idx) => (
            <Item
              key={`styled-carousel-item--${idx}`}
              order={this.getOrder(idx)}
            >
              {child}
            </Item>
          ))}
        </Container>
      </Wrapper>
    </Swipeable>
  );
}

export default Carousel;
