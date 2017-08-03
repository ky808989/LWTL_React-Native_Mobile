/**
 * Created by Grounp 4 - Course ACIT 3900- CIT Program - BCIT in May 2017.
 */
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

const background = require("../Images/background12.jpg");
const personIcon = require("../Images/person.png");

class Member1 extends Component {


    onPress(){
        this.props.navigator.push({
            id:'Member2',

        });
    }

    render() {
        return (
            <Image
                style={[styles.background, styles.container]}
                source={background}
                resizeMode="cover"
            >
                <ScrollView>
                    <View style={styles.mem11}>
                        <Text style={styles.mem12}>
                            MEMBER
                        </Text>
                    </View>

                    <View style={styles.mem13}>
                        <View>
                            <Text style={styles.mem14}>
                                How it works for members
                            </Text>

                        </View>

                        <View style={styles.mem15}>
                            <Text style={styles.mem16}>
                                When a mentor in your area has time to mentor, you will receive a notification on your
                                phone letting you know when and where she is available.
                                {"\n"}
                                {"\n"}
                                At that time, you can accept the invitation.

                            </Text>
                        </View>


                    </View>

                    <View style={styles.mem17}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={()=> {this.onPress()}}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Are you ready to go?
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputWrap}>

                            <View style={styles.iconWrap}>
                                <Image
                                    source={personIcon}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            </View>

                            <View style={styles.mem18}>
                                <TouchableOpacity>
                                    <Text style={styles.mem19}>
                                        Add a profile description or photo
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Image>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        background: {
            width: null,
            height: null
        },
        inputWrap: {
            flexDirection: "row",
            height: 50,
            backgroundColor: "transparent"
        },
        iconWrap: {
            paddingHorizontal: 7,
            alignItems: "center",
            justifyContent: "center",
        },
        icon:{
            width: 20,
            height: 20
        },
        button: {
            backgroundColor: "#4cb712",
            paddingHorizontal: 15,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            height: 40,
        },
        buttonText: {
            color: "#FFF",
            fontSize: 18,
        },
        mem11: {
            marginTop: 120,
            paddingLeft: 165
        },
        mem12: {
            fontSize: 35
        },
        mem13: {
            height: 330,
            marginTop: 50,
            padding: 20,
            paddingHorizontal: 30,
            backgroundColor: 'hsla(0, 0%, 0%, 0.2)'
        },
        mem14: {
            fontSize: 28,
            color: 'white'
        },
        mem15: {
            paddingLeft:5
        },
        mem16: {
            marginTop: 30,
            fontSize: 22,
            color: 'white'
        },
        mem17: {
            marginTop: 5,
            paddingLeft: 30,
            paddingRight: 30
        },
        mem18: {
            paddingVertical: 13
        },
        mem19: {
            paddingHorizontal: 5,
            justifyContent: "center",
            color:'white',
            fontSize: 18
        }
    }
);

module.exports = Member1;
