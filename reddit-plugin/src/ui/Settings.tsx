import React, { useEffect, useState } from 'react';
import { PluginElementContext } from '@burner-wallet/types';
import RedditPlugin from '../RedditPlugin';

const MyElement: React.FC<PluginElementContext<RedditPlugin>> = ({ plugin, BurnerComponents, defaultAccount }) => {
  const [isReturning, setIsReturning] = useState(false);

  const returnTokens = async () => {
    setIsReturning(true);
    await plugin.returnFunds(defaultAccount);
    setIsReturning(false);
  }

  const { Button } = BurnerComponents;
  return (
    <div>
      <Button onClick={returnTokens} disabled={isReturning}>
        Return tokens (24 hrs after deposit)
      </Button>
    </div>
  );
};

export default MyElement;
