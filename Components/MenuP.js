import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

class MenuP extends Component {

    onPress(page){
        if(page == 'c') {
            this.props.navigator.push({
                id: 'Mentor1'
            });
        }else if(page == 'b'){
            this.props.navigator.push({
                id: 'Member1'
            });
        }
        else if(page == 'a') {
            this.props.navigator.push({
                id: 'Reg1'
            });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                <View style={styles.menu1}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={(page)=> this.onPress('a')}
                    >
                    <Text style={styles.menu2}>
                        Sign Up to Elletourage
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menu3}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        style={styles.menu4}
                        onPress={(page)=> this.onPress('b')}
                    >
                        <Text style={styles.menu5}>
                            Find a Mentor >>
                        </Text>
                        <Text style={styles.menu6}>
                            I'm looking for a woman mentor to help guide my life, business or family.
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menu7}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        style={styles.menu4}
                        onPress={(page)=> this.onPress('c')}
                    >
                        <Text style={styles.menu5}>
                            Be a Mentor >>
                        </Text>
                        <Text style={styles.menu6}>
                            I want to mentor women and help improve their lives.
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {

         container: {
            flex: 1,
            backgroundColor: 'white'
        },

        menu1: {
            paddingTop: 50,
            paddingLeft: 20,
            justifyContent: 'center'
        },
        menu2: {
            fontSize: 35,
            alignItems: 'center'
        },
        menu3: {
            paddingHorizontal: 35,
            paddingTop: 40,
            borderTopWidth: 1,
            marginTop: 140,
            justifyContent:'center'
        },
        menu4: {
            justifyContent: 'center'
        },
        menu5: {
            fontSize: 40,
            alignItems: 'center'
        },
        menu6: {
            fontSize: 20
        },
        menu7: {
            paddingHorizontal: 35,
            paddingTop: 40,
            borderTopWidth: 1,
            marginTop: 80,
            justifyContent:'center'
        },
    }
);

module.exports = MenuP;
