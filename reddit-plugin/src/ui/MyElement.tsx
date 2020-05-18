import React, { useEffect, useState } from 'react';
import { PluginElementContext } from '@burner-wallet/types';
import RedditPlugin from '../RedditPlugin';

const MyElement: React.FC<PluginElementContext> = ({ plugin }) => {
  const [block, setBlock] = useState<string | null>(null);
  const _plugin = plugin as RedditPlugin;

  useEffect(() => {
    // _plugin.getBlockNum().then((num: string) => setBlock(num))
  }, []);

  return (
    <div>
      <div>Injected plugin element</div>
      {block && (
        <div>Current block number: {block}</div>
      )}
    </div>
  );
};

export default MyElement;
