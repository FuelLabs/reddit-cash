import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useBurner, DataProviders } from '@burner-wallet/ui-core';
import { Asset, AccountBalanceData, PluginElementContext } from '@burner-wallet/types';
import styled from 'styled-components';

import HistoryList from '../../components/HistoryList';
import send from '../../../images/send.svg';


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

const Header = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 4px 12px;
`;
const Close = styled(Link)`
  background: white;
  font-size: 36px;
  color: black;
  text-decoration: none;
  align-self: flex-start;
`;
const HeaderBar = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 24px;
  margin: 10px 0 4px;
`;

const ProfPic = styled.div`
  border-radius: 20px;
  height: 24px;
  width: 24px;
  background: blue;
  margin-right: 4px;
`;
const Spacer = styled.div`
  flex: 1;
`;
const SendBTN = styled(Link)`
  border-radius: 20px;
  height: 36px;
  width: 36px;
  background: #eeeeee;
  background-image: url('${send}');
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
`;


const Content = styled.div`
  overflow: auto;
  flex: 1;
  padding: 20px 12px;
`;

const Card = styled.div`
  background: white;
  padding: 24px 12px;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #868686;
  margin: 12px 0;
`;

const Heading = styled.h2`
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Page = styled.div`
  background: #f5f5f5;
  flex: 1;
  margin-top: -32px;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ededed;
  z-index: 1;

  @media (min-width: 600px) {
    margin-left: 200px;
  }
`;

const Icon = styled.div<any>`
  height: 24px;
  width: 24px;
  background-image: url('${props => props.icon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const { PluginElements, PluginButtons, AccountBalance } = DataProviders;

const VaultPage: React.FC = () => {
  const { assets, defaultAccount, actions, pluginData, t } = useBurner();
  return (
    <Fragment>
      <Background />

      <Page>

        <Header>
          <Close to="/">×</Close>
          <HeaderBar>
            Vault
            <Spacer />
            <SendBTN to="/send" />
          </HeaderBar>
        </Header>

        <Content>
          <PluginElements position='home-top' />

          <Heading>Your Points</Heading>

          {assets.map((asset: Asset) => (
            <AccountBalance
              key={asset.id}
              asset={asset.id}
              account={defaultAccount}
              render={(data: AccountBalanceData | null) => (
                <Card>
                  <Balance>
                    <div>{asset.name}</div>
                    <div style={{ flex: '1' }} />
                    <Icon icon={asset.icon} />
                    <div>{data && data.displayBalance}</div>
                  </Balance>
                </Card>
              )}
            />
          ))}

          <Heading>Latest Transactions</Heading>

          <Card>
            <HistoryList account={defaultAccount} limit={3} navigateTo={actions.navigateTo} />
          </Card>
        </Content>
      </Page>
    </Fragment>
  );
};

export default VaultPage;
