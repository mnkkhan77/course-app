import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import LoginForm from './components/LoginForm';
import PaymentForm from './components/PaymentForm';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
