import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

const background = require("../Images/background11.jpg");
const personIcon = require("../Images/person.png");

class Mentor1 extends Component {

    onPress(){
        this.props.navigator.push({
            id:'Mentor2',

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
                    <View style={styles.men101}>
                        <Text style={styles.men102}>
                            ElleTourage
                        </Text>
                    </View >

                    <View style={styles.men103}>
                        <Text style={styles.men104}
                        >
                            MENTOR
                        </Text>
                    </View>

                    <View style={styles.men105}>
                      <View>
                          <Text style={styles.men106}>
                              Mentor Over Coffee
                          </Text>
                      </View>

                      <View style={styles.men107}>
                          <Text style={styles.men108}>
                              Mentor somebody over a cup of coffee, other beverage or a snack. {"\n"} {"\n"}
                              In as little 15 minutes, you can impact a woman's life.
                          </Text>
                      </View>

                      <View style={styles.men109}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={()=> {this.onPress()}}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Mentor Over Coffee
                                </Text>
                            </View>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.men110}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image
                                    source={personIcon}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            </View>

                            <View style={styles.men111}>
                                <TouchableOpacity>
                                    <Text style={styles.men112}>
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
            marginTop: 10,
            height: 80,
        },
        buttonText: {
            color: "#FFF",
            fontSize: 30,
        },
        men101: {
            marginTop: 20,
            paddingLeft: 200
        },
        men102: {
            fontSize: 25
        },
        men103: {
            marginTop: 3,
            paddingLeft: 200
        },
        men104: {
            fontSize: 40
        },
        men105: {
            height: 330,
            marginTop: 150,
            padding: 20,
            paddingHorizontal: 30,
            backgroundColor: 'hsla(0, 0%, 0%, 0.2)'
        },
        men106: {
            fontSize: 30,
            color: 'white'
        },
        men107: {
            paddingLeft:5
        },
        men108: {
            marginTop: 30,
            fontSize: 18,
            color: 'white'
        },
        men109: {
            marginTop: 20
        },
        men110: {
            marginTop: 20,
            paddingLeft: 30
        },
        men111: {
            paddingVertical: 13
        },
        men112: {
            paddingHorizontal: 5,
            justifyContent: "center",
            color:'white',
            fontSize: 18
        }
    }
);

module.exports = Mentor1;
