import React from "react";
import NavigationRoutes from "./routes/NavigationRoutes";
import { ThemeProvider } from "./context/ThemeContext"; // Import your ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Wrap your app with ThemeProvider */}
      <div className="Body text-white">
        <NavigationRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
