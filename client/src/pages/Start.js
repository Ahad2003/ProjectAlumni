import React from "react";
import AuthRoute from '../util/AuthRoute';
import { AuthProvider } from "../context/auth";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import SinglePost from './SinglePost';
import './start.css';
import Logo from './assets/ben_logo.png';


function Start() {
  return (
    <>
      <Container>
        <div className='body'>
          <div className="left">
            <span>ALUMNI INTERACTION PLATFORM</span>
            <h1>BENNE<span>TT</span></h1>
            <img className='image' src="https://imageio.forbes.com/specials-images/imageserve/62380c71af36178f0f91f59d/0x0.jpg?format=jpg&width=1200" alt="img" />
            <h1 className='next'>GRAM</h1>
            <div className="but">
              <a href="/home" target="_blank">Get Started</a>
            </div>
          </div>
          <div className="right">
            <img src={Logo} alt="" />
          </div>
        </div>
      </Container>
      {/* <MenuBar />
          <Route exact path="/home" component={Home} />
          <Route path="/start" component={Start} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} /> */}
    </>
  );
}

export default Start;