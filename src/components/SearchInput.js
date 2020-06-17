import React, { useContext } from 'react';
import { TextInput, StyleSheet, Alert } from 'react-native';
import { fetchLocationId, fetchWeather } from '../../utils/api';
import { AppContext } from '../context/AppContext';

export default function SearchInput() {
    const [state, setState] = useContext(AppContext);
    async function getWeather(event) {
        setState(state => ({...state, loading: true}));
        try {
            let woeId = await fetchLocationId(event.nativeEvent.text);
            if (!isNaN(woeId)) {
                let data = await fetchWeather(woeId);
                console.log(data)
                if (data !== undefined){
                    setState(state => ({...state, location: data.location, weather: data.weather, temperature: `${parseInt(data.temperature.toString())}˚`, loading: false, error: false}));
                }
            } else {
                setState(state => ({...state, loading: false, error: true}))
            }
        } catch (e) {
            setState(state => ({...state, error: true}))
        }
    }
    return (
        <TextInput 
            autoCorrect={false}
            placeholder='Search any city'
            placeholderTextColor='white'
            style={styles.textInput}
            clearButtonMode='always'
            onSubmitEditing={value => getWeather(value)}
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
  