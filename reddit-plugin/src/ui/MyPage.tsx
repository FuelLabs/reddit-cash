import React, { useState, useEffect } from 'react';
import { PluginPageContext } from '@burner-wallet/types';
import RedditPlugin from '../RedditPlugin';

const MyPage: React.FC<PluginPageContext<{}, RedditPlugin>> = ({ BurnerComponents, plugin, defaultAccount }) => {
  const [funnel, setFunnel] = useState<string | null>(null);

  useEffect(() => {
    plugin.getFunnelAddress(defaultAccount).then((_funnel: string) => setFunnel(_funnel));
  }, [defaultAccount]);

  const { Page, QRCode } = BurnerComponents;
  return (
    <Page title="Deposit">
      {funnel ? (
        <div>
          <QRCode value={funnel} />
          <div>{funnel}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Page>
  );
};

export default MyPage;
