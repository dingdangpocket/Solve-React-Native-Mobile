
import React,{useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput
  } from 'react-native';
import {useSelector,useDispatch} from "react-redux";
import {useEffect}from "react"
import {setName,getData} from "../redux/actions"
import HomePage from "./HomePage"//引入
import ScreenG from "./ScreenG"//引入
import {createStackNavigator} from "@react-navigation/stack"//引入
const Stack=createStackNavigator()

const ScreenA = ({navigation}) => {
    const [name2,SetName2]=useState("")
    const {name,data}=useSelector(state=>state.userReducer)
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getData())//进页面调action请求函数;
      },[]);
    
    const setRedux=()=>{
        dispatch(setName("Redux新名字"))
    }
    const go=()=>{
        navigation.navigate("HomePage",{name:"李华",id:"18"})
    }
    const saveData=async()=>{
    //    await AsyncStorage.setItem("user",name)
       navigation.navigate("Screen_B")
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage}  options={{header:()=>null}}/>
            <Stack.Screen name="Screen_G" component={ScreenG}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})
export default ScreenA;


