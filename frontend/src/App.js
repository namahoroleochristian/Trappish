import React from "react";
import NavigationRoutes from "./routes/NavigationRoutes";
import { ThemeProvider } from "./context/ThemeContext"; 

function App() {
  return (
    <ThemeProvider> 
      <div className="Body text-white">
        <NavigationRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
