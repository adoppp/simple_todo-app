import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material'

import { App } from '@/App.tsx'
import { store } from '@store/store.ts';
import { theme } from '@/theme/theme.ts'

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
