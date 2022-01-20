import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'; //引入
const Stack = createStackNavigator();
const ScreenC = ({navigation, route}) => {
  const {name, id} = route;
  const [storageData, setSrorageData] = useState('');
  const setData = () => {
    navigation.setParams({id: 1, name: '林益'});
  };
  const getData = () => {};
  const go = () => {
    navigation.navigate('Screen_E', {name: '李华', id: '18'});
  };
  return (
    <View>
      <Text>tabC</Text>
      <Button title="gotoE" onPress={() => go()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ScreenC;
