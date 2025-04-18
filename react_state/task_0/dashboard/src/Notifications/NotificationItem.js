import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {StyleSheet, css} from 'aphrodite';


const styles = StyleSheet.create({
    default: {
        color: 'blue',
        '@media (max-width: 900px)': {
            display: 'block',
            borderBottom: 'black solid 2px',
            padding: '10px 8px',
        }
    },
    urgent: {
        color: "red",
        '@media (max-width: 900px)': {
            display: 'block',
            borderBottom: 'black solid 2px',
            padding: '10px 8px',
        }
    }
})

function NotificationItem(props) {
    const style = props.type === 'urgent' ? styles.urgent : styles.default;

    if (props.value) {
        return (
            <>
                <li className={css(style)} onClick={() => {props.markAsRead(props.id)}} data-notification-type={props.type}>
                    {props.value}
                </li>
            </>
        );
    } else {
        return (
            <div>
                <li className={css(style)} onClick={() => {props.markAsRead(props.id)}} data-notification-type={props.type}
                dangerouslySetInnerHTML={props.html}>
                </li>
            </div>
        );
    }
}


NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    value: '',
    markAsRead: () => {},
    id: null
};
  NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string
    }),
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

export default memo(NotificationItem);
