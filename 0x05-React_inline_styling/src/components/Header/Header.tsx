import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { School } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className={css(styles.header)}>
      <div className={css(styles.logoContainer)}>
        <School size={36} className={css(styles.logo)} />
        <h1 className={css(styles.title)}>School Dashboard</h1>
      </div>
    </header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#E0354B',
    width: '100%',
    padding: '1rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '1rem',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '1.5rem',
    }
  }
});

export default Header;