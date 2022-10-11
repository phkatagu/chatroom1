import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './component/login-page';
import MainPage from './component/main-page';
import Forgotpassword from './component/Forgotpassword';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/main-page' element={<MainPage/>} />
      <Route path='/Forgotpassword' element={<Forgotpassword/>} />
    </Routes>
  </Router>
);



