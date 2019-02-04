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

  get numItems() {
    return this.props.children.length || 1;
  }

  getOrder = itemIndex => {
    const { position } = this.state;
    const order = itemIndex - position;

    if (itemIndex - position < 0) {
      return this.numItems - Math.abs(order);
    }

    return order;
  };

  nextSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  };

  prevSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  };

  doSliding = (direction, position) => {
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
        }, 50)
    );
  };

  render() {
    const { children } = this.props;

    return (
      <Swipeable onSwipedLeft={this.nextSlide} onSwipedRight={this.prevSlide}>
        <Wrapper>
          <Container
            isSliding={this.state.isSliding}
            direction={this.state.direction}
          >
            {children.map((child, idx) => (
              <Item
                key={`styled-carousel-item--${idx}`}
                order={this.getOrder(idx)}
              >
                {child}
              </Item>
            ))}
          </Container>
          <button onClick={this.prevSlide}>back</button>
          <button onClick={this.nextSlide}>ne</button>
        </Wrapper>
      </Swipeable>
    );
  }
}

export default Carousel;
