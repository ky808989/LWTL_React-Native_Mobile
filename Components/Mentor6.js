import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const jennifer = require("../Images/jennifer.png");

class Mentor6 extends Component {

    onPress(){
        this.props.navigator.push({
            id:'MenuP',

        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.men601}>
                    <Text style={styles.men602}>
                        CONFIRM COFFEE
                    </Text>
                </View>

                <View style={styles.men603}>
                    <Image
                        source={jennifer}
                        resizeMode="stretch"
                        style={styles.men604}>
                    </Image>
                </View>

                <View style={styles.men605}>
                    <View>
                        <Text style={styles.men606}>
                            Jennifer Ashton
                        </Text>
                    </View >

                    <View style={styles.men607}>
                        <Text style={styles.men608}>
                            I recently graduated from BCIT and am looking for guidance towards a career in Psychology.
                            I really just want to talk to woman with a career in any Science based field.
                        </Text>
                    </View>

                    <View style={styles.men609}>
                        <Text style={styles.men610}>
                            4:35 PM at Starbucks, Harbour Centre
                        </Text>
                    </View >
                </View>

                <View style={styles.men611}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Yes, Let's Meet
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
        men601:{
            marginTop: 25,
            paddingTop: 20,
            alignItems: 'center',
            height:70,
            backgroundColor: '#3a3c3f'
        },
        men602:{
            fontSize: 20,
            color: 'white'
        },
        men603:{
            alignItems:'center'
        },
        men604:{
            height: 200,
            width: 280
        },
        men605:{
            marginTop: 20,
            paddingHorizontal: 30
        },
        men606:{
            fontSize: 30
        },
        men607:{
            marginTop: 15
        },
        men608:{
            fontSize: 20
        },
        men609:{
            marginTop: 25
        },
        men610:{
            fontSize: 22
        },
        men611:{
            backgroundColor: 'white',
            padding: 20,
            paddingTop:40
        }
    }
);

module.exports = Mentor6;
