import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Container, Header, Left, Button, Title } from 'native-base';

interface HeaderNavigationProps{
  navigation: any
}

export default class HeaderExample extends Component <HeaderNavigationProps>{
  render() {
    return (
        <Header >
          <Left>
              <Button onPress={()=>this.props.navigation.navigate('Home')} style={styles.textContent} transparent><Text style={styles.textContent}> Hot </Text></Button>
          </Left>
          <Left>
              <Button onPress={()=>this.props.navigation.navigate('Home')} style={styles.textContent} transparent><Text style={styles.textContent}> New </Text></Button>
          </Left>
          <Left>
              <Button onPress={()=>this.props.navigation.navigate('Home')} style={styles.textContent} transparent><Text style={styles.textContent}> Fav </Text></Button>
          </Left>
          <Left>
              <Button onPress={()=>this.props.navigation.navigate('Home')} style={styles.textContent} transparent><Text style={styles.textContent}> Top </Text></Button>
          </Left>
          <Left >
          <Button onPress={()=>this.props.navigation.navigate('Profile')} transparent >
            <Text style={styles.textContent}> Profile </Text>
          </Button>
          </Left>
        </Header>
    );
  }
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: "black",
        textAlign: 'center',
    },
    textContent: {
      fontSize: 16,
      marginLeft: 3,
    },
  });