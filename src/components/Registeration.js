import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = (e) => {
    e.preventDefault();
    
    var pass = this.state.password;
    var pass2 = this.state.confirm_password;
    if (pass === pass2) {
       alert('You have signed up!');
       this.setState({value: pass});
       this.setState({ redirect: "/someRoute" });
    }else{
      alert('Your passwords should match!');
    }
  };
  
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <section className="order" id="order">
        <h3 className="sub-heading"> Register now </h3>
        <h1 className="heading"> secure and fast </h1>
        <form action="/" onSubmit={this.handleSubmit}>
          <div className="inputBox">
              <div className="input">
              <span>your name</span>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="input">
              <span>your username</span>
              <input
                type="text"
                name="username"
                placeholder="enter your username"
                required
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="input">
              <span>your email</span>
              <input
                type="text"
                name="email"
                placeholder="enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="email should contain @ sign followed by .com"
                required
                value={this.state.mail}
                onChange={this.handleChange}
              />
            </div>
            <div className="input">
              <span>your password</span>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                required
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="input">
              <span>your password again</span>
              <input
                type="password"
                name="confirm_password"
                placeholder="enter your password again"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                required
                value={this.state.confirm_password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <input type="submit" value="register" className="btn" />
        </form>
      </section>
    );
  }
}

export default withRouter(Register);