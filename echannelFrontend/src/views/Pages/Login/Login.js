import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isVisible: false,
    message: '',
    messageColorCode: '',
  }
  handleOnchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === '123456789v') {
      const data = {
        'nic': this.state.username,
        'password': this.state.password
      }
      fetch('http://localhost:8080/api/adminLogin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.status === 200) {
            window.location.assign('/dashboard')
            localStorage.setItem('username', this.state.username)
          } else {
            this.setState({
              isVisible: true,
              messageColorCode: 'danger',
              message: 'Username or password incorrect'
            })
          }
        })


    } else {
      const data = {
        'nic': this.state.username,
        'password': this.state.password
      }
      fetch('http://localhost:8080/api/patientLogin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.status === 200) {
            window.location.assign('/dashboard')
            localStorage.setItem('username', this.state.username)
          } else {
            this.setState({
              isVisible: true,
              messageColorCode: 'danger',
              message: 'Username or password incorrect'
            })
          }
        })
    }

  }
  onDismiss = () => {
    this.setState({ isVisible: false });
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Alert color={this.state.messageColorCode} isOpen={this.state.isVisible} toggle={this.onDismiss}>
          {this.state.message}
        </Alert>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="NIC" autoComplete="username" name="username" onChange={this.handleOnchange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={this.handleOnchange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4">Login</Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col> */}
                      </Row>
                    </form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
