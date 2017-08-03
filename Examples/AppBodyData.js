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
import HTMLVIEW from 'react-native-htmlview';
import{Content,Card,CardItem,Body, Left,Thumbnail} from 'native-base';


export default class AppBodyData extends Component{

    render(){
        let articles = this.props.data.map(function(articleData,index){
            return (

                    <Card>
                        <CardItem>
                            <Left>

                                <Body>
                                <Text>
                                    {articleData.title.$t}
                                </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem content>
                            <HTMLVIEW value={articleData.content.$t} />
                        </CardItem>
                    </Card>

            );
        })
        return (
            <Content>
                {articles}
            </Content>
        );
    }

}
const styles = StyleSheet.create({
    bodyText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        color:'blue',
        fontSize: 40,
    },

});
module.exports = AppBodyData;
