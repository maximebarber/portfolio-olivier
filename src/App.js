import React from "react";
import "./App.css";
import {ThemeProvider} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";
import theme from "./theme";

function App() {
  console.log("Theme: ", theme);
  // const { primary, secondary } = theme.palette;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Container maxWidth="lg">
          <Header />
          <Bio />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
