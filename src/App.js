import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import SignupPage from './pages/signuppage/SignupPage';
import { useEffect, useState } from 'react';

function App() {
  const [scrolling, setScrolling] = useState(false);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
    
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [scrolling]);

 
  return (
    <Routes>
      <Route path='/' element={<HomePage scrolling={scrolling} setScrolling={setScrolling} />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  );
}

export default App;
