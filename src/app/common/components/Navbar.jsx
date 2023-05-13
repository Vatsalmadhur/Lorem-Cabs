import React from 'react';
import styles from '@styles/common/navbar.module.scss';
import Link from 'next/link';
import propTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai';
import { ActionIcon, Drawer } from '@mantine/core';

function Navbar({ drawer, handleDrawer }) {
  return (
    <header className="section-center primary-background">
      <div className={styles.header}>
        <div className={`flex-row ${styles.navbarContainer}`}>
          <ActionIcon
            variant="transparent"
            color="dark"
            className={styles.mobileNavbarMenu}
            onClick={() => {
              handleDrawer(true);
            }}
          >
            <AiOutlineMenu />
          </ActionIcon>
          <div className={styles.navbarLogo}>
            <Link href="/">FLOW</Link>
          </div>
          <div className={`flex-row ${styles.desktopNavbarLinks}`}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Contact</Link>

          </div>
        </div>
      </div>
      <Drawer
        position="left"
        opened={drawer}
        onClose={() => {
          handleDrawer(false);
        }}
        styles={{
          body: {
            padding: '0 20px',
          },
          header: {
            fontWeight: 500,
            fontSize: 22,
            letterSpacing: 10,
            padding: '10px 20px',
          },
        }}
        title="SSKARC"
      >
        <div className={`flex-column ${styles.mobileDrawerLinks}`}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </Drawer>
    </header>
  );
}

export default Navbar;

Navbar.propTypes = {
  drawer: propTypes.bool.isRequired,
  handelDrawer: propTypes.func.isRequired,
};
