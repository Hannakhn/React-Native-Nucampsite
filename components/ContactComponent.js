import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Text} from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props);
    };
    static navigationOptions = {
        title: 'Contact Us'
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <Card title='Contact Information' wrapperStyle={{margin:20}}>
                        <Text>1 Nucamp Way</Text>
                        <Text>Seattle, WA 98001</Text>
                        <Text style={{ marginBottom: 10 }}>U.S.A</Text>
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                    </Card>
                </View>
            </ScrollView>
        );
    };
}

export default Contact;