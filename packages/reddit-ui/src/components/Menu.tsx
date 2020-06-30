import React from 'react';
import { Link } from 'react-router-dom';
import { useBurner } from '@burner-wallet/ui-core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface MenuProps {
  onClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClick }) => {
  const { actions } = useBurner();

  const scan = () => {
    onClick();
    actions.openDefaultQRScanner();
  };

  return (
    <List style={{ width: '200px' }}>
      <ListItem button>
        <ListItemIcon/>
        <ListItemText primary="My Profile" />
      </ListItem>
      <ListItem button component={Link} to="/vault" onClick={onClick}>
        <ListItemIcon/>
        <ListItemText primary="Vault" />
      </ListItem>
      <ListItem button onClick={scan}>
        <ListItemIcon/>
        <ListItemText primary="Scanner" />
      </ListItem>
    </List>
  )
}

export default Menu;
