import React, { Component } from 'react';
import './App.css';
import { Login } from './Login';
import { BusinessPartners } from './BusinessPartners';
import { loadBusinessPartners } from './client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loginResponse: null, businessPartners: null};

    this.handleLogin = this.handleLogin.bind(this);    
  }

  handleLogin(loginResponse) {
    console.log("got ", loginResponse);
    this.setState({loginResponse: loginResponse});
    if (loginResponse && loginResponse.logged) {
      loadBusinessPartners(loginResponse.token, (businessPartners) => this.setState({businessPartners: businessPartners}))
    }
  }

  render() {
    if (this.state.loginResponse === null || !this.state.loginResponse.logged) {
      return (
        <div className="App">
          <Login handleLogin={(token) => this.handleLogin(token)} />
        </div>
      )  
    } else if (this.state.businessPartners == null )  {
      return (
        <div className="App">
          Loading business partners...
        </div>
      )
    }else {
      return (
        <div className="App">
          <BusinessPartners businessPartners={this.state.businessPartners} />
        </div> 
      )
    }
  }
}

export default App;
