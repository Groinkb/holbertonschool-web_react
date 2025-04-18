import React from 'react';
import { StyleSheet, css } from 'aphrodite';

interface NotificationItemProps {
  type?: string;
  value?: string;
  html?: { __html: string };
}

const NotificationItem: React.FC<NotificationItemProps> = ({ type, value, html }) => {
  return (
    <li 
      className={css(
        styles.listItem, 
        type === 'urgent' ? styles.urgent : styles.default
      )}
      data-notification-type={type}
    >
      {html ? (
        <div dangerouslySetInnerHTML={html} />
      ) : (
        value
      )}
    </li>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: '0.5rem',
    margin: '0.5rem 0',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    }
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
});

export default NotificationItem;