import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Container, Header, Left, Button, Title} from 'native-base';
import HeaderExample from '../header/header-components';

interface ProfileDetail {
    navigation: any
}

export default class ProfileDetailComponent extends Component<ProfileDetail>{
    render() {
        return (
            <Container>
                <HeaderExample
                    navigation={this.props.navigation}
                />
            </Container>
        )
    }
}