import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 
    inset 0 2px 3px rgba(255,255,255,0.3),
    inset 0 -2px 3px rgba(0,0,0,0.3),
    0 1px 1px rgba(255,255,255,0.9);
  border-radius: 20px;
  text-decoration: none;
  padding: 14px 10px;
  margin: 8px 0;
  color: #333;
`;

const Balance = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const CTA = styled.div``;

const VaultButton: React.FC<any> = ({ asset, balance }) => {
  return (
    <Button to="/vault">
      <Balance>{balance} {asset.name}</Balance>
      <div>View your community tokens in the Vault</div>
    </Button>
  )
}

export default VaultButton;
