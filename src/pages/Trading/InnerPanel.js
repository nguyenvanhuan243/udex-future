import { Tabs } from '../../components/Tabs';
import { STRING_KEYS } from '../../constants/localization';
import { useStringGetter } from '../../hooks/useStringGetter';
// import { testFlags } from '../../lib/testFlags';
import { useAppSelector } from '../../state/appTypes';
import { getSelectedLocale } from '../../state/localizationSelectors';
import { TvChart } from '../../views/charts/TradingView/TvChart';
import { MarketLinks } from '../../views/MarketLinks';
import { useMemo } from 'react';

export const InnerPanel = ({ }) => {
  const stringGetter = useStringGetter();
  const selectedLocale = useAppSelector(getSelectedLocale);
  // const { uiRefresh } = testFlags;
  const uiRefresh = null

  const innerPanelItems = useMemo(() => {
    return [
      {
        content: <TvChart />,
        forceMount: true,
        label: stringGetter({ key: STRING_KEYS.PRICE_CHART_SHORT }),
        value: "Price"
      },
    ];
  }, [launchableMarketId, selectedLocale, stringGetter]);

  return (
    <Tabs
      value={"Price"}
      dividerStyle={uiRefresh ? 'underline' : 'border'}
      items={innerPanelItems}
      slotToolbar={<MarketLinks launchableMarketId={launchableMarketId} />}
      withTransitions={false}
    />
  );
};
