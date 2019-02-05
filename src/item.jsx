import styled, { css } from 'styled-components';
import { BASE_TRANSITION } from './container';

const withOpacityStyles = ({ order, itemsCount }) => {
  if (itemsCount === 1 || order === 1) {
    return css`
      opacity: 1;
    `;
  }

  return css`
    opacity: 0.5;
  `;
};

export default styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  transition: opacity ${BASE_TRANSITION};
  order: ${({ order }) => order};
  ${withOpacityStyles};
`;
