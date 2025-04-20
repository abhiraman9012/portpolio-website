import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "next-themes";
import './index.css';

// Redirect component that immediately sends users to the static version
function RedirectApp() {
  React.useEffect(() => {
    window.location.href = '/static';
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Portfolio...</h1>
        <p className="text-muted-foreground">Redirecting to the portfolio page...</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <RedirectApp />
    </ThemeProvider>
  </React.StrictMode>,
);