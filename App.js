import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,TextInput,Image} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import login from './screens/loginScreen';
import TabNavigator from './components/TabNavigator'
export default class App extends React.Component{
  render(){
    return(

<AppContainer/>


    
    )
}
}
const switch1=createSwitchNavigator({
  
  logIn:{screen:login},
  BottomTab:{screen:TabNavigator}
 

})
const AppContainer =  createAppContainer(switch1);