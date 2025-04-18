import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.appBody)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some random text about school news...</p>
          </BodySection>
        </div>
        <Footer />
      </div>
      <div className={css(styles.menuItem)}>
        <Notifications />
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  appBody: {
    flex: 1,
    padding: '1rem',
  },
  menuItem: {
    position: 'fixed',
    top: '0',
    right: '0',
  }
});

export default App;