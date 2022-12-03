import React from "react";
import AuthRoute from '../util/AuthRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import SinglePost from './SinglePost';

function Start(){
    return(
        <>
        <MenuBar />
          <Route exact path="/" component={Home} />
          <Route path="/start" component={Start} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </>
    );
}

export default Start;