import styled, { css } from 'styled-components';

// TODO: move to separate styles constants or helpers file
export const BASE_TRANSITION = '1s ease';

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

export default styled.div`
  display: flex;
  margin: 0 0 20px 20px;
  transition: ${({ isSliding }) =>
    isSliding ? 'none' : `transform ${BASE_TRANSITION}`};
  transform: ${withTransformStyles};
`;
