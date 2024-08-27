import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './pages/Home'
import Login from './components/forms/Login';
import RegistrationForm from './components/forms/RegistrationFormorms';
import PreSchoolForm from './pages/PreSchoolForm';
import LowerPrimaryForm from './pages/LowerPrimaryForm';
import UpperPrimaryForm from './pages/UpperPrimaryForm';
import SecondaryForm from './pages/SecondaryForm';
import CollegeForm from './pages/CollegeForm';
import AdminPanel from './admin/AdminPanel';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/pre-school" element={<PreSchoolForm />} />
        <Route path="/lower-primary" element={<LowerPrimaryForm />} />
        <Route path="/upper-primary" element={<UpperPrimaryForm />} />
        <Route path="/secondary" element={<SecondaryForm />} />
        <Route path="/college" element={<CollegeForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
