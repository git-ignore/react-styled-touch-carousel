import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const Dot = styled.li`
  background: ${({ isCurrent }) => (isCurrent ? 'darkorange' : 'gainsboro')};
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 100%;
  display: inline-block;
  transition: background 0.2s ease;
  cursor: pointer;
`;

Dot.propTypes = {
  isCurrent: PropTypes.bool,
};

Dot.defaultProps = {
  isCurrent: false,
};
