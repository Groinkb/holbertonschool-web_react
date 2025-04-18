import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Notifications from './components/Notifications/Notifications';
import CourseList from './components/CourseList/CourseList';
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySection/BodySectionWithMarginBottom';
import { BellRing } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  };

  const handleLogin = (email: string, password: string) => {
    // Simple login simulation
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Sample notifications
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
  ];

  // Sample courses
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  return (
    <div className={css(styles.app)}>
      <div className={css(styles.upperSection)}>
        <div className={css(styles.notificationIconContainer)} onClick={handleDisplayDrawer}>
          <BellRing size={24} className={css(styles.bellIcon)} />
          <Notifications
            displayDrawer={displayDrawer}
            listNotifications={listNotifications}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
          />
        </div>
        <Header />
      </div>
      <div className={css(styles.appBody)}>
        {isLoggedIn ? (
          <>
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
            <BodySection title="News from the School">
              <p>Some random text about school news and updates. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BodySection>
          </>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login onLogin={handleLogin} />
          </BodySectionWithMarginBottom>
        )}
      </div>
      <Footer />
    </div>
  );
};

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  upperSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '3px solid #E0354B',
    position: 'relative',
  },
  notificationIconContainer: {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    cursor: 'pointer',
  },
  bellIcon: {
    color: '#E0354B',
  },
  appBody: {
    flex: 1,
    padding: '1.5rem',
    backgroundColor: '#f5f5f5',
  }
});

export default App;