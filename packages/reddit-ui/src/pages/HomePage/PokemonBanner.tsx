import React from 'react';
import styled from 'styled-components';
import pika from '../../../images/pika.png';

const Banner = styled.div`
  background-color: #d19494;
  background-image: url('${pika}');
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
  padding: 8px 12px;
  padding-right: 55px;
  margin: 4px -16px 20px;
`;

const Header = styled.div`
  font-size: 18px;
  margin-bottom: 4px;
`;
const Small = styled.div`
  font-size: 12px;
`;

const PokemonBanner = () => {
  return (
    <Banner>
      <Header>Play Pokemon with your Moon!</Header>
      <Small>To play, visit FuelPlaysPokemon.com on your computer & connect with WalletConnect</Small>
    </Banner>
  )
}

export default PokemonBanner;
