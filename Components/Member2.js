import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    AlertIOS
} from 'react-native';
import APIData from '../lib/APIData';
class Member2 extends Component {
    constructor()
    {
        super();
        this.state ={
            apiObject: {},
            DataArray:[],
            username:[],
            fullName:[],
            key:{TOKEN_KEY:'@LWTL:id_token',DATA_KEY:'@LWTL:recommendations'}
        }

    };

    getData = async () => {
        const APIObject = new APIData();

        APIObject.getAPIdata(this.state.key.TOKEN_KEY, this.state.key.DATA_KEY);
        try {
            var resp = await AsyncStorage.getItem(this.state.key.DATA_KEY);
            if (resp !== null) {

                var object = JSON.parse(resp);
                this.setState({DataArray:object.recommendations});
                this.setState({apiObject: object});
                // console.log(this.state.apiObject);
                // AlertIOS.alert(this.state.testArray[0].connection_type);
            }
            else
            {
                this.setState({'string': 'failed'});
            }
        } catch(error)
        {
            this.setState({'string': 'error'});
        }
    }
    componentWillMount()
    {
        this.getData().done();
    }

    dataArrayMapping(dataArray,usernameA,fullNameA)
    {
        var i = -1;
        dataArray.map(function(item){
            i++;
            usernameA.push(item.user.username);
            fullNameA.push(item.user.profile.first_name+" "+item.user.profile.last_name);

        });
    };
    onPress(){
        this.props.navigator.push({
            id:'Member3',

        });
    }

    render() {
        this.dataArrayMapping(this.state.DataArray, this.state.username ,this.state.fullName);
        return (
                <ScrollView style={[styles.container]}>
                    <View style={styles.mem201}>
                        <Text style={styles.mem202}>
                            ElleTourage
                        </Text>

                        <Text style={styles.mem203}>
                            Mentors Available Right Now
                        </Text>
                    </View >

                    <View style={styles.mem204}>
                        <View>
                            <Text style={styles.mem205}>
                                {this.state.fullName[1]}
                            </Text>
                        </View>

                        <View style={styles.mem206}>
                            <Text style={styles.mem207}>
                                I'm a small business owner with 5 years experience running my Sports Apparel business
                                while caring for a family of 3 children.
                                {"\n"}
                                {"\n"}
                                Starbucks Harbour Center{"\n"}
                                300 meters from here
                                {"\n"}
                                {"\n"}
                                15 minutes from now
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={()=> {this.onPress()}}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Get Mentored by {this.state.fullName[1]}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.mem208}>
                        <View>
                            <Text style={styles.mem205}>
                                {this.state.username[0]}
                            </Text>
                        </View>

                        <View style={styles.mem210}>
                            <Text style={styles.mem211}>
                                I'm a small business owner with 5 years experience running my Sports Apparel business
                                while caring for a family of 3 children.
                                {"\n"}
                                {"\n"}
                                Starbucks Harbour Center{"\n"}
                                1.2km fro here
                                {"\n"}
                                {"\n"}
                                45 minutes from now
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={()=> {this.onPress()}}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Get mentored by {this.state.username[0]}
                                    </Text>
                                </View>
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
        button: {
            backgroundColor: "#4cb712",
            paddingHorizontal: 5,
            justifyContent: "center",
            marginTop: 10,
            height: 45,
        },
        buttonText: {
            color: "#FFF",
            fontSize: 23,
        },
        mem201: {
            marginTop: 25,
            paddingLeft: 30,
            paddingBottom:10,
            borderBottomWidth:1
        },
        mem202: {
            fontSize: 20
        },
        mem203: {
            fontSize: 23
        },
        mem204: {
            height: 280,
            marginTop: 5,
            borderBottomWidth:1,
            padding: 5,
            paddingHorizontal: 30,
        },
        mem205: {
            fontSize: 23,
            color: 'black'
        },
        mem206: {
            paddingLeft:5
        },
        mem207: {
            marginTop: 5,
            fontSize: 16.5,
            color: 'black'
        },
        mem208: {
            height: 280,
            marginTop: 15,
            padding: 5,
            paddingHorizontal: 30
        },
        mem210: {
            paddingLeft:5
        },
        mem211: {
            marginTop: 5,
            fontSize: 16.5,
            color: 'black'
        },
    }
);

module.exports = Member2;
