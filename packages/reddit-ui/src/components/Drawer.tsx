import React, { useState, Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MaterialDrawer from '@material-ui/core/Drawer';
import Menu from './Menu';

const Drawer: React.FC<any> = ({ isOpen, setOpen }) => {
  const menu = (<Menu onClick={() => setOpen(false)} />);

  return (
    <Fragment>
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          anchor="left"
          open={isOpen}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {menu}
        </SwipeableDrawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <MaterialDrawer
          variant="permanent"
          open
        >
          {menu}
        </MaterialDrawer>
      </Hidden>
    </Fragment>
  );
}

export default Drawer;
