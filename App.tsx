import React from 'react';
import {AppLoading} from 'expo';
import {Container, Text} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import AppNavigator from './src/app/navigator/app-navigator';
import {ImageService} from './src/app/services/image/image.service';
import {ImageServiceImpl} from './src/app/services/image/image.service.impl';

export default class App extends React.Component {
  imageService: ImageService | undefined;
  constructor(props: any) {
    super(props);
    this.imageService = new ImageServiceImpl();
  }
  state = {
    isReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <AppNavigator></AppNavigator>
      </Container>
    );
  }
}
