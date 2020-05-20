import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
    Alert,
    Pagination,
    PaginationItem,
    PaginationLink,
    Badge,
    Table,
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Forms extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            doctorFName: '',
            doctorLName: '',
            doctorNic: '',
            language: 'Tamil',
            time: '',
            designation: '',
            email: '',
            phone: '',
            doctorData: [],
            isVisible: false,
            message: '',
            messageColorCode: '',
            doctorDataId: null,
            buttonMessage: 'Save'
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    handleOnchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handeSubmit = (event) => {
        event.preventDefault();
        if (this.state.doctorDataId) {
            const data = {
                "firstName": this.state.doctorFName,
                "lastName": this.state.doctorLName,
                "nic": this.state.doctorNic,
                "availableTime": this.state.time,
                "phone": this.state.phone,
                "email": this.state.email,
                "specialistIn": this.state.designation,
                "languages": this.state.language,
            }
            fetch(`http://localhost:8080/api/doctor/${this.state.doctorDataId}`, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(res => {
                if (res.status === 200) {
                    this.setState({
                        isVisible: true,
                        message: 'Success fully data Update',
                        messageColorCode: 'success',
                    })
                } else {
                    this.setState({
                        isVisible: true,
                        message: 'Data update Failed',
                        messageColorCode: 'danger'
                    })
                }
                this.componentDidMount();

            })
        } else {
            const data = {
                "firstName": this.state.doctorFName,
                "lastName": this.state.doctorLName,
                "nic": this.state.doctorNic,
                "availableTime": this.state.time,
                "phone": this.state.phone,
                "email": this.state.email,
                "specialistIn": this.state.designation,
                "languages": this.state.language,
            }
            fetch('http://localhost:8080/api/doctor', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(res => {
                if (res.status === 200) {
                    this.setState({
                        isVisible: true,
                        message: 'Success fully data insert',
                        messageColorCode: 'success'
                    })
                } else {
                    this.setState({
                        isVisible: true,
                        message: 'Data insert Failed',
                        messageColorCode: 'danger'
                    })
                }
                this.componentDidMount();

            })
        }

    }

    onDismiss = () => {
        this.setState({ isVisible: false });
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/doctor').then(res => res.json()).then(data => {
            this.setState({
                doctorData: data
            })
        })
    }
    handleDelete = (data) => {
        fetch(`http://localhost:8080/api/notes/${data}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    isVisible: true,
                    message: 'Success fully Delete Data',
                    messageColorCode: 'success'
                })
            } else {
                this.setState({
                    isVisible: true,
                    message: 'Failed to delete Data',
                    messageColorCode: 'danger'
                })
            }
            this.componentDidMount();

        })
    }
    handleEdit = (data) => {
        this.setState({
            doctorFName: data.firstName,
            doctorLName: data.lastName,
            doctorNic: data.nic,
            time: data.availableTime,
            language: data.languages,
            designation: data.specialistIn,
            email: data.email,
            phone: data.phone,
            doctorDataId: data.id,
            buttonMessage: 'Update'
        })
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Alert color={this.state.messageColorCode} isOpen={this.state.isVisible} toggle={this.onDismiss}>
                    {this.state.message}
                </Alert>
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Doctor</strong>
                                <small> Form</small>
                            </CardHeader>
                            <form onSubmit={this.handeSubmit}>
                                <CardBody>
                                    <FormGroup>
                                        <Label htmlFor="company">Doctor First Name</Label>
                                        <Input type="text" id="Doctor" placeholder="Enter Doctor name" name="doctorFName" onChange={this.handleOnchange} required value={this.state.doctorFName} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="company">Doctor last Name</Label>
                                        <Input type="text" id="Doctor" placeholder="Enter Doctor name" name="doctorLName" onChange={this.handleOnchange} required value={this.state.doctorLName} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="vat">Doctor NIC Number</Label>
                                        <Input type="text" id="vat" placeholder="Enter NIC Number" name="doctorNic" onChange={this.handleOnchange} required value={this.state.doctorNic} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="street">Language</Label>
                                        <Input type="select" name="language" id="select" onChange={this.handleOnchange} required value={this.state.language}>
                                            <option disabled>Please select Language</option>
                                            <option value="Tamil">Tamil</option>
                                            <option value="Sinhala">Sinhala</option>
                                            <option value="Both">Both</option>
                                            <option value="Other">Other</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup row className="my-0">
                                        <Col xs="3">
                                            <FormGroup>
                                                <Label htmlFor="city">Available Time</Label>
                                                <Input type="time" id="city" placeholder="Enter your Time" name="time" onChange={this.handleOnchange} required value={this.state.time} />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="3">
                                            <FormGroup>
                                                <Label htmlFor="postal-code">Doctor Designation</Label>
                                                <Input type="text" id="postal-code" placeholder="Doctor Designation" name="designation" onChange={this.handleOnchange} required value={this.state.designation} />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="3">
                                            <FormGroup>
                                                <Label htmlFor="city">Doctor Email</Label>
                                                <Input type="email" id="city" placeholder="Enter Doctor Email" name="email" onChange={this.handleOnchange} required value={this.state.email} />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="3">
                                            <FormGroup>
                                                <Label htmlFor="postal-code">Doctor Mobile Number</Label>
                                                <Input type="text" id="postal-code" placeholder="Doctor Mobile Number" name="phone" onChange={this.handleOnchange} required value={this.state.phone} />
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> {this.state.buttonMessage}</Button>
                                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </Col>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Doctor Details
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Doctor First Name</th>
                                            <th>Doctor Last Name</th>
                                            <th>Doctor NIC</th>
                                            <th>Doctor Email</th>
                                            <th>Doctor Mobile Number</th>
                                            <th>Language</th>
                                            <th>Available Time</th>
                                            <th>Doctor Designation</th>
                                            <th>Edit</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.doctorData.map((data, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{data.firstName}</td>
                                                        <td>{data.lastName}</td>
                                                        <td>{data.nic}</td>
                                                        <td>{data.email}</td>
                                                        <td>{data.phone}</td>
                                                        <td>{data.languages}</td>
                                                        <td>{data.availableTime}</td>
                                                        <td>{data.specialistIn}</td>
                                                        <td>
                                                            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                                                <Button active type="button" block color="primary" aria-pressed="true" onClick={() => this.handleEdit(data)}>Edit</Button>
                                                            </Col>
                                                        </td>
                                                        <td>
                                                            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                                                                <Button active type="button" block color="danger" onClick={() => this.handleDelete(data.id)}>Delete</Button>
                                                            </Col>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </Table>
                                {/* <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous tag="button"></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next tag="button"></PaginationLink>
                                    </PaginationItem>
                                </Pagination> */}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Forms;
