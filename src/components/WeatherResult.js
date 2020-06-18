import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, KeyboardAvoidingView, ImageBackground, Dimensions, ActivityIndicator } from 'react-native';
import SearchInput from '../components/SearchInput';
import getImageForWeather from '../../utils/getImageForWeather';
import { AppContext } from '../context/AppContext';

export default function WeatherResult(props) {
    const [state, setState] = useContext(AppContext);
    return (
      <KeyboardAvoidingView>
         <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(state.weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View
            style={styles.detailsContainer}
          >
            <ActivityIndicator
              animating={state.loading}
              color="white"
              size="large"
            />

            {!state.loading && (
              <View>
                {state.error && (
                  <Text style={styles.smallText}>
                    Could not load weather, please try a different
                    city.
                  </Text>
                )}

                {!state.error && (
                    <View>
                        <Text style={styles.largeText}>{state.location}</Text>
                        <Text style={styles.smallText}>{state.weather}</Text>
                        <Text style={styles.largeText}>{state.temperature}</Text>
                    </View>
                )}
              </View>
            )}
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
  weatherBg: {
    backgroundColor: 'black',
    opacity: .15,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 10
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
