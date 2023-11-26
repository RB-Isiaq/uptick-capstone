'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import QueryProvider from '../QueryClient';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryProvider>{children}</QueryProvider>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
