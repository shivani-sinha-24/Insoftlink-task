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
    try{
      // Add the Google Translate script when the component mounts
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        // // Clean up the script when the component unmounts
        // return () => {
        //   document.body.removeChild(addScript);
        //   delete window.googleTranslateElementInit;
        // }
    }
    catch(err){
      console.log(err)
    }
    
  }, [scrolling]);
  useEffect(() => {
    try {
        // Function to handle the scroll event
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
    } catch (error) {
      console.log(error)
    }
  }, [scrolling]);

 
  return (
    <Routes>
      <Route path='/' element={<HomePage scrolling={scrolling} setScrolling={setScrolling} />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  );
}

export default App;
