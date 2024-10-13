import { useRef, useState } from 'react';
import { ResolutionString } from '../../../../public/charting_library/charting_library';
import { useChartMarketAndResolution } from '../../../hooks/tradingView/useChartMarketAndResolution';
// import { useTradingViewTheme } from '../../../hooks/tradingView/useTradingViewTheme';
import { BaseTvChart } from './BaseTvChart';

export const TvChartLaunchable = ({ marketId }) => {
  const tvWidgetRef = useRef(null);
  const tvWidget = tvWidgetRef.current;
  const isWidgetReady = tvWidget?._ready;

  const savedResolution = {};

  useChartMarketAndResolution({
    currentMarketId: marketId,
    isViewingUnlaunchedMarket: true,
    tvWidget,
    isWidgetReady,
    savedResolution: savedResolution as ResolutionString,
  });

  // useTradingViewTheme({
  //   tvWidget,
  //   isWidgetReady,
  // });

  return <BaseTvChart />;
};
