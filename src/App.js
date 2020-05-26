import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import theme from './theme';

function App() {
  console.log('Theme: ', theme);
  // const { primary, secondary } = theme.palette;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Container maxWidth="lg">
          <Home />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
