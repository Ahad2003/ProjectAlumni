import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
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
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `newPath`; 
  //   navigate(path);
  // }
  return (
    <AuthProvider>
      <Router>
        <Container>
        <div className='body'>

          <div className="left">
            <span>ALUMNI INTERACTION PLATFORM</span>
            <h1>BENNE<span>TT</span></h1>
            <img className='image' src="https://imageio.forbes.com/specials-images/imageserve/62380c71af36178f0f91f59d/0x0.jpg?format=jpg&width=1200" alt="img" />
            <h1 className='next'>GRAM</h1>
          </div>
          <div className="but">
          <Button onClick={<Start/>}> Get Started </Button>
          </div>
          
          {/* <Start></Start> */}
        </div>
          {/* <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} /> */}
          
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
