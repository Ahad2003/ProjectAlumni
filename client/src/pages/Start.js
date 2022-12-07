import React from "react";
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import AuthRoute from '../util/AuthRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react'
import MenuBar from '../components/MenuBar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import SinglePost from './SinglePost';
import './start.css';

function Start() {
  return (

    <div className="app">
      <Container fluid>
        {/* <Header as='h2'>Dogs Roles with Humans</Header> */}
        <div className="left">
          <span>ALUMNI INTERACTION PLATFORM</span>
          <h1>BENNE<span>TT</span></h1>
          <img className='image' src="https://imageio.forbes.com/specials-images/imageserve/62380c71af36178f0f91f59d/0x0.jpg?format=jpg&width=1200" alt="img" />
          <h1 className='next'>GRAM</h1>
        </div>
        <div className="but">
          <a href="/home" target="_blank">Get Started</a>
          {/* <NavLink to="/home">Get Started</NavLink> */}
        </div>
      </Container>

    </div>
  );
}

export default Start;