import { useEffect } from 'react';
import { useLocation } from 'wouter';

// This component simply redirects users to the /static route when they visit the root
export default function Redirector() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to /static after a brief delay
    setTimeout(() => {
      setLocation('/static');
    }, 100);
  }, [setLocation]);

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Portfolio...</h1>
        <p className="text-muted-foreground">Redirecting to the portfolio page...</p>
      </div>
    </div>
  );
}