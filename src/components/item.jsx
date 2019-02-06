import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { BASE_TRANSITION } from '../helpers';

const withOpacityStyles = ({ order, itemsCount }) => css`
  opacity: ${itemsCount === 1 || order === 1 ? 1 : 0.5};
`;

const Item = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  transition: opacity ${BASE_TRANSITION};
  order: ${({ order }) => order};
  ${withOpacityStyles};
`;

Item.propTypes = {
  order: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
};

export default Item;
