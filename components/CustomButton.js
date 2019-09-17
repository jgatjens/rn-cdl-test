import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function CustomButton(props) {
  const {onPress, label, size, iconName, color} = props;
  return (
    <TouchableOpacity
        onPress={onPress}>
        <View style={styles.container}>
          <Ionicons
            name={iconName}
            size={size}
            color={color}
          />
          { label ? <Text style={styles.label}>{label}</Text> : null } 
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: 62,
    minHeight: 54,
    alignItems: 'center',
    marginTop: 10
  },
  label: {
    textAlign: 'center',
    color: Colors.textColor,
    textTransform: 'uppercase'
  }

});