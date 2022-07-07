import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/fonts/Akira-Expanded-Demo.otf';
import './assets/fonts/GRIFTER™Bold.otf';

import Header from './layout/header';
import Footer from './layout/footer';
import Home from './view/dashboard';
// import BusdHire from './view/hire';
import store from './redux/store';

import Styled from 'styled-components';
import { StyleWrapper } from './style';
import BG from './assets/images/bg.png'

// const StyleWrapper = Styled.div`
//   // background-image: url(${BG});
//   // background-position: bottom center;
//   // background-size: cover;
  
// `;

const Dashboard = () => {
  return (
    <>

    </>
  )
}

const App = () => {
  return (
      <StyleWrapper>
        <Provider store={store}>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/home" component={Home} /> */}
              {/* <Redirect to="/" component={Dashboard} /> */}
            </Switch>
            <Footer />  
          </Router>
          <ToastContainer />
        </Provider>
      </StyleWrapper>
  );
}

export default App;
