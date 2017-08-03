import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

class Reg3 extends Component {

    onPress(){
        this.props.navigator.push({
            id:'MenuP',

        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.reg31}>
                    <Text style={styles.reg32}>
                        Thank You !
                    </Text>
                </View>

                <View>
                        <View>
                            <Text style={styles.reg33}>
                                You are now a Mentor at Elletourage joining
                                people like Cindy Cindyness the CEO of Starbucks.
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.reg34}>
                                Click "Get Started" below to start mentoring
                                immediately, add a short profile or add a photo.

                            </Text>
                        </View>

                        <View>
                            <Text style={styles.reg34}>
                                Mentoring starts by dedicating as little as 15 minutes for a short coffee.
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.reg35}>
                                Thanks you so much for making women's lives better.
                            </Text>
                        </View>
                </View>

                <View style={styles.reg36}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Get Started
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor:'white'
        },
        button: {
            backgroundColor: "#4cb712",
            alignItems: "center",
            justifyContent: "center",
            padding: 10
        },
        buttonText: {
            color: "#FFF",
            fontSize: 30,
        },
        reg31: {
            paddingTop: 40,
            paddingLeft: 25,
            height:100
        },
        reg32: {
            fontSize: 35
        },
        reg33: {
            marginTop: 30,
            paddingLeft:25,
            fontSize: 21,
            marginBottom: 15,
            color: 'black'
        },
        reg34: {
            marginTop: 15,
            paddingLeft:25,
            fontSize: 21,
            marginBottom: 15,
            color: 'black'
        },
        reg35: {
            marginTop: 15,
            paddingLeft:25,
            fontSize: 21,
            color: 'black'
        },
        reg36: {
            backgroundColor: 'white',
            padding: 20,
            paddingTop: 80
        },
    }
);

module.exports = Reg3;
