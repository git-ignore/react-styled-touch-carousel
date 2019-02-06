import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Dot } from './defaults';

const Dots = ({ DotNode, WrapperNode, itemsCount, position }) => (
  <WrapperNode>
    {Array.from({ length: itemsCount }, (dot, i) => (
      <DotNode key={`slider-dot-${i}`} isCurrent={i === position} />
    ))}
  </WrapperNode>
);

Dots.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  DotNode: PropTypes.any,
  WrapperNode: PropTypes.any,
};

Dots.defaultProps = {
  DotNode: Dot,
  WrapperNode: Wrapper,
};

export default Dots;
