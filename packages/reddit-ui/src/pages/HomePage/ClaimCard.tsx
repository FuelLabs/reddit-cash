import React, { useState } from 'react';
import styled from 'styled-components';
import snoo from '../../../images/snoo.jpg';

const Card = styled.div`
  padding: 10px;
  margin: 10px;
  background: white;
  border-radius: 4px;
  border: solid 1px #eeeeee;
`;

const ClaimButton = styled.button`
  display: block;
  width: 100%;
  background: blue;
  color: white;
  font-weight: bold;
  height: 40px;
  border-radius: 20px;
  font-size: 16px;

  &:disabled {
    background: dark-blue;
  }
`;

const Snoo = styled.div`
  height: 250px;
  background-image: url('${snoo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Headline = styled.div`
  font-size: 24px;
`;

const Title = styled.div`
  font-weight: 500;
  color: #555555;
`;

const ClaimCard: React.FC<any> = ({ account, asset }) => {
  const [claiming, setClaiming] = useState(false);

  const claim = async () => {
    setClaiming(true);
    await asset.faucet(account);
    setClaiming(false);
  };

  return (
    <Card>
      <Title>Community Points</Title>
      <Headline>Get a piece of r/CryptoCurrency</Headline>
      <Snoo />
      <div>You're awesome! Claim 1000 Moons for contributing to r/CryptoCurrency</div>
      <ClaimButton disabled={claiming} onClick={claim}>Claim My Points</ClaimButton>
    </Card>
  )
}

export default ClaimCard;
