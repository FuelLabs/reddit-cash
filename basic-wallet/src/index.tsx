import React from 'react';
import ReactDOM from 'react-dom';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway } from '@burner-wallet/core/gateways';
import Exchange from '@burner-wallet/exchange';
import ModernUI from '@burner-wallet/modern-ui';
import { FuelGateway, FuelAsset, FuelPair } from 'fuel-burner-plugin';
import RedditPlugin from 'reddit-plugin';
import redditLogo from './reddit-alien.svg';
import brickIcon from './brick-fuel-trans.png';
import moonIcon from './moon-fuel-trans.png';

const moon = new FuelAsset({
  id: 'moon', 
  name: 'Moons', 
  network: '4', 
  address: '0xf4130d9b5a3b9cf81ab1e4f4bbd9a6ca6c28de17', 
  icon: moonIcon, 
});

const brick = new FuelAsset({
  id: 'brick', 
  name: 'Bricks', 
  network: '4', 
  address: '0x6292f268e6d2e9952d759e6fd7571024bb04da3f', 
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

const BurnerWallet = () =>
  <ModernUI
    title="Reddit Cash"
    core={core}
    plugins={[
      new RedditPlugin(),
      new Exchange([new FuelPair('moon', 'brick')]),
    ]}
    theme={{
      background: '#cee3f8',
      accentColor: '#369',
      paperBackground: '#EFF7FF',
      logo: redditLogo,
      balanceStyle: 'stack',
    }}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
