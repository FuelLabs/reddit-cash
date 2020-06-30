import { BurnerPluginContext, Plugin, Actions } from '@burner-wallet/types';
import MyPage from './ui/MyPage';
import Settings from './ui/Settings';

interface PluginActionContext {
  actions: Actions;
}

let funnelAddressCache: { [address: string]: string } = {};

export default class RedditPlugin implements Plugin {
  private pluginContext?: BurnerPluginContext;

  initializePlugin(pluginContext: BurnerPluginContext) {
    this.pluginContext = pluginContext;

    pluginContext.addPage('/deposit', MyPage);
    pluginContext.addButton('apps', 'Deposit', '/deposit', {
      description: 'Deposit your tokens from Reddit',
    });
    pluginContext.addElement('advanced', Settings);
  }

  async getFunnelAddress(address: string) {
    if (!funnelAddressCache[address]) {
      const response = await fetch(`https://reddit-relay.burnerfactory.com/funnel/${address}`);
      const { funnel } = await response.json();
      funnelAddressCache[address] = funnel;
    }

    return funnelAddressCache[address];
  }

  async returnFunds(recipient: string) {
    const response = await fetch('https://release.fuel.sh', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipient })
    });
    return response.json();
  }
}
