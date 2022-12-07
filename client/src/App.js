import React from 'react';
import { NavLink } from 'react-router-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Link } from "react-router-dom";
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import Start from './pages/Start';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/" component={Start} />
        <Route exact path="/home" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/posts/:postId" component={SinglePost} />
      </Router>
    </AuthProvider>
  );
}

export default App;
