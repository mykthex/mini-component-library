import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const StyledInputWrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  .svg-icon-wrapper {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  appearance: none;
  border: 0;
  color: inherit;
  font-weight: 700;
  font-size: 0.875rem;
  background: transparent;
  border-bottom: 1px solid ${COLORS.black};
  padding: 5px 5px 5px 21px;
  width: var(--inputwidth);

  &:focus {
    outline-offset: 4px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

const StyledBigInput = styled(StyledInput)`
  font-size: 1.125rem;
  padding-left: 25px;

  &::placeholder {
    font-size: 1.125rem;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let InputToRender = StyledInput;
  let iconSize = 16;

  switch (size) {
    case 'large':
      InputToRender = StyledBigInput;
      iconSize = 20;
      break;
    default:
      InputToRender = StyledInput;
  }

  return (
    <StyledInputWrapper>
      <VisuallyHidden as="label">
        {label}
      </VisuallyHidden>
      <InputToRender
        placeholder={placeholder}
        style={{
          '--inputwidth': `${width}px`,
        }}
      />
      <Icon id={icon} size={iconSize} />
    </StyledInputWrapper>
  );
};

export default IconInput;
