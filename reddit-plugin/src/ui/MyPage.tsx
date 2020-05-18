import React, { useState, useEffect, Fragment } from 'react';
import { PluginPageContext } from '@burner-wallet/types';
import styled from 'styled-components';
import RedditPlugin from '../RedditPlugin';
import Clipboard from './Clipboard';

const Instructions = styled.div``;

const QRContainer = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;

  & svg {
    height: 50%;
    width: 50%;
  }
`;

const CopyContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 4px;
  border: solid 1px #cccccc;
  border-radius: 8px;
`;

const AddressBar = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MyPage: React.FC<PluginPageContext<{}, RedditPlugin>> = ({ BurnerComponents, plugin, defaultAccount }) => {
  const [funnel, setFunnel] = useState<string | null>(null);

  useEffect(() => {
    plugin.getFunnelAddress(defaultAccount).then((_funnel: string) => setFunnel(_funnel));
  }, [defaultAccount]);

  const { Page, QRCode, Button } = BurnerComponents;
  return (
    <Page title="Deposit">
      {funnel ? (
        <Fragment>
          <Instructions>
            Deposit your MOON & BRICK tokens from the Reddit app or any other wallet!
          </Instructions>
          <Instructions>
            Send your tokens to the following address to deposit tokens into the Burner Wallet.
          </Instructions>

          <QRContainer>
            <QRCode value={funnel} renderAs="svg" />
          </QRContainer>

          <CopyContainer>
            <AddressBar>{funnel}</AddressBar>
            <Clipboard text={funnel}>
              {isCopied => (
                <Button disabled={isCopied}>Copy</Button>
              )}
            </Clipboard>
          </CopyContainer>
        </Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </Page>
  );
};

export default MyPage;
