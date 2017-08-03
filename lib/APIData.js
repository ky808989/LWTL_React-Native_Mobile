import React, {Component} from 'react';
import {
    AsyncStorage,
    AlertIOS,
} from 'react-native';
/**
 * Created by po-yingyu on 2017-05-18.
 * Component is used for grab data back from the api server
 * Required:
 * token_key has been stored when user login
 * storage_key decides where should the api storage at the Internal
 *
 * The JSon data would transfer to String type before it is stored
 */

class APIData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token_key: '',
            storage_key: '',
            url:''
        }
    }

    async getAPIdata(TOKEN, STAORAGEKEY) {
        var DEMO_TOKEN = await AsyncStorage.getItem(TOKEN);

        fetch(this.state.url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + DEMO_TOKEN
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                AsyncStorage.setItem(STAORAGEKEY, JSON.stringify(responseJson));

            })
            .catch((error) => {
                console.error(error);
            });
    };


    render() {


    }
}

module.exports = APIData;