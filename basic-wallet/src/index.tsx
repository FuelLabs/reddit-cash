import React from 'react';
import ReactDOM from 'react-dom';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway } from '@burner-wallet/core/gateways';
import Exchange, { Uniswap, XDaiBridge } from '@burner-wallet/exchange';
import ModernUI from '@burner-wallet/modern-ui';
import { FuelGateway, FuelAsset } from 'fuel-burner-plugin';
import RedditPlugin from 'reddit-plugin';
import brickIcon from './brick.png';
import moonIcon from './moon.png';

const moon = new FuelAsset({
  id: 'moon', 
  name: 'Moons', 
  network: '4', 
  address: '0xdf82c9014f127243ce1305dfe54151647d74b27a', 
  icon: moonIcon, 
});

const brick = new FuelAsset({
  id: 'brick', 
  name: 'Bricks', 
  network: '4', 
  address: '0xe0d8d7b8273de14e628d2f2a4a10f719f898450a', 
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
    }}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
