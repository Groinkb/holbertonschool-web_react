import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer, listNotifications = [] }) => {
  return (
    <div className={css(styles.notifications, displayDrawer && styles.notificationsOpen)}>
      <div className={css(styles.menuItem)}>Your notifications</div>
      {displayDrawer && (
        <div className={css(styles.notificationsPanel)}>
          <p>Here is the list of notifications</p>
          <ul className={css(styles.notificationsList)}>
            {listNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  notifications: {
    padding: '10px',
    position: 'relative',
  },
  notificationsOpen: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      zIndex: 9999,
      padding: 0,
      fontSize: '20px'
    }
  },
  menuItem: {
    textAlign: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      display: 'none'
    }
  },
  notificationsPanel: {
    padding: '10px',
    border: '1px dashed red',
    marginTop: '10px',
    '@media (max-width: 900px)': {
      border: 'none',
      padding: 0
    }
  },
  notificationsList: {
    listStyle: 'none',
    padding: 0,
    '@media (max-width: 900px)': {
      padding: 0
    }
  }
});

export default Notifications;