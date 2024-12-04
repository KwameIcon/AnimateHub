import { useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './pages/homescreen';

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

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark');
    }
  })




  return (
    <div className="w-screen dark:bg-black dark:text-white min-h-screen flex flex-col items-center justify-center">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
