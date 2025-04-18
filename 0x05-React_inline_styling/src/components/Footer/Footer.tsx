import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Footer: React.FC = () => {
  return (
    <footer className={css(styles.footer)}>
      <p>Copyright {new Date().getFullYear()} - Holberton School</p>
    </footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTop: '3px solid #E0354B',
    padding: '1.5rem',
    textAlign: 'center',
    fontStyle: 'italic',
    backgroundColor: 'white',
  }
});

export default Footer;