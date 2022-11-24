import React from "react";
import AuthRoute from '../util/AuthRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import MenuBar from '../components/MenuBar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SinglePost from '../pages/SinglePost';

function Start(){
    return(
        <>
        <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </>
    );
}

export default Start;