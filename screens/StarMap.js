import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';

export default class SpaceCraftScreen extends Component {
  render() {
            const { longitude, latitude } = this.state;
            const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`;

    return (

      <View
        style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
        <Text>Star Map Screen!</Text>

        <WebView
            scalesPageToFit={true}
            source={{uri:path}}
            style={{marginTop: 20, marginBottom:20}}
        />
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth:1}}
            placeholder = "Enter your latitude"
            placeholderTextColor="ffff#000000"
            onChangeText={(text)=>{
                this.setState({
                    latitude:text
                })
            }}
        />


      </View>
    );
  }
}
