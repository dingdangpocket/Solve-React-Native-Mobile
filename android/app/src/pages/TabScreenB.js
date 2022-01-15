import React,{useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"//引入
const Stack=createStackNavigator()


import MainPage from "./MainPage"//引入
import ScreenE from "./ScreenE"//引入
import { Value } from 'react-native-reanimated';

const ScreenB = ({ navigation,route}) => {
    // const {name,id}=route.params
    const [storageData,setSrorageData]=useState("")
    const go=()=>{
        navigation.openDrawer()
    }
    const setData=()=>{
        navigation.setParams({id:1,name:"林益"})
    }
    const getData=()=>{
        // AsyncStorage.getItem("user").then(value=>{
        //     setSrorageData(value)
        // })
    }
    const goToC=()=>{
        navigation.navigate("MainPage",{name:"李华",id:"18"})
    }
    return (
            <Stack.Navigator>
                <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={{header:()=>null}}//清除导航;
                />
                 <Stack.Screen
                name="Screen_E"
                component={ScreenE}
                />
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
export default ScreenB;