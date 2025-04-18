import React from 'react';
import logo from '../assets/logo_h.jpg';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  AppLogo: {
    height: '23vh',
    pointerEvents: 'none',
  },
  
  header: {
    minHeight: '24vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 'calc(8px + 0.9vh)',
    textAlign: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#e0003c',
  }
})

function Header() {
  return (
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.AppLogo)} />
          <h1>School dashboard</h1>
        </div>
  );
}

export default Header;
