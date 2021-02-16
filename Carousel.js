import React, { Component } from 'react';

import { View, Dimensions } from 'react-native';

import { SliderBox } from 'react-native-image-slider-box';

const height = Dimensions.get('window').height; //full height
const width = Dimensions.get('window').width; //full width


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../../assets/images/a.jpg'),          // Local image
        require('../../../assets/images/b.jpg'),          // Local image
      ]
    };
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width
    });
  };



render() {
  return (
    <View style={{ flex: 1 }} onLayout={this.onLayout}>
      <SliderBox
        images={this.state.images}
        sliderBoxHeight={300}
        onCurrentImagePressed={index =>
          console.warn(`image ${index} pressed`)
        }
        parentWidth={this.state.width}
      />
    </View>
  );
}
};