import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value !== '' && password !== '');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setEnableSubmit(email !== '' && e.target.value !== '');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className={css(styles.loginContainer)}>
      <p className={css(styles.loginMessage)}>
        Login to access the full dashboard
      </p>
      <form onSubmit={handleLoginSubmit} className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.input)}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.input)}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className={css(styles.button, !enableSubmit && styles.disabledButton)}
          disabled={!enableSubmit}
        >
          OK
        </button>
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: '2rem',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
  },
  loginMessage: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    }
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  },
  label: {
    marginRight: '1rem',
    minWidth: '80px',
    '@media (max-width: 900px)': {
      marginBottom: '0.5rem',
    }
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #E5E7EB',
    borderRadius: '4px',
    flexGrow: 1,
    '@media (max-width: 900px)': {
      width: '100%',
    }
  },
  button: {
    alignSelf: 'flex-start',
    padding: '0.5rem 1.5rem',
    backgroundColor: '#E0354B',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#C0253B',
    },
    '@media (max-width: 900px)': {
      alignSelf: 'center',
    }
  },
  disabledButton: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
    ':hover': {
      backgroundColor: '#ccc',
    }
  }
});

export default Login;