import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function NavbarContainer() {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = (bool) => {
    setDrawer(bool);
  };

  return <Navbar drawer={drawer} handleDrawer={handleDrawer} />;
}

export default NavbarContainer;