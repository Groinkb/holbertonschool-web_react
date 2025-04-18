import React, {Component} from 'react';
import PropTypes from 'prop-types';

function WithLogging(WrappedComponent) {
    const NAME_OF_THE_WRAPPED_COMPONENT = WrappedComponent.name || 'Component';
    // Create a class to use lifecycle methods from Component
    class LifecycleMonitoredComponent extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log(`Component ${NAME_OF_THE_WRAPPED_COMPONENT} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${NAME_OF_THE_WRAPPED_COMPONENT} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    // Modify the displayName for debugging messages
    LifecycleMonitoredComponent.displayName = `WithLogging(${NAME_OF_THE_WRAPPED_COMPONENT})`;

    return LifecycleMonitoredComponent;

}

WithLogging.propTypes = {
    WrappedComponent: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ])
};

export default WithLogging;