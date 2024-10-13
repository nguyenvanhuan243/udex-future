import { useRef } from 'react';
import styled, { css } from 'styled-components';

import { TradeLayouts } from '../../constants/layout';
// import { useBreakpoints } from '@/hooks/useBreakpoints';
// import { useCurrentMarketId } from '@/hooks/useCurrentMarketId';
// import { usePageTitlePriceUpdates } from '@/hooks/usePageTitlePriceUpdates';
// import { useTradeFormInputs } from '@/hooks/useTradeFormInputs';
// import breakpoints from '@/styles/breakpoints';
// import { layoutMixins } from '@/styles/layoutMixins';
// import { AccountInfo } from '@/views/AccountInfo';
// import { TradeBox } from '@/views/TradeBox';
// import { calculateCanAccountTrade } from '@/state/accountCalculators';
// import { useAppSelector } from '@/state/appTypes';
// import { getSelectedTradeLayout } from '@/state/layoutSelectors';
// import { testFlags } from '@/lib/testFlags';
// import { HorizontalPanel } from './HorizontalPanel';
import { InnerPanel } from './InnerPanel';
// import LaunchableMarket from './LaunchableMarket';
// import { MarketSelectorAndStats } from './MarketSelectorAndStats';
// import { VerticalPanel } from './VerticalPanel';

const Trading = () => {
  // const tradePageRef = useRef(null);
  // const { isViewingUnlaunchedMarket } = useCurrentMarketId();
  // const { isTablet } = useBreakpoints();
  // const tradeLayout = useAppSelector(getSelectedTradeLayout);
  // const canAccountTrade = useAppSelector(calculateCanAccountTrade);
  // const [isHorizontalPanelOpen, setIsHorizontalPanelOpen] = useState(true);

  usePageTitlePriceUpdates();
  useTradeFormInputs();

  // if (isViewingUnlaunchedMarket && testFlags.pml) {
  //   return <LaunchableMarket />;
  // }

  return (
    <$TradeLayout
      // ref={tradePageRef}
      // tradeLayout={tradeLayout}
      // isHorizontalPanelOpen={isHorizontalPanelOpen}
    >
      {/* <header tw="[grid-area:Top]">
        <MarketSelectorAndStats />
      </header> */}

      {/* <$GridSection gridArea="Side" tw="grid-rows-[auto_minmax(0,1fr)]">
        <AccountInfo />
        <TradeBox />
      </$GridSection> */}

      {/* <$GridSection gridArea="Vertical">
        <VerticalPanel tradeLayout={tradeLayout} />
      </$GridSection> */}

      <$GridSection gridArea="Inner">
        <InnerPanel />
      </$GridSection>
{/* 
      <$GridSection gridArea="Horizontal">
        <HorizontalPanel isOpen={isHorizontalPanelOpen} setIsOpen={setIsHorizontalPanelOpen} />
      </$GridSection> */}
    </$TradeLayout>
  );
};

export default Trading;

const $TradeLayout = styled.article`
  --horizontalPanel-height: 18rem;

  /* Layout Definitions */
  /* Your layout definitions here... */

  ${({ tradeLayout }) =>
    ({
      [TradeLayouts.Default]: null,
      [TradeLayouts.Reverse]: css`
        direction: rtl;
        > * {
          direction: initial;
        }
      `,
    })[tradeLayout]}

  ${({ isHorizontalPanelOpen }) =>
    !isHorizontalPanelOpen &&
    css`
      --horizontalPanel-height: auto !important;
    `}

  /* Additional CSS rules... */
`;

const $GridSection = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
`;
