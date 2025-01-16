import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeButton } from './components/Commons/buttons';
import { About, Contact, HomeOneScreen, HomeTwoScreen, ProjectDetails, Projects, Service, ServiceTwo } from './pages';
import { Pricing, Teams, Testimonials } from './pages/pages';
import FAQs from './pages/pages/FAQS';
import Blog from './pages/Blog/Blog';




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
      <main className="w-screen dark:bg-ebony dark:text-white min-h-screen flex flex-col items-center justify-start relative overflow-x-hidden scrollbar-none">
        <ThemeButton 
          setDarkMode={setDarkMode} 
          setLightMode={setLightMode} 
          setSystemMode={setSystemMode} 
          themeMode={themeMode} 
          setThemeMode={setThemeMode} 
        />
        <Routes>
          <Route path="/" element={<HomeOneScreen themeMode={themeMode} setThemeMode={setThemeMode} />} />
          <Route path="/home-two" element={<HomeTwoScreen themeMode={themeMode} />} />
          <Route path="/about" element={<About themeMode={themeMode} />} />
          <Route path="/service/" element={<Service themeMode={themeMode} />} />
          <Route path="/service/single" element={<ServiceTwo themeMode={themeMode} />} />
          <Route path="/projects/" element={<Projects themeMode={themeMode} />} />
          <Route path="/projects/single" element={<ProjectDetails themeMode={themeMode} />} />
          <Route path="/testimonials/" element={<Testimonials themeMode={themeMode} />} />
          <Route path="/teams/" element={<Teams themeMode={themeMode} />} />
          <Route path="/pricing/" element={<Pricing themeMode={themeMode} />} />
          <Route path="/faqs/" element={<FAQs themeMode={themeMode} />} />
          <Route path="/contact/" element={<Contact themeMode={themeMode} />} />
          <Route path="/blog/" element={<Blog themeMode={themeMode} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
