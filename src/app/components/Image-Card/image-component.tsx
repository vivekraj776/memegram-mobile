import React, {Component} from 'react';
import {Image, ImageProps} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';
import HeaderExample from '../header/header-components';
import {ImageComponentProps} from './image.component.props';
import {ImageState} from './image.component.state';
import axios from 'axios';
import Config from 'react-native-config';
import {ImageServiceImpl} from '../../services/image/image.service.impl';
import _ from 'lodash';


export default class CardShowcaseExample extends Component<ImageComponentProps, ImageState>{
  constructor(props: ImageComponentProps) {
    super(props);
    this.state = {
      imageState: [],
    };
  }
  componentDidMount() {
    this.getImages();
  }

  getImageServices() {
    return this.props.imageService;
  }


  async getImages() {
    const res = await axios.get(`http://10.0.2.2:8080/getImages`);
    this.setState({
      imageState: res.data
    })
  }

  render() {
    const {imageState} = this.state;
    let key = 0;
    let imageData: any[] = [];
    if(imageState !== undefined){
      _.forEach(imageState , (element1: any) => {
        _.forEach(element1.imageUrl , (element: any)=>{
          imageData.push(
            <Card key= {key++} style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: (element)}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: (element)}} style={{height: 200, width: 370, flex: 1}} />
                  <Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button onPress={() => this.props.navigation.navigate('Profile')} transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          );
        })
      })
    }
    return (
      <Container>
        <HeaderExample
          navigation={this.props.navigation}
        />
        <Content>
        {imageData}
        </Content>
      </Container>
    );
  }
}