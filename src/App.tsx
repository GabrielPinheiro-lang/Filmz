import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { AppRoutes } from './Routes';
import { AppProvider } from './hooks';

function App () {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
      <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  )
}
export default App;

