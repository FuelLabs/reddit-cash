import React, { useState, useEffect, Fragment } from 'react';
import { PluginPageContext } from '@burner-wallet/types';
import styled from 'styled-components';
import RedditPlugin from '../RedditPlugin';
import Clipboard from './Clipboard';
import screen1 from '../../img/screen1.png';
import screen2 from '../../img/screen2.png';

const Instructions = styled.p`
  margin: 12px 0;
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

const Img1 = styled.img`
  width: 100%;
  margin: 12px 0;
`;
const Img2 = styled.img`
  width: 100%;
  margin: 12px 0;
`;

const MyPage: React.FC<PluginPageContext<{}, RedditPlugin>> = ({ BurnerComponents, plugin, defaultAccount }) => {
  const [funnel, setFunnel] = useState<string | null>(null);

  useEffect(() => {
    plugin.getFunnelAddress(defaultAccount).then((_funnel: string) => setFunnel(_funnel));
  }, [defaultAccount]);

  const { Page, Button } = BurnerComponents;
  return (
    <Page title="Deposit">
      {funnel ? (
        <Fragment>
          <Instructions>
            Deposit your MOON & BRICK tokens from the Reddit app or any other wallet!
          </Instructions>

          <Instructions>
            Copy the following deposit address:
          </Instructions>

          <CopyContainer>
            <AddressBar>{funnel}</AddressBar>
            <Clipboard text={funnel}>
              {isCopied => (
                <Button disabled={isCopied}>Copy</Button>
              )}
            </Clipboard>
          </CopyContainer>

          <Instructions>
            Open the Reddit app. Navigate to the Vault and press the Send button.
          </Instructions>

          <Img1 src={screen1} />

          <Instructions>
            Paste the deposit address and send tokens to deposit into Reddit Cash.
          </Instructions>

          <Img2 src={screen2} />

          <Instructions>
            Token deposits can take up to 2 minutes.
          </Instructions>
          <Instructions>
            Warning: this is a prototype! Withdrawing tokens back to the main chain is not yet available.
          </Instructions>
        </Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </Page>
  );
};

export default MyPage;
