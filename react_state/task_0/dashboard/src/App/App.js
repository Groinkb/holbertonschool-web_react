import React, {Component} from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';
import {StyleSheet, css} from 'aphrodite';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { displayDrawer: false };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') { // ctrl + h/H is pressedDE 
      console.log(`Logging you out`);
      this.props.logOut();
    }
  }



  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    });
  }



  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    });
  }



  render() {
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
    ];



    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];



    const { displayDrawer } = this.state;
    let LoginHOC = WithLogging(Login);
    let displayScreen;
    if (this.props.isLoggedIn === false) {
      displayScreen =
      <div>
        <BodySectionWithMarginBottom title={'Log in to continue'}> <LoginHOC/> </BodySectionWithMarginBottom>
      </div>
    } else {
      displayScreen =
      <div>
        <BodySectionWithMarginBottom title={'Course list'}>
          <CourseList listCourses={listCourses}/>
        </BodySectionWithMarginBottom>
      </div>
    }
    return (
      <>
        <Notifications 
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header/>
          <hr className={css(styles.sectionLine)}></hr>
          <div className={css(styles.body)}>
            {displayScreen}
            <BodySection  title='News from the School' children={<p>Some random text</p>}></BodySection>
          
            <hr className={css(styles.sectionLine)}></hr>
            <div className={css(styles.footer)}>
              <Footer/>
            </div>
          </div>
        </div>
      </>
    );
  }
}



App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

const styles = StyleSheet.create({
  sectionLine: {
    border: 'none',
    height: '2.5px',
    backgroundColor: '#e0003c',
    color: '#e0003c',
  },

  footer: {
    textAlign: 'center',
    minHeight: '5vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(8px + 1vmin)',
    fontStyle: 'italic',
    fontWeight: '500',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  body: {
  }
});

export default App;
