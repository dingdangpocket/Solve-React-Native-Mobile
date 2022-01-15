import React,{useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';


const ScreenE = ({ navigation,route}) => {
    const {name,id}=route.params   
    return (
        
        <View>
            <Text>E页面{id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})
export default ScreenE;