import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li
      className={css(
        styles.listItem,
        type === 'urgent' ? styles.urgent : styles.default
      )}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    >
      {value}
    </li>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: '10px 8px',
    borderBottom: '1px solid black',
    '@media (max-width: 900px)': {
      width: '100%',
      fontSize: '20px',
      padding: '10px 8px',
    }
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;