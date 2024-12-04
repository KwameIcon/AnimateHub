import { useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './pages/homescreen';
import { ThemeButton } from './components/Commons/buttons';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen/>
  }
])


function App() {
  


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
    <div className="w-screen dark:bg-black dark:text-white min-h-screen flex flex-col items-center justify-center relative">

      <ThemeButton setDarkMode={setDarkMode} setLightMode={setLightMode} setSystemMode={setSystemMode}/>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
