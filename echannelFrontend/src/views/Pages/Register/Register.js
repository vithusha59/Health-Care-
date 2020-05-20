import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    fname: '',
    lname: '',
    nic: '',
    mobile: '',
    email: '',
    password: '',
    isVisible: false,
    message: '',
    messageColorCode: '',
    disabledStatus: true
  }
  handleOnchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      "firstName": this.state.fname,
      "lastName": this.state.lname,
      "password": this.state.password,
      "nic": this.state.nic,
      "phone": this.state.mobile,
      "email": this.state.email
    }
    fetch('http://localhost:8080/api/patient', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            isVisible: true,
            messageColorCode: 'success',
            message: 'Success fully account created please login',
            disabledStatus: false
          })
        } else {
          this.setState({
            isVisible: true,
            messageColorCode: 'danger',
            message: 'account created Failed'
          })
        }
      })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Alert color={this.state.messageColorCode} isOpen={this.state.isVisible} toggle={this.onDismiss}>
            {this.state.message}
          </Alert>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="First Name" autoComplete="username" name="fname" required onChange={this.handleOnchange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Last name" autoComplete="username" name="lname" required onChange={this.handleOnchange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="NIC Number" autoComplete="username" name="nic" required onChange={this.handleOnchange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Mobile Number" autoComplete="username" name="mobile" required onChange={this.handleOnchange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email" autoComplete="email" name="email" required onChange={this.handleOnchange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" name="password" required onChange={this.handleOnchange} />
                    </InputGroup>
                    {/* <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup> */}
                    <Button type="submit" color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <div hidden={this.state.disabledStatus}>
                    <Link to="/login">
                      <Col xs="12" className="text-center">
                        <Button color="link" className="px-10">Login!</Button>
                      </Col>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
