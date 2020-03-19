import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  classes: [
    { id: 1, code: 'CSIT111', credit: 6, mark: 87 },
    { id: 2, code: 'CSIT111', credit: 6, mark: 87 },
    { id: 3, code: 'CSIT111', credit: 6, mark: 87 },
    { id: 4, code: 'CSIT111', credit: 6, mark: 87 }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Profider component wraps all the jsx stuff in App.js
export const GlobalProvider = ({ children }) => {
  //reducer used here
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        classes: state.classes
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
