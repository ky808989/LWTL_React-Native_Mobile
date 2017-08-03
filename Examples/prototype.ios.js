/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import {Container} from 'native-base';

import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

export default  class LWTL extends Component {


    render()
    {
        return(
            <Container>
                <AppHeader/>
                <AppBody/>
                <AppFooter/>
            </Container>
        );
    }
}


AppRegistry.registerComponent('LWTL', () => LWTL);
