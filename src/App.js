import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './pages/Home'

import PreSchoolForm from './pages/PreSchoolForm';
import LowerPrimaryForm from './pages/LowerPrimaryForm';
import UpperPrimaryForm from './pages/UpperPrimaryForm';
import SecondaryForm from './pages/SecondaryForm';
import CollegeForm from './pages/CollegeForm';
import AdminPanel from './admin/AdminPanel';
import Primary from './pages/primary/Primary';
import Pre from './pages/preSchool/Pre';
import AdminLogin from './components/forms/AdminLogin';


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/pre" element={<Pre/>} />
        <Route path="/preSchoolForm" element={<PreSchoolForm/>} />
        <Route path='/primary' element={<Primary/>}/>
        <Route path="/lower-primary" element={<LowerPrimaryForm />} />
        <Route path="/upper-primary" element={<UpperPrimaryForm />} />
        <Route path="/secondary" element={<SecondaryForm />} />
        <Route path="/college" element={<CollegeForm />} />
      
      </Routes>
    </Router>
  );
};

export default App;
