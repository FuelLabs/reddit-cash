import { BurnerPluginContext, Plugin, Actions } from '@burner-wallet/types';
import MyPage from './ui/MyPage';
import MyElement from './ui/MyElement';

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
    // pluginContext.addElement('home-middle', MyElement);
  }

  async getFunnelAddress(address: string) {
    if (!funnelAddressCache[address]) {
      const response = await fetch(`https://reddit-relay.burnerfactory.com/funnel/${address}`);
      const { funnel } = await response.json();
      funnelAddressCache[address] = funnel;
    }

    return funnelAddressCache[address];
  }
}
