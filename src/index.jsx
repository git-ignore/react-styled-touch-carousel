import React, { PureComponent } from 'react';
import Swipeable from 'react-swipeable';
import PropTypes from 'prop-types';
import Container from './container';
import Wrapper from './wrapper';
import Item from './item';
import Dots from './dots';

class Carousel extends PureComponent {
  static propTypes = {
    autoplay: PropTypes.bool,
    children: PropTypes.node.isRequired,
    dots: PropTypes.bool,
    interval: PropTypes.number,
    Dot: PropTypes.any, // https://github.com/facebook/prop-types/issues/200
    DotsWrapper: PropTypes.any, // https://github.com/facebook/prop-types/issues/200
  };

  static defaultProps = {
    autoplay: false,
    dots: true,
    interval: 3000,
  };

  state = {
    position: 0,
    isSliding: false,
    direction: 'next',
  };

  get itemsCount() {
    return this.props.children.length || 1;
  }

  get childrenWithInjectedProps() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        itemsCount: this.itemsCount,
      })
    );
  }

  get swipeableProps() {
    return this.itemsCount > 1
      ? { onSwipedLeft: this.nextSlide, onSwipedRight: this.prevSlide }
      : void 0;
  }

  get showDots() {
    return this.itemsCount > 1 && this.props.dots;
  }

  componentDidMount = () => this.props.autoplay && this.initAutoPlay();

  componentWillUnmount = () => this.interval && clearInterval(this.interval);

  initAutoPlay = () => {
    this.interval = setInterval(this.nextSlide, this.props.interval);
  };

  getOrder = itemIndex =>
    (this.itemsCount + 1 - this.state.position + itemIndex) % this.itemsCount;

  nextSlide = () =>
    this.doSliding(
      'next',
      this.state.position === this.itemsCount - 1 ? 0 : this.state.position + 1
    );

  prevSlide = () => {
    const itemsCount = this.props.children.length;

    this.doSliding(
      'prev',
      this.state.position === 0 ? itemsCount - 1 : thist.state.position - 1
    );
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

  render() {
    const { Dot, DotsWrapper } = this.props;
    return (
      <Swipeable {...this.swipeableProps}>
        <Wrapper>
          <Container
            isSliding={this.state.isSliding}
            direction={this.state.direction}
            itemsCount={this.itemsCount}
          >
            {this.childrenWithInjectedProps.map((child, idx) => (
              <Item
                key={`styled-carousel-item--${idx}`}
                order={this.getOrder(idx)}
                itemsCount={this.itemsCount}
              >
                {child}
              </Item>
            ))}
          </Container>
          {this.showDots && (
            <Dots
              DotNode={Dot}
              WrapperNode={DotsWrapper}
              itemsCount={this.itemsCount}
              position={this.state.position}
            />
          )}
        </Wrapper>
      </Swipeable>
    );
  }
}

export default Carousel;
