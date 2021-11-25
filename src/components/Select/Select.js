import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const StyledSelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  .svg-icon-wrapper {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  border: 0;
  color: inherit;
  font-weight: 400;
  font-size: 1rem;
  height: 43px;
  background: rgba(128, 128, 128, 0.15);
  border-radius: 8px;
  padding: 12px 52px 12px 16px;

  &:hover {
    color: #000;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelectWrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Icon id="chevron-down" size={20} />
    </StyledSelectWrapper>
  );
};

export default Select;
