import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  classes: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component wraps all the jsx stuff in App.js
export const GlobalProvider = ({ children }) => {
  //reducer used here
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteSubject(id) {
    dispatch({
      type: 'DELETE_SUBJECT',
      payload: id
    });
  }

  function addSubject(subject) {
    dispatch({
      type: 'ADD_SUBJECT',
      payload: subject
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        classes: state.classes,
        deleteSubject,
        addSubject
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
