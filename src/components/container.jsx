import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { BASE_TRANSITION } from '../helpers';

const baseTranslation = '-80% - 20px';

const withTransformStyles = ({ isSliding, direction, itemsCount }) => {
  if (itemsCount === 1) {
    return css`translateX(0%)`;
  }

  if (!isSliding) {
    return css`translateX(calc(${baseTranslation}))`;
  }

  if (direction === 'prev') {
    return css`translateX(calc(2 * (${baseTranslation})))`;
  }

  return css`translateX(0)`;
};

const Container = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
  transition: ${({ isSliding }) =>
    isSliding ? 'none' : `transform ${BASE_TRANSITION}`};
  transform: ${withTransformStyles};
`;

Container.propTypes = {
  isSliding: PropTypes.bool,
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  itemsCount: PropTypes.number.isRequired,
};

Container.defaultProps = {
  isSliding: false,
};

export default Container;
