/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarStatus = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${props => props.value || 100}%;
  background: ${COLORS.primary};
`;

const ProgressBarWrapper = styled.div`
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  position: relative;
  height: 12px;
  width: 370px;
  overflow: hidden;
`;

const SmallProgressBarWrapper = styled(ProgressBarWrapper)`
  height: 8px;
`;

const BigProgressBarWrapper = styled(ProgressBarWrapper)`
  height: 24px;

  ${ProgressBarStatus} {
    height: 16px;
    top: 4px;
    left: 4px;
    width: calc(${props => props.value || 100}% - 8px);
  }
`;

const ProgressBar = ({ value, size }) => {
  let ProgressBarToRender = ProgressBarWrapper;

  switch (size) {
    case 'small':
      ProgressBarToRender = SmallProgressBarWrapper;
      break;
    case 'large':
      ProgressBarToRender = BigProgressBarWrapper;
      break;
    default:
      ProgressBarToRender = ProgressBarWrapper;
  }

  return (
    <ProgressBarToRender
      value={value}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <ProgressBarStatus value={value} />
      <VisuallyHidden>
        Progression: ${value}%;
      </VisuallyHidden>
    </ProgressBarToRender>
  );
};

export default ProgressBar;
