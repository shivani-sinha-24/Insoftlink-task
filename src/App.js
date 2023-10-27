import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/homepage/Homepage';
import Layout from './Layout/Layout';
import SignupPage from './pages/signuppage/SignupPage';
import PostPage from './pages/postpage/PostPage';

function App() {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation()

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
  }, [scrolling, location.pathname]);

 
  return (
    <Routes>
      <Route path='/' element={<HomePage scrolling={scrolling} setScrolling={setScrolling} />} />
      <Route path='/' element={<Layout/>}>
        <Route path='signup' element={<SignupPage />} />
        <Route path='post' element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
