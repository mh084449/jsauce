import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Order from "./components/Order";
import Login from "./components/Login";

class App extends Component {
  state = {
    authenticated: false
  };
  toggleLogin = () => {
    this.setState({ authenticated: !this.state.authenticated });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Header
            auth={{
              authenticated: this.state.authenticated,
              toggleLogin: this.toggleLogin
            }}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/dishes"
              component={() => (
                <Dishes
                  auth={{
                    authenticated: this.state.authenticated,
                    toggleLogin: this.toggleLogin
                  }}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/menu"
              component={() => (
                <Menu
                  auth={{
                    authenticated: this.state.authenticated,
                    toggleLogin: this.toggleLogin
                  }}
                />
              )}
            />
            <Route path="/review" component={Review} />
            <Route path="/order" component={Order} />
            {!this.state.authenticated && (
              <Route
                path="/login"
                component={() => (
                  <Login
                    auth={{
                      authenticated: this.state.authenticated,
                      toggleLogin: this.toggleLogin
                    }}
                  />
                )}
              />
            )}
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
