import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function WeatherResult() {
    const [state, setState] = useContext(AppContext);
    return (
            <View
                style={styles.container}
            >
            {state.error && (
                <View>
                    <Text style={styles.largeText}>Not found, please try again.</Text>
                </View>
            )}

            {!state.error && (
                <View>
                    <Text style={styles.largeText}>{state.location}</Text>
                    <Text style={styles.smallText}>{state.weather}</Text>
                    <Text style={styles.largeText}>{state.temperature}</Text>
                </View>
            )}
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  largeText: {
    textAlign: 'center',
    fontSize: 44,
    color: '#fff',
    opacity: 1
  },
  smallText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    opacity: 1
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
