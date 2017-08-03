/**
 * Created by po-yingyu on 2017-05-14.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Header, Left, Button, Icon, Right, Body,Title } from 'native-base';



export default class AppHeader extends Component{

    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }

}

module.exports = AppHeader;
