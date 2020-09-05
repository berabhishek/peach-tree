import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { registerUser, setCurrentUser } from "../../actions/actions";
import { Button } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  handleEmailChange = e => {
    this.setState({email: e.target.value})
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value})
  }

  handleLoginClick() {
    const isUserExist = this.props.users.filter(user => user.email === this.state.email && user.password === this.state.password)
    if (isUserExist.length === 0) {
      this.setState({errors: "Invalid email/password combination"})
    } else {
      this.setState({errors: ""})
      this.props.setCurrentUser({
        email: this.state.email,
        password: this.state.password
      })
    }
  }

  handleRegisterClick = () => {
    const isEmailExist = this.props.users.filter(user => user.email === this.state.email)
    if (isEmailExist.length > 0) {
      this.setState({errors: "Email already exist"})
    } else {
      this.setState({errors: ""})
      this.props.registerUser({
        email: this.state.email,
        password: this.state.password
      })
    }
  }

  render() {
    if (this.props.loginUser.email) {
      return <Redirect to="/dashboard" />;
    }
    return (
        <div>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div class="card card0 border-0">
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="card1 pb-5">
                                <div class="row"> <img src="https://i.imgur.com/CXQmsmF.png" class="logo"/>
                                </div>
                                <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> 
                                    <img src="https://i.imgur.com/uNGdWHi.png" class="image"/> 
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card2 card border-0 px-4 py-5">
                            <div class="row px-3"> 
                                <label class="mb-1">
                                  <h6 class="mb-0 text-sm">Email Address</h6>
                                </label> 
                                <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" onChange={this.handleEmailChange}/> 
                            </div>
                            <div class="row px-3"> 
                                <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Password</h6>
                                </label> 
                                <input type="password" name="password" placeholder="Enter password" onChange={this.handlePasswordChange}/> 
                            </div>
                            <div class="row px-3 mb-4">
                                <div class="custom-control custom-checkbox custom-control-inline"> 
                                    <input id="chk1" type="checkbox" name="chk" class="custom-control-input"/> 
                                    <label for="chk1" class="custom-control-label text-sm">Remember me</label> 
                                </div> 
                             </div>
                            <div class="row mb-3 px-3"> 
                                <Button class="btn btn-blue text-center" onClick={this.handleLoginClick}>Login</Button>
                                <Button type="submit" class="btn btn-blue text-center" onClick={this.handleRegisterClick}>Register</Button>
                            </div>
                            {this.state.errors.length > 0 &&
                              <p>
                                {this.state.errors}
                              </p>
                            }
                        </div>
                    </div>
                </div>
                <div class="bg-blue py-4">
                    <div class="row px-3"> 
                        <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                        <div class="social-contact ml-4 ml-sm-auto"> 
                            <span class="fa fa-facebook mr-4 text-sm"></span> 
                            <span class="fa fa-google-plus mr-4 text-sm"></span> 
                            <span class="fa fa-linkedin mr-4 text-sm"></span> 
                            <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  loginUser: state.currentUser,
  users: state.users
});

const mapDispatchToProps = dispatch => {
  return {
    registerUser: userObj => {
      dispatch(registerUser(userObj))
    },
    setCurrentUser: userObj => {
      dispatch(setCurrentUser(userObj))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);