import React from 'react';
import { View, TouchableOpacity, Text }
  from 'react-native';

import * as Animatable from 'react-native-animatable';
import
  {
    Image,
  } from 'react-native';

import styles from './styles';

export default function TaskList({ data, handleDelete }) {
  return (
    <Animatable.View
      style={styles.container}
      useNativeDriver
      animation="bounceIn"
      duration={1500}
    >
      <TouchableOpacity onPress={() => handleDelete(data)}>
        {/* <Ionicons
          name="md-checkmark-circle"
          size={30}
          color="#6ab202"
        /> */}
        <Image
          source={require('../../assets/check.png')}
        /> 
      </TouchableOpacity>

      <View>
        <Text style={styles.task}>{ data.task }</Text>
      </View>
    </Animatable.View>
  );
};