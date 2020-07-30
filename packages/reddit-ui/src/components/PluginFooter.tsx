import React from 'react';
import styled from 'styled-components';
import { BurnerContext, withBurner, DataProviders } from '@burner-wallet/ui-core';

const { PluginElements } = DataProviders;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eeeeee;

  & > div {
    margin: 8px;
  }
`;

const PluginFooter = (props) => {
  return (
    <Footer>
      <PluginElements position='home-middle' />    
    </Footer>
  )
}

export default PluginFooter;
