/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TextInput,
    Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH =  width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const researchIcon = require("../Images/researchIcon.png");

class Mentor3 extends Component {

    onPress(page){
        if(page == 'a') {
            this.props.navigator.push({
                id: 'Mentor4'
            });
        }else{
            this.props.navigator.push({
                id: 'Mentor2'
            });
        }
    }

    constructor(props)
    {
        super(props)
        this.state =
            {
                initialPosition:{
                    latitude:49.250606,
                    longitude:-123.002618,
                    latitudeDelta:0.9,
                    longitudeDelta:0.9
                },
                markerPosition:{
                    latitude:0,
                    longitude:0
                }
            }
    }

    watchID: ?number = null;

    componentDidMount()
    {
        navigator.geolocation.getCurrentPosition( (position) => {
                var lat = parseFloat(position.coords.latitude);
                var long = parseFloat(position.coords.longitude);

                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }

                this.setState({initialPosition:initialRegion});
                this.setState({markerPosition:initialRegion});

            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});

        this.watchID = navigator.geolocation.watchPosition( (position) => {
            var lat=parseFloat(position.coords.latitude);
            var long=parseFloat(position.coords.longitude);

            var lastRegion = {
                latitude: lat,
                longitude: long,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA
            }

            this.setState({initialPosition:lastRegion});
            this.setState({markerPosition:lastRegion});
        });
    }

    componentWillUnmount()
    {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render()
    {
        return(
            <ScrollView>
                <View style={styles.men301}>
                    <TouchableOpacity

                        activeOpacity={.5}
                        onPress={(page)=> this.onPress('a')}
                    >
                        <Text style={styles.men302}>
                            WHERE TO MEET ?
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.men303}>
                    <MapView
                        style={styles.map}
                        initialRegion={this.state.initialPosition}
                    >
                        <MapView.Marker
                            coordinate={this.state.markerPosition}>
                            <View style={styles.radius}>
                                <View style={styles.marker}>
                                </View>
                            </View>
                        </MapView.Marker>
                    </MapView>
                </View>

                <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                        <Image
                            source={researchIcon}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.men304}>
                    <TextInput
                        placeholder="Starbucks"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                    />
                    </View>
                    <View style={styles.men305}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={(page)=> this.onPress('b')}
                        >
                        <Text style={styles.men306}>
                            Cancel
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        left: 0,
        right: 0,
        top:0,
        bottom: 0,
        position: 'absolute'
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 /2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255,0.1)',
        borderWidth:1,
        borderColor: 'rgba(0,112,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF',
        borderWidth:3,
        borderColor: 'white',
    },
    inputWrap: {
        marginLeft: 20,
        marginTop: 30,
        flexDirection: "row",
        height: 50,
        backgroundColor: "transparent"
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    iconWrap: {
        flex: 0.5,
        paddingHorizontal: 7,
        borderBottomLeftRadius: width -0.5,
        borderTopLeftRadius: width -0.5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'hsla(0, 0%, 0%, 0.2)'
    },
    icon:{
        width: 20,
        height: 20
    },
    men301: {
        marginTop: 25,
        paddingTop: 20,
        alignItems: 'center',
        height:70,
        backgroundColor: '#3a3c3f'
    },
    men302: {
        fontSize: 20,
        color: 'white'
    },
    men303: {
        height: 450
    },
    men304: {
        flex: 3,
        backgroundColor: 'hsla(0, 0%, 0%, 0.2)',
        borderBottomRightRadius: width -0.5,
        borderTopRightRadius: width -0.5
    },
    men305: {
        flex: 1,
        marginTop: 15,
        marginLeft: 10,
        alignItems: 'center'
    },
    men306: {
        fontSize: 20,
        textDecorationLine: 'underline'
    },
});

module.exports = Mentor3;