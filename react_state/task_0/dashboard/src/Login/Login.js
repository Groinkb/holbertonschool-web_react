import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  AppBody: {
    minHeight: '35vh',
    marginTop: '10%',
    marginLeft: '10%',
    fontSize: 'calc(8px + 1vmin)',
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'Arial, Helvetica, sans-serif',
    '@media (max-width: 900px)': {
      minHeight: '3vh',
      marginLeft: '1%',
    },
  },
  
  AppBodyLabel: {
    paddingRight: '20px',
    '@media (max-width: 900px)': {
      padding: '5px 0px',
      display: 'block',
    },
  },

  AppBodyInput: {
    '@media (max-width: 900px)': {
      border: 'none',
    },
  },
    
  AppBodyButton: {
    backgroundColor: 'transparent',
    border: '0.5px solid gray',
  }
})

function Login() {
  return (
    <>
        <div className={css(styles.AppBody)}>
          <p>Login to access the full dashboard</p>
          <form>
            <label className={css(styles.AppBodyLabel)}>Email:
              <input className={css(styles.AppBodyInput)} type="email"/>
            </label>
            <label className={css(styles.AppBodyLabel)}>Password:
              <input className={css(styles.AppBodyInput)} type="password"/>
            </label>
            <button className={css(styles.AppBodyButton)}>OK</button>
          </form>
        </div>
    </>
  );
}

export default Login;
