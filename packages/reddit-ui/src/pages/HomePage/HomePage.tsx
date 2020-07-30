import React from 'react';
import { Link } from 'react-router-dom';
import { BurnerContext, withBurner, DataProviders } from '@burner-wallet/ui-core';
import styled from 'styled-components';

import Page from '../../components/Page';
import HistoryList from '../../components/HistoryList';
import BottomActions from './BottomActions';
import Post from './Post';
import ClaimCard from './ClaimCard';
import VaultButton from './VaultButton';
import PokemonBanner from './PokemonBanner';

import pricePump from '../../../images/price-pump.gif';
import vitalik from '../../../images/vitalik.jpg';
import bitconnect from '../../../images/bitconnect.jpg';

const PageContainer = styled(Page)`
  margin-bottom: 100px;
`;

const BottomActionsContainer = styled.div`
  position: fixed;
  bottom: 32px;
  left: 0;
  right: 0;
`;

const ViewAllButton = styled(Link)`
  background: #f2f2f2;
  border-radius: 30px;
  display: flex;
  align-items: center;
  color: #555;
  padding: 8px 12px;
  text-decoration: none;

  &:after {
    content: '\\203A';
    margin-left: 10px;
  }
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 4px;
`;

const SubHeading = styled.h2<{ line?: boolean }>`
  font-size: var(--l2-fs);
  line-height: var(--l2-lh);
  font-weight: var(--l2-weight);
  margin: 8px 0 4px;
  color: #222222;

  ${props => props.line && `border-bottom: solid 1px #f2f2f2;`}
`;

const { PluginElements, PluginButtons, AccountBalance } = DataProviders;

const HomePage: React.FC<BurnerContext> = ({ defaultAccount, actions, pluginData, t }) => {
  return (
    <PageContainer>
      <AccountBalance
        asset="moon"
        account={defaultAccount}
        render={(data: AccountBalanceData | null) => data && (data.balance === '0' ? (
          <ClaimCard account={defaultAccount} asset={data.asset} />
        ) : (
          <VaultButton asset={data.asset} balance={data.displayBalance} />
        )}
      />

      <PokemonBanner />

      <Post user="eth2moon" time="1h" img={pricePump} upvotes={50} address="0x">
        ETH price reaches $2,000!
      </Post>

      <Post user="eth2moon" time="1h" img={vitalik} upvotes={50} address="0x">
        Vitalik Buterin elected Prime Minister of Canada, promises to replace CAD with ETH
      </Post>

      <Post user="eth2moon" time="1d" img={bitconnect} upvotes={120} address="0x">
        BitConnect 2 launches
      </Post>
    </PageContainer>
  );
};

export default withBurner(HomePage);
