import React from 'react';
import { ScrollView, StyleSheet,
    Text, FlatList, Button, Alert, TouchableOpacity, Image,
    View } from 'react-native';
import { MonoText } from '../components/StyledText';
import GameScreen from "./GameScreen";
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Games',
  };


  render() {
      const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
          <View style={{flex: 1}}>
              <Text style={styles.getStartedText}>Get started by selecting one of the options below!</Text>
              <Text style={styles.getStartedText}>
                  Get Learning!
              </Text>
              <TouchableOpacity style={[styles.bluebutton, styles.gamebutton]} onPress={this.startGame1}
                      underlayColor="#fff">
                  <Image
                      source={require('../assets/images/icon.png')}
                      style={styles.leftgameicon}
                  />
                  <View
                      style={{
                          borderLeftWidth: 1,
                          borderLeftColor: 'white',
                          position: 'absolute',
                          left: 40
                      }}
                  />
                  <Text style={styles.buttontext}>Game 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.purplebutton, styles.gamebutton]} onPress={() => navigate('Game1')}
                      underlayColor="#fff">
                  <Text style={styles.buttontext}>Game 2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.unavailablebutton, styles.gamebutton]}
                                underlayColor="#fff">
                  <Text style={styles.buttontext}>Game 3 Coming Soon!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.unavailablebutton, styles.gamebutton]}
                                underlayColor="#fff">
                  <Text style={styles.buttontext}>Game 4 Coming Soon!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.unavailablebutton, styles.gamebutton]}
                                underlayColor="#fff">
                  <Text style={styles.buttontext}>Game 5 Coming Soon!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.unavailablebutton, styles.gamebutton]}
                                underlayColor="#fff">
                  <Text style={styles.buttontext}>Game 6 Coming Soon!</Text>
              </TouchableOpacity>

          </View>
      </ScrollView>
    );
  }

  startGame1() {
      //Do nothing for now

      Alert.alert('You tapped on game1!')
  }
  startGame2() {
      //Do nothing for now
      Alert.alert('You tapped on game2!')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
    gamebutton: {
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        height: 75
    },
    purplebutton:{
        backgroundColor:'purple',
    },
    bluebutton:{
        backgroundColor:'#0000FF'
    },
    unavailablebutton: {
        backgroundColor:'#BBB'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    leftgameicon: {
        position: 'absolute',
        width: 35,
        height: 35,
        top: 17,
        left: 17,
        resizeMode: 'contain',
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    buttontext: {
        fontSize: 17,
        color: 'rgba(256,256,256, 1)',
        lineHeight: 24,
        textAlign: 'center',
        top: 17,
    },

});
