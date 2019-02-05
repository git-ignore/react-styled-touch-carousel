import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: write semantic html (ul, li)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
const Dot = styled.span`
  background: ${({ isCurrent }) => (isCurrent ? 'darkorange' : 'gainsboro')};
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 100%;
  display: inline-block;
  transition: background 0.2s ease;
  cursor: pointer;
`;

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
