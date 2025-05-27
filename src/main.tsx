import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { theme } from '@/theme/theme.ts'
import { App } from './App.tsx'
import { Provider } from 'react-redux';
import { store } from '@/storage/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
    </Provider>
  </StrictMode>,
)
