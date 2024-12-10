import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/homescreen';
import { ThemeButton } from './components/Commons/buttons';




function App() {

  // states
  const [themeMode, setThemeMode] = useState("system");

  const setDarkMode = () => {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
  }

  const setLightMode = () => {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  }

  const setSystemMode = () => {
   const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
   if(isDarkMode) {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark');
   }else{
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
   }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if(theme) {
        if(theme === 'dark'){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark');
      }
    }else{
      setSystemMode();
    }
  })




  return (
    <Router>
      <div className="w-screen dark:bg-black dark:text-white min-h-screen flex flex-col items-center justify-start relative overflow-x-hidden scrollbar-none">
        <ThemeButton 
          setDarkMode={setDarkMode} 
          setLightMode={setLightMode} 
          setSystemMode={setSystemMode} 
          themeMode={themeMode} 
          setThemeMode={setThemeMode} 
        />
        <Routes>
          <Route path="/" element={<HomeScreen themeMode={themeMode} setThemeMode={setThemeMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
