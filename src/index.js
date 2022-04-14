import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";
import {createTheme,ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette:{
        mode:"light",
        primary: {
                main: '#009688',
              },
        
    }
})

ReactDom.render(
    <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider theme={theme}><App/></ThemeProvider></BrowserRouter>
        
    </React.StrictMode>,document.getElementById("root")
)