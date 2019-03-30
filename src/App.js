import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import './App.css';
import LandingPage from './Components/LandingPage';
import Product1Landing from './Components/Product1Landing';
import Dashboard from './Components/Enterprise';
import SiteDashboard from './Components/SiteDashboard';
import Login from './Components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.Loader = this.SingleComponentLoader.bind(this);
  }
  //------------------------------------------------------------------------------------------------------------------------------
  // Function:
  //  Loader is an wrapper function.  You give it a parameter on whether to add the horizontal nav.
  SingleComponentLoader(withMainNav = true, component) {
    let loadElements = (
      <div className="App">
        <header>
          <Menu RenderMenu={withMainNav} />
        </header>
        <main role="main" className="unmargin">
          {component}
        </main>
        <Footer />
      </div>
    );

    return (loadElements);
  }

  //------------------------------------------------------------------------------------------------------------------------------
  // Delegate:
  //  This render method is required by the react library.
  render() {
    return (
      <Switch>
        <Route path="/products/thinkcyber/" render={() => { return (this.SingleComponentLoader(true, <Product1Landing />)); }} />
        <Route path="/enterprise/dashboard/" render={() => { return (this.SingleComponentLoader(true, <Dashboard
          tableName="Dashboard"
        />)); }} />
        <Route path="/enterprise/site-dashboard/" render={() => { return (this.SingleComponentLoader(true, <SiteDashboard
          tableName="site27"
        />)); }} />
        <Route path="/account/login/" render={() => { return (this.SingleComponentLoader(true, <Login />)); }} />
        <Route path="/" exact render={() => { return (this.SingleComponentLoader(true, <LandingPage />)); }} />
      </Switch>
    );
  }
}

export default App;
