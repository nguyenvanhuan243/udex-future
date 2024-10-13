import React from 'react';
import styled, { css } from 'styled-components';
import { layoutMixins } from '../../../styles/layoutMixins';

export default BaseTvChart = ({ isChartReady }) => {
  return (
    <$PriceChart isChartReady={isChartReady}>
      <div id="tv-price-chart" />
    </$PriceChart>
  );
};

const $PriceChart = styled.div`
  ${layoutMixins.stack}
  user-select: none;
  pointer-events: initial; // allow pointer events when dialog overlay is visible
  height: 100%;

  #tv-price-chart {
    ${({ isChartReady }) =>
      !isChartReady &&
      css`
        filter: blur(3px);
        translate: 0 0 1rem;
        opacity: 0;
      `};

    @media (prefers-reduced-motion: no-preference) {
      transition: 0.2s var(--ease-out-expo);
    }
  }
`;
