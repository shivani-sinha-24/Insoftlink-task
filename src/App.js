import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage'
import SignupPage from './pages/signuppage/SignupPage'
import { useEffect } from 'react';

function App() {
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
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<SignupPage/>} />
    </Routes>
  );
}

export default App;
