/**
 * Created by po-yingyu on 2017-05-14.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';

import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';


export default class AppFooter extends Component{

    render(){
        return (
            <Container>
                <Content/>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name="apps" />
                        </Button>
                        <Button>
                            <Icon name="camera" />
                        </Button>
                        <Button active>
                            <Icon active name="navigate" />
                        </Button>
                        <Button>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

}
const styles = StyleSheet.create({
    footerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
module.exports = AppFooter;
