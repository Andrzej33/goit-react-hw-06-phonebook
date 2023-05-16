import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { store,persistor } from './Redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';



const theme = {
  colors: {
    text: 'black',
    active: 'green',
    passive: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <button>jkhjkhkhkhj</button> */}
      <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* <button>jkhjkhkhkhj</button> */}
      {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
