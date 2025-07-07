import { useEffect, useState } from "react";

export default function MoodTheme() {
  const [currentTheme, setCurrentTheme] = useState<'morning' | 'midday' | 'evening'>('midday');

  useEffect(() => {
    const updateThemeBasedOnTime = () => {
      const hour = new Date().getHours();
      
      if (hour >= 6 && hour < 12) {
        setCurrentTheme('morning');
      } else if (hour >= 12 && hour < 18) {
        setCurrentTheme('midday');
      } else {
        setCurrentTheme('evening');
      }
    };

    updateThemeBasedOnTime();
    
    // Update theme every hour
    const interval = setInterval(updateThemeBasedOnTime, 3600000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Apply theme class to body
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${currentTheme}`);

    return () => {
      document.body.className = document.body.className.replace(/theme-\w+/g, '');
    };
  }, [currentTheme]);

  return null; // This component only manages theme, no visual output
}