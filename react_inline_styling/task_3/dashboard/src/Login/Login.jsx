import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit} className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>Email:</label>
          <input
            type="email"
            id="email"
            className={css(styles.input)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>Password:</label>
          <input
            type="password"
            id="password"
            className={css(styles.input)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: '20px',
  },
  form: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  },
  inputGroup: {
    marginBottom: '1rem',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '0.5rem'
    }
  },
  label: {
    marginRight: '1rem',
    '@media (max-width: 900px)': {
      marginBottom: '0.5rem'
    }
  },
  input: {
    marginLeft: '0.5rem',
    '@media (max-width: 900px)': {
      width: '100%',
      marginLeft: 0
    }
  },
  button: {
    '@media (max-width: 900px)': {
      width: '100%',
      marginTop: '1rem'
    }
  }
});

export default Login;