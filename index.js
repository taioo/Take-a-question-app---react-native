import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class RNRedux extends React.Component {
    constructor(props) {
        super(props)
        console.log(Date.now())
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>);
    }
}

// const RNRedux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

AppRegistry.registerComponent('myApp', () => new RNRedux());
