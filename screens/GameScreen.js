import React from 'react';
import { ScrollView, StyleSheet,
    Text, FlatList, Button, Alert, TouchableOpacity,
    View } from 'react-native';
import { MonoText } from '../components/StyledText';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Game1',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={{flex: 1}}>
              <Text style={styles.getStartedText}>This is the first game!</Text>
              <Text style={styles.getStartedText}>
                  Get Learning!
              </Text>
              <TouchableOpacity style={[styles.bluebutton, styles.gamebutton]} onPress={this.startGame1}
                      underlayColor="#fff">
                  <Text style={styles.buttontext}>Game 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.purplebutton, styles.gamebutton]} onPress={this.startGame2}
                      underlayColor="#fff">
                  <Text style={styles.buttontext}>Game 2</Text>
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
        backgroundColor:'#0000FF',
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
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
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
