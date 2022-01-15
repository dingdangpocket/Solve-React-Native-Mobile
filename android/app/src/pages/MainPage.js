import React,{useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';


const ScreenC = ({ navigation,route}) => {
    // const {name,id}=route.params   
    const go=()=>{
        navigation.navigate("Screen_E",{name:"李华",id:"18"})
    }
    return (
        
        <View>
            <Text>我的</Text>
            <Button title="gotoE" onPress={()=>go()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})
export default ScreenC;