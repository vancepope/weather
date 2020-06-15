import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchInput() {
    return (
        <TextInput 
            autoCorrect={false}
            placeholder='Search any city'
            placeholderTextColor='white'
            style={styles.textInput}
            clearButtonMode='always'
        />
    );
}
const styles = StyleSheet.create({
    textInput: {
      backgroundColor: '#666', 
      color: 'white',
      height: 40,
      width: 300,
      marginTop: 20, 
      marginHorizontal: 20, 
      paddingHorizontal: 10, 
      alignSelf: 'center',
      borderStyle: 'solid',
      borderColor: '#fff',
      borderRadius: 10,
    },
  });
  