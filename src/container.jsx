import styled, { css } from 'styled-components';

const baseTranslation = '-80% - 20px';

const withTransformStyles = ({ isSliding, direction }) => {
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
  transition: ${({ isSliding }) => (isSliding ? 'none' : 'transform 1s ease')};
  transform: ${withTransformStyles};
`;
