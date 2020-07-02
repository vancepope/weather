import React from 'react';
import { AppProvider } from './src/context/AppContext';
import WeatherResult from './src/components/WeatherResult';

export default function App(props) {
  return (
    <AppProvider>
      <WeatherResult {...props} />
    </AppProvider>
  );
}
