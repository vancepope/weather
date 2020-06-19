import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, KeyboardAvoidingView, ImageBackground, Dimensions, ActivityIndicator } from 'react-native';
import SearchInput from '../components/SearchInput';
import getImageForWeather from '../../utils/getImageForWeather';
import { AppContext } from '../context/AppContext';
import CityWeather from '../components/CityWeather';

export default function WeatherResult() {
    const [state, setState] = useContext(AppContext);
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior='padding'
      >
        <StatusBar 
            barStyle="light-content" 
        />
        <ImageBackground
            source={getImageForWeather(state.weather)}
            style={styles.imageContainer}
            imageStyle={styles.image}
        >
          <View
            style={styles.detailsContainer}
          >
            <View
                style={styles.display}
            >
                {!state.loading ? 
                    ( <CityWeather /> ) : 
                    (<ActivityIndicator
                        animating={state.loading}
                        color="white"
                        size="large"
                    />)
                }
            </View>
            <View 
                style={{flex: 1, flexDirection: 'column'}} 
            >
                <SearchInput />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
  },
  display: { 
      flex: -3, 
      flexDirection: 'row', 
      flexBasis: '25%', 
      minHeight: '25%', 
      minWidth: '100%',
      backgroundColor: '#000', 
      opacity: .3, 
      borderRadius: 10, 
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: 150
  },
  largeText: {
    textAlign: 'center',
    fontSize: 44,
  },
  smallText: {
    textAlign: 'center',
    fontSize: 18,
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
        fontSize: 50,
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 50
      },
    }),
  },
  detailsContainer: {
    width: Math.round(Dimensions.get('window').width), 
    height: Math.round(Dimensions.get('window').height), 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.2)', 
    paddingHorizontal: 20,
    paddingTop: 100
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
