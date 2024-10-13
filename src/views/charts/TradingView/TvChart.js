import { useEffect, useRef, useState } from 'react';
import { DEFAULT_MARKETID } from '../../../constants/markets';
import { useChartMarketAndResolution } from '../../../hooks/tradingView/useChartMarketAndResolution';
import { useOrderbookCandles } from '../../../hooks/tradingView/useOrderbookCandles';
import { useTradingView } from '../../../hooks/tradingView/useTradingView';
import { useTradingViewToggles } from '../../../hooks/tradingView/useTradingViewToggles';
import { BaseTvChart } from './BaseTvChart';

export const TvChart = () => {
  const [isChartReady, setIsChartReady] = useState(false);
  const currentMarketId = DEFAULT_MARKETID;

  const tvWidgetRef = useRef(null);
  const tvWidget = tvWidgetRef.current;
  const isWidgetReady = tvWidget?._ready;

  const {
    orderLinesToggleOn,
    setOrderLinesToggleOn,
    orderbookCandlesToggleOn,
    setOrderbookCandlesToggleOn,
    buySellMarksToggleOn,
    setBuySellMarksToggleOn,
  } = useTradingViewToggles();

  const { savedResolution } = useTradingView({
    tvWidgetRef,
    orderLinesToggleOn,
    setOrderLinesToggleOn,
    orderbookCandlesToggleOn,
    setOrderbookCandlesToggleOn,
    buySellMarksToggleOn,
    setBuySellMarksToggleOn,
    setIsChartReady,
  });

  useChartMarketAndResolution({
    currentMarketId,
    tvWidget,
    isWidgetReady,
    savedResolution: savedResolution,
  });

  useOrderbookCandles({
    isChartReady,
    orderbookCandlesToggleOn,
    tvWidget,
  });

  const displayUnit = "USD";

  useEffect(() => {
    if (!isChartReady || !tvWidget) return;

    const chart = tvWidget.activeChart?.();
    chart?.resetData();
  }, [displayUnit, tvWidget, isChartReady]);

  if (!isChartReady) {
    return <div>Loading chart...</div>;
  }

  return <BaseTvChart isChartReady={isChartReady} />;
};
