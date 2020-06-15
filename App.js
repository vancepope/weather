import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput } from 'react-native';
import SearchInput from './src/components/SearchInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText, styles.textStyle}>San Diego</Text>
      <Text style={styles.smallText, styles.textStyle}>Sunny</Text>
      <Text style={styles.smallText, styles.textStyle}>70°</Text>
      <SearchInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
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
