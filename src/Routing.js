import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={CourseList} />
        <Route path="/courses/:id" component={CourseDetails} />
        <Route path="/login" component={LoginForm} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
