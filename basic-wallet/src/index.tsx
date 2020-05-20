import React from 'react';
import ReactDOM from 'react-dom';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway } from '@burner-wallet/core/gateways';
import Exchange, { Uniswap, XDaiBridge } from '@burner-wallet/exchange';
import ModernUI from '@burner-wallet/modern-ui';
import { FuelGateway, FuelAsset } from 'fuel-burner-plugin';
import RedditPlugin from 'reddit-plugin';
import redditLogo from './reddit-alien.svg';
import brickIcon from './brick-fuel.png';
import moonIcon from './moon-fuel.png';

const moon = new FuelAsset({
  id: 'moon', 
  name: 'Moons', 
  network: '4', 
  address: '0x357010f7ea7ae2e4b39f40724668a63485197391', 
  icon: moonIcon, 
});

const brick = new FuelAsset({
  id: 'brick', 
  name: 'Bricks', 
  network: '4', 
  address: '0x9824c7a9155e1cbff0a25741341b6f0888a4a391', 
  icon: brickIcon, 
});

const core = new BurnerCore({
  signers: [new LocalSigner()],
  gateways: [
    new FuelGateway(),
    new InfuraGateway(process.env.REACT_APP_INFURA_KEY),
  ],
  assets: [moon, brick],
});

// const exchange = new Exchange({
//   pairs: [new XDaiBridge(), new Uniswap('dai')],
// });

const BurnerWallet = () =>
  <ModernUI
    title="Reddit Wallet"
    core={core}
    plugins={[
      // exchange,
      new RedditPlugin(),
    ]}
    theme={{
      background: '#cee3f8',
      accentColor: '#369',
      paperBackground: '#EFF7FF',
      logo: redditLogo,
    }}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
