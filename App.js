import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import allReducers from './Redux/Reducers'; // Ensure this path is correct
import AppNavigator from './navigation/AppNavigator'; // Ensure this path is correct
import { VerifyProvider } from './Context/VerifyContext';

const store = configureStore({
  reducer: allReducers,
});

const App = () => {
  return (
    <Provider store={store}>
      <VerifyProvider>
        <AppNavigator />
      </VerifyProvider>
    </Provider>
  );
};

export default App;
