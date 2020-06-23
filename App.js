import React from "react";
import { ThemeProvider } from "@chakra-ui/core";

const App = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

export default App;