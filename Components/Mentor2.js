import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Picker,
    ScrollView,
    AsyncStorage
} from 'react-native';
import moment from 'moment';

class Mentor2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: moment(),
            cloneDate: moment(),
            dateArray: {
                d1: moment().add(1,'d').format('ddd MMM D'),
                d2: moment().add(2,'d').format('ddd MMM D'),
                d3: moment().add(3,'d').format('ddd MMM D'),
                d4: moment().add(4,'d').format('ddd MMM D'),
                d5: moment().add(5,'d').format('ddd MMM D'),
                d6: moment().add(6,'d').format('ddd MMM D')
            },
            addDays: 0,
            hour: 6,
            minute: 30,
            AP: 0,
            period: '5 Minutes',
            key:{ meetDate_key:'@LWTL:meetDate', meetPeriod_key:'@LWTL2:meetPeriod'}
        }
    }
    saving(){
        this.state.cloneDate.set('hour', 0).set('minute', 0);
        this.state.cloneDate.add(this.state.addDays, 'd').add(this.state.hour, 'h');
        this.state.cloneDate.add(this.state.minute, 'm').add(this.state.AP, 'h');
        this.save();
    }

    save = async () => {
        try{
            await AsyncStorage.setItem(this.state.key.meetDate_key, this.state.cloneDate.format('h:mm A MMM Do'));
            await AsyncStorage.setItem(this.state.key.meetPeriod_key, this.state.period);
        }catch(err){
            console.log('error');
        }
    }

    onPress(){
        this.saving();
        this.props.navigator.push({
            id:'Mentor3',

        });
    }

    render(){
        return (
            <ScrollView style={styles.men201}>
                <View style={styles.men202}>
                    <Text style={styles.TimeSelect1}>
                        When can you meet ?
                    </Text>
                </View>

                <View style={styles.men203}>
                    <View
                        style={styles.men204}>
                        {/*Date------------Date----------------Date------------*/}
                        <Picker
                            selectedValue={this.state.addDays}
                            onValueChange={(dateSelect) => this.setState({addDays: dateSelect})}
                        >
                            <Picker.Item label="Today" value={0} />
                            <Picker.Item label={this.state.dateArray.d1} value={1} />
                            <Picker.Item label={this.state.dateArray.d2} value={2} />
                            <Picker.Item label={this.state.dateArray.d3} value={3} />
                            <Picker.Item label={this.state.dateArray.d4} value={4} />
                            <Picker.Item label={this.state.dateArray.d5} value={5} />
                            <Picker.Item label={this.state.dateArray.d6} value={6} />
                        </Picker>
                    </View>

                    <View style={styles.men205}>
                        {/*//Hour----------------Hour------------------Hour------------*/}
                        <Picker
                            selectedValue={this.state.hour}
                            onValueChange={(hourSelect) => this.setState({hour: hourSelect})}
                        >
                            <Picker.Item label="1" value={1} />
                            <Picker.Item label="2" value={2} />
                            <Picker.Item label="3" value={3} />
                            <Picker.Item label="4" value={4} />
                            <Picker.Item label="5" value={5} />
                            <Picker.Item label="6" value={6} />
                            <Picker.Item label="7" value={7} />
                            <Picker.Item label="8" value={8} />
                            <Picker.Item label="9" value={9} />
                            <Picker.Item label="10" value={10} />
                            <Picker.Item label="11" value={11} />
                            <Picker.Item label="12" value={0} />
                        </Picker>
                    </View>

                    <View style={styles.men205}>
                        {/*/Min---------------Min------------------Min------------------*/}
                        <Picker
                            selectedValue={this.state.minute}
                            onValueChange={(minuteSelect) => this.setState({minute: minuteSelect})}
                        >
                            <Picker.Item label="00" value={0} />
                            <Picker.Item label="05" value={5} />
                            <Picker.Item label="10" value={10} />
                            <Picker.Item label="15" value={15} />
                            <Picker.Item label="20" value={20} />
                            <Picker.Item label="25" value={25} />
                            <Picker.Item label="30" value={30} />
                            <Picker.Item label="35" value={35} />
                            <Picker.Item label="40" value={40} />
                            <Picker.Item label="45" value={45} />
                            <Picker.Item label="50" value={50} />
                            <Picker.Item label="55" value={55} />
                        </Picker>
                    </View>

                    <View style={styles.men205}>
                        {/*/Am ---------------Pm----------------Am-------------------Pm------*/}
                        <Picker
                            selectedValue={this.state.AP}
                            onValueChange={(APSelect) => this.setState({AP: APSelect})}
                        >
                            <Picker.Item label="AM" value={0} />
                            <Picker.Item label="PM" value={12} />
                        </Picker>
                    </View>
                </View>

                <View style={styles.men206}>
                    <Text style={styles.TimeSelect2}>
                        For How long ?
                    </Text>
                </View>

                <View>
                    {/*/Meet period-----------------meet period-----------------------------------*/}
                    <Picker
                        selectedValue={this.state.period}
                        onValueChange={(periodSelect) => this.setState({period: periodSelect})}
                    >
                        <Picker.Item label="5 Minutes" value="5 Minutes" />
                        <Picker.Item label="10 Minutes" value="10 Minutes" />
                        <Picker.Item label="15 Minutes" value="15 Minutes" />
                        <Picker.Item label="20 Minutes" value="20 Minutes" />
                        <Picker.Item label="25 Minutes" value="25 Minutes" />
                        <Picker.Item label="30 Minutes" value="30 Minutes" />
                        <Picker.Item label="35 Minutes" value="35 Minutes" />
                        <Picker.Item label="40 Minutes" value="40 Minutes" />
                        <Picker.Item label="45 Minutes" value="45 Minutes" />
                        <Picker.Item label="50 Minutes" value="50 Minutes" />
                        <Picker.Item label="55 Minutes" value="55 Minutes" />
                        <Picker.Item label="1 hour" value="1 Hour" />
                    </Picker>
                </View>

                <View style={styles.men207}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Next         >
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
        TimeSelect1: {
            fontSize: 24,
            alignItems: 'center',
            justifyContent: "center",
            color: 'white'
        },
        TimeSelect2: {
            fontSize: 24,
            color: "white",
            alignItems: 'center',
            justifyContent: "center"
        },
        button: {
            backgroundColor: "#4cb712",
            height: 60,
            paddingHorizontal: 15,
            marginVertical: 15,
            alignItems: "center",
            justifyContent: "center"
        },
        buttonText: {
            color: "#FFF",
            fontSize: 30,
        },
        men201: {
            backgroundColor: 'white'
        },
        men202: {
            alignItems: 'center',
            backgroundColor: '#3a3c3f',
            marginTop: 25,
            height: 45,
            justifyContent: 'center'
        },
        men203: {
            flexDirection: 'row'
        },
        men204: {
            flex: 3,
            height: 210
        },
        men205: {
            flex: 1
        },
        men206: {
            alignItems: 'center',
            backgroundColor: '#3a3c3f',
            height: 45,
            justifyContent: 'center'
        },
        men207: {
            marginTop: 30,
            paddingHorizontal: 20
        }
    }
);

module.exports = Mentor2;

