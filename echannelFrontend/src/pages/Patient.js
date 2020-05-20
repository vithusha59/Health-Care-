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
    Pagination,
    PaginationItem,
    PaginationLink,
    Badge,
    Table,
    Alert
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
            patientName: '',
            nicNumber: '',
            penitences: '',
            doctor: '',
            date: '',
            time: '',
            doctorData: [],
            isVisible: false,
            message: '',
            messageColorCode: ''

        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        const data = {
            "patientName": this.state.patientName,
            "doctorName": this.state.doctor,
            "patientNic": this.state.nicNumber,
            "diseaseName": this.state.penitences,
            "date": this.state.date,
            "time": this.state.time
        }
        event.preventDefault();
        fetch('http://localhost:8080/api/appointment', {
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
    componentDidMount() {
        fetch('http://localhost:8080/api/doctor').then(res => res.json()).then(data => {
            this.setState({
                doctorData: data
            })
        })
    }

    onDismiss = () => {
        this.setState({ isVisible: false });
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
                                <strong>Appoinment</strong>
                                <small> Form</small>
                            </CardHeader>
                            <form onSubmit={this.handleSubmit}>
                                <CardBody>
                                    <FormGroup>
                                        <Label htmlFor="company">Patient Name</Label>
                                        <Input type="text" id="Doctor" placeholder="Enter Patient name" name="patientName" onChange={this.handleOnChange} value={this.state.patientName} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="vat">Patient NIC Number</Label>
                                        <Input type="text" id="vat" placeholder="Enter NIC Number" name="nicNumber" onChange={this.handleOnChange} value={this.state.nicNumber} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="street">Penitences</Label>
                                        <Input type="select" id="select" name="penitences" onChange={this.handleOnChange} value={this.state.penitences}>
                                            <option disabled>Please select Penitences</option>
                                            {this.state.doctorData.map((data, index) => {
                                                return (
                                                    <option value={data.specialistIn}>{data.specialistIn}</option>
                                                )
                                            })}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup row className="my-0">
                                        <Col xs="4">
                                            <FormGroup>
                                                <Label htmlFor="city">Doctors</Label>
                                                <Input type="select" name="doctor" id="select" onChange={this.handleOnChange} value={this.state.doctor}>
                                                    <option disabled>Please select Doctor</option>
                                                    {this.state.doctorData.map((data, index) => {
                                                        return (
                                                            <option value={data.firstName + ' ' + data.lastName}>{data.firstName + ' ' + data.lastName}</option>
                                                        )
                                                    })}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col xs="4">
                                            <Label htmlFor="postal-code">Appoinment Date</Label>
                                            <FormGroup>
                                                <Input type="date" id="postal-code" placeholder="Appoinment Date" name="date" onChange={this.handleOnChange} value={this.state.date} />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="4">
                                            <Label htmlFor="postal-code">Appoinment Time</Label>
                                            <FormGroup>
                                                <Input type="text" id="postal-code" placeholder="Appoinment Time" value="5PM" name="time" onChange={this.handleOnChange} value={this.state.time} />
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Forms;
