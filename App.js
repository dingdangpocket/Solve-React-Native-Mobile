import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"//引入
import TabScreenA from "./android/app/src/pages/TabScreenA"//引入
import TabScreenB from "./android/app/src/pages/TabScreenB"//引入
import {createStackNavigator} from "@react-navigation/stack"//引入
const Stack=createStackNavigator()
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
const Tab=createBottomTabNavigator()
import {Provider} from "react-redux"
import {Store}from "./android/app/src/redux/store"
const App= () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{activeTintColor:"black",inactiveTintColor:"gray"}}
        screenOptions={({route})=>({
          tabBarIcon:({focused,size,color})=>{
            let icon;
            if(route.name==="首页"){
              console.log("?",icon);
              icon = focused ?
               (<Image source={ require('./android/app/src/static/addnote.png') } style={{ width: 30, height: 30, }}/>) :
               (<Image source={ require('./android/app/src/static/addnote.png') } style={{ width: 25, height: 25, }} />)
            }else if(route.name==="我的"){
              icon = focused ? 
              (<Image source={ require('./android/app/src/static/addnote.png') } style={{ width: 30, height: 30, }}/>) :
              (<Image source={ require('./android/app/src/static/addnote.png') } style={{ width: 25, height: 25, }} />)
            }
            return icon;
          }
        })}
      >
        <Tab.Screen name="首页" component={TabScreenA}/>
        <Tab.Screen name="我的" component={TabScreenB}/>
      </Tab.Navigator>
     </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({})
export default App;