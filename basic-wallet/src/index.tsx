import React from 'react';
import ReactDOM from 'react-dom';
import BurnerCore from '@burner-wallet/core';
import { /*InjectedSigner,*/ LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway/*, XDaiGateway*/ } from '@burner-wallet/core/gateways';
import Exchange from '@burner-wallet/exchange';
import RedditUI from 'reddit-ui';
// import { ERC20Asset } from '@burner-wallet/assets';
import { FuelGateway, FuelAsset, FuelPair } from 'fuel-burner-plugin';
import RedditPlugin from 'reddit-plugin';
import WalletConnectPlugin from '@burner-wallet/wallet-connect-plugin';
// import redditLogo from './reddit-alien.svg';
// import brickIcon from './brick-fuel-trans.png';
import moonIcon from './moon-fuel-trans.png';

const moon = new FuelAsset({
  id: 'moon', 
  name: 'Moons', 
  network: '5', 
  address: '0xfed4976b61517a687d866ef4357a67bb89474002', 
  icon: moonIcon, 
});

// const xmoon = new ERC20Asset({
//   id: 'xmoon',
//   name: 'xMoon',
//   address: '0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A',
//   network: '100',
// });

// const brick = new FuelAsset({
//   id: 'brick', 
//   name: 'Bricks', 
//   network: '4', 
//   address: '0xa12106d1feb066fc43c84abe4866e053fc876c74', 
//   icon: brickIcon, 
// });

const core = new BurnerCore({
  signers: [new LocalSigner()],
  gateways: [
    new FuelGateway({ forceFuelNetwork: 'unspecified' }),
    new InfuraGateway(process.env.REACT_APP_INFURA_KEY),
    // new XDaiGateway(),
  ],
  assets: [moon, /*brick, xmoon*/],
});

const BurnerWallet = () =>
  <RedditUI
    title="Reddit Cash"
    core={core}
    plugins={[
      new RedditPlugin(),
      new Exchange([new FuelPair('moon', 'brick')]),
      new WalletConnectPlugin({ defaultChainId: '5' }),
    ]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
