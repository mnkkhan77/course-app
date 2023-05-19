import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={CourseList} />
          <Route path="/courses/:id" component={CourseDetails} />
          <Route path="/login" component={LoginForm} />
          {/* Add more routes as needed */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
