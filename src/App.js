import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './pages/Home';
// import RegistrationForm from './components/forms/RegistrationForm';
import PreSchoolForm from './pages/PreSchoolForm';
import LowerPrimaryForm from './pages/LowerPrimaryForm';
import UpperPrimaryForm from './pages/UpperPrimaryForm';
import SecondaryForm from './pages/SecondaryForm';
import CollegeForm from './pages/CollegeForm';
import AdminLogin from './components/forms/AdminLogin';
import AdminPanel from './admin/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<RegistrationForm />} /> */}
        <Route path="/pre-school" element={<PreSchoolForm />} />
        <Route path="/lower-primary" element={<LowerPrimaryForm />} />
        <Route path="/upper-primary" element={<UpperPrimaryForm />} />
        <Route path="/secondary" element={<SecondaryForm />} />
        <Route path="/college" element={<CollegeForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<ProtectedRoute element={<AdminPanel />} />} />
      </Routes>
    </Router>
  );
};

export default App;
