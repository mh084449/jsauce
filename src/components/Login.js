import { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { toggleLogin } = this.props.auth;
    if (
      this.state.username === process.env.REACT_APP_Username &&
      this.state.password === process.env.REACT_APP_Password
    ) {
      toggleLogin();
      this.props.history.push("/");
    }
    else{
      alert('Invalid Username or Password!')
    }
  };
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    return (
      <section className="order" id="order">
        <h3 className="sub-heading"> login now </h3>
        <h1 className="heading"> secure and fast </h1>

        <form action="" onSubmit={this.handleSubmit}>
          <div className="inputBox">
            <div className="input">
              <span>your username</span>
              <input
                type="text"
                name="username"
                placeholder="enter your username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="input">
              <span>your password</span>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <input type="submit" value="login" className="btn" />
        </form>
      </section>
    );
  }
}

export default withRouter(Login);
