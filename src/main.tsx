import React from 'react';
import ReactDOM from 'react-dom/client';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { Provider } from 'react-redux';
import App from './components/app';
import { store } from './store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },
    background: {
      default: '#ffffef',
    },
    secondary: {
      main: '#00bcd4',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
