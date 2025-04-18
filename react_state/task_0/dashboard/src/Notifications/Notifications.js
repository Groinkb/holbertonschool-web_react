import React, {Component} from 'react';
import icon from '../assets/icons8-close-30.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import {StyleSheet, css} from 'aphrodite';


let currentNotifications;
let notificationsDisplay;

class Notifications extends Component {
    constructor(props) {
        super(props);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    // Lifecycle method, when returns false, the component will not re-render
    shouldComponentUpdate(nextProps) {
        return (this.props.listNotifications.length < nextProps.listNotifications.length) || (this.props.displayDrawer !== nextProps.displayDrawer);
    }

    render() {
        const { handleDisplayDrawer, handleHideDrawer } = this.props;
    
        // Display if listNotifications is empty or not
        if (this.props.listNotifications.length < 1) {
            currentNotifications = <tr>No new notification for now</tr>
        } else {
            currentNotifications =
            <div>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.ulSelector)}>
                    {this.props.listNotifications.map((element) => {
                        return (<NotificationItem key={element.id} type={element.type} value={element.value} html={element.html} />)
                    })}
                </ul>
            </div>
        }

        // Display if displayDrawer is true or false
        if (this.props.displayDrawer === true) {
            notificationsDisplay = 
            <div data-testid="notis" className={css(styles.NotificationsSelector)}>
                <button aria-label='Close' onClick={handleHideDrawer} style={{float: 'right', backgroundColor: 'transparent', border: 'none'}}>
                    <img src={icon} alt='icon' style={{backgroundColor: 'transparent', border: 'none'}}></img>
                </button>
                {currentNotifications}
            </div>
        } else {
            notificationsDisplay = null;
        }

        // menuItem style if displayDrawer is true or false
        const menuItem = this.props.displayDrawer === true ? styles.menuItem2 : styles.menuItem1;

        return (
            <div className={css(styles.NotificationContainer)}>
                <div role="button" onClick={handleDisplayDrawer} data-testid="menu-item" className={css(menuItem, styles.hover)}>Your notifications</div>
                {notificationsDisplay}
            </div>
        );
    }
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
};
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func
};

const styles = StyleSheet.create({
    NotificationsSelector: {
        border: '2px dashed #e0003c',
        padding: '5px',
        '@media (max-width: 900px)': {
            display: 'block',
            border: 'none',
            width: '100%',
            height: '100vh',
            padding: '0px',
            right: '0vh',
            top: '0vh',
            fontSize: '20px',
            background: 'white',
            
        },
    },
    NotificationContainer: {
        position: 'absolute',
        right: '5vh',
        top: '2vh',
        '@media (max-width: 900px)': {
            display: 'block',
            width: '100%',
            height: '100vh',
            padding: '0px',
            right: '0vh',
            top: '0vh',
            fontSize: '20px',
        },
        
    },
    
    menuItem1: {
        float: 'right',
        background: '#fff8f8',
        cursor: 'pointer',
        paddingBottom: '1vh',
        '@media (max-width: 900px)': {
            padding: '1.5vh',
        },
    },

    menuItem2: {
        display: 'none',
    },
    
    ulSelector: {
        paddingRight: '10vh',
        '@media (max-width: 900px)': {
            padding: '0px',
        },
    },

    hover: {
        ':hover': {
            animationName: {
                '0%': {
                    opacity: '0.5',
                    transform: 'translate(0px, 5px)'
                },
                '25%': {
                    transform: 'translate(0px, -5px)'
                },
                '50%': {
                    transform: 'translate(0px, 5px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translate(0px, -5px)'
                }
            },
            animationDuration: '1s',
            animationIterationCount: '3',
        }
    },
});

export default Notifications;