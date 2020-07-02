import React, { useState, createContext } from 'react';
const AppContext = createContext([{}, () => {}]);
const AppProvider = (props) => {
	const [state, setState] = useState({
        location: 'San Diego',
        weather: 'Clear',
        temperature: '70˚',
        abbr: 'c',
        loading: false,
        error: false,
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };