import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';
import SearchInput from '../components/SearchInput';
import getImageForWeather from '../../utils/getImageForWeather';
import { AppContext } from '../context/AppContext';

export default function WeatherResult(props) {
    const [state, setState] = useContext(AppContext);
    return (
      <KeyboardAvoidingView>
        <ImageBackground
          source={getImageForWeather(state.weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View
            style={styles.detailsContainer}
          >
            <Text style={styles.largeText, styles.textStyle}>{state.location}</Text>
            <Text style={styles.largeText, styles.textStyle}>{state.weather}</Text>
            <Text style={styles.largeText, styles.textStyle}>{state.temperature}</Text>
            <SearchInput />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
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
  detailsContainer: {
    width: Math.round(Dimensions.get('window').width), 
    height: Math.round(Dimensions.get('window').height), 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.2)', 
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
  }, 
  image: {
    width: Math.round(Dimensions.get('window').width), 
    height: Math.round(Dimensions.get('window').height), 
    resizeMode: 'cover',
  },
});
