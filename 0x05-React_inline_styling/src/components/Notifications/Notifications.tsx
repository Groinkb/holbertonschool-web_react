import React from 'react';
import { StyleSheet, css, keyframes } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { BellRing, X } from 'lucide-react';

interface NotificationProps {
  id: number;
  type: string;
  value?: string;
  html?: { __html: string };
}

interface NotificationsProps {
  displayDrawer: boolean;
  listNotifications: NotificationProps[];
  handleDisplayDrawer: () => void;
  handleHideDrawer: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({
  displayDrawer,
  listNotifications,
  handleDisplayDrawer,
  handleHideDrawer
}) => {
  return (
    <>
      {!displayDrawer && (
        <div 
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
      )}
      {displayDrawer && (
        <div className={css(styles.notifications)}>
          <div className={css(styles.notificationsHeader)}>
            <p className={css(styles.title)}>Notifications</p>
            <button 
              aria-label="Close" 
              className={css(styles.closeButton)}
              onClick={handleHideDrawer}
            >
              <X size={16} />
            </button>
          </div>
          {listNotifications.length > 0 ? (
            <>
              <p className={css(styles.subtitle)}>Here is the list of notifications</p>
              <ul className={css(styles.list)}>
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p className={css(styles.noNotification)}>No new notification for now</p>
          )}
        </div>
      )}
    </>
  );
};

const opacityChange = keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 }
});

const bounceAnimation = keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' }
});

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    right: '1rem',
    backgroundColor: '#fff8f8',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    zIndex: 100,
    float: 'right',
    ':hover': {
      animationName: [opacityChange, bounceAnimation],
      animationDuration: ['1s', '0.5s'],
      animationIterationCount: 3,
    }
  },
  notifications: {
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '1rem',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    '@media (max-width: 900px)': {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      padding: '0',
      fontSize: '20px',
      border: 'none',
      borderRadius: '0',
    }
  },
  notificationsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '0.5rem',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: 0,
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  subtitle: {
    margin: '1rem 0',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '@media (max-width: 900px)': {
      padding: 0,
    }
  },
  noNotification: {
    margin: '1rem 0',
    fontStyle: 'italic',
  }
});

export default Notifications;