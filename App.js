import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import OptionsScreen from './src/Components/OptionsScreen';
import TopupScreen from './src/Components/TopupScreen';
import ThankScreen from './src/Components/ThankScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'British Gas',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={require('./images/bg.png')}/>
        <Text style={styles.text}>Please login</Text>

        <TextInput style={styles.textinput} placeholder={'Username'} placeholderTextColor={"rgba(198,198,204,1)"}/>
        <TextInput style={styles.textinput} placeholder={'Password'} placeholderTextColor={"rgba(198,198,204,1)"}secureTextEntry ref={(input) => this.passwordInput = input}/>

      <TouchableHighlight onPress={() => navigate('Options')} style={styles.touch}>
                      <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>


      </View>
    );
  }
}

const ReactNavApp = StackNavigator({
    Home: { screen: HomeScreen },
    Options: { screen: OptionsScreen },
    Topup: {screen: TopupScreen},
    Thank:{screen:ThankScreen},
});


const styles = StyleSheet.create({
  pic: {
    flexGrow:1,
    width:350,
    height:270,
    alignSelf:'center',
    flexBasis:'27%',
    marginBottom:50,
  },
  textinput: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 65,
      height: 20,
      width: 250,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.5)"
    },

    text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
container:{
  alignItems:'center',
  justifyContent:'center',
  marginTop:100,
},
touch:{
  height:35,
  width:250,
  backgroundColor:'#7CE157',
  justifyContent:'center',
  marginTop:20,
},
buttonText:{
  flex:1,
  color:'white',
  fontSize:15,
  fontWeight:"400",
  alignSelf:'center',
  justifyContent:'center',
},



})

AppRegistry.registerComponent('ReactNavApp', () => ReactNavApp);
