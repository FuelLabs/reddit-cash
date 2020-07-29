import React, { useState } from 'react';
import _styled, { ThemedStyledInterface } from 'styled-components';
import { Route } from 'react-router-dom';
import { useBurner } from '@burner-wallet/ui-core';
import { SCAN_QR_DATAURI } from '../lib';
import { BurnerTheme } from '../Template';
import Drawer from './Drawer';

const styled = (_styled as ThemedStyledInterface<BurnerTheme>);

const HeaderElement = styled.header`
  display: flex;
  height: 42px;
  align-items: center;
  justify-content: space-between;
  background: white;
  position: fixed;
  box-shadow: 0px 1px 4px #949494;
  z-index: 1;
  right: 0;
  left: 0;
  top: 0;
  padding: 8px;

  @media (min-width: 600px) {
    left: 200px;
  }
`;

const SearchBar = styled.input`
  flex: 1;
  border: none;
  background: #eeeeee;
  padding: 8px;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Subtitle = styled.div`
  font-size: 12px;
`;

const Coin = styled.div`
  margin: 12px;
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background: gold;
`;

const HeaderAccount = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;

const UserButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  z-index: 1200;
  border: none;
  outline: none;
  overflow: hidden;
  margin-right: 4px;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;

  &:before, &:after {
    content: '';
    display: block;
    background: white;
    border-radius: 100px;
  }
  &:before {
    height: 12px;
    width: 12px;
    margin: 8px 0 2px;
  }
  &:after {
    height: 24px;
    width: 26px;
    margin-bottom: -24px;
  }
`;

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { defaultAccount, actions } = useBurner();
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderElement>
      <Drawer isOpen={isOpen} setOpen={setOpen} />

      <UserButton onClick={() => setOpen(true)} />

      <SearchBar placeholder="search" readOnly />
    </HeaderElement>
  );
};

export default Header;
