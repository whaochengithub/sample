import React, { Component } from 'react';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Select from 'react-select';
import { Editor } from 'react-draft-wysiwyg';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";



const optionGroup = [
    {
        label: "Mentor",
        options: [
            { label: "Goldman", value: "Goldman" },
            { label: "BOA", value: "BOA" },
            { label: "Google", value: "Google" }
        ]
    },
    {
        label: "Company",
        options: [
            { label: "MOYI", value: "moyi" },
            { label: "Valta", value: "Valta" },
            { label: "CARDV", value: "CAver" }
        ]
    }
];


const regionOptions = [
    { label: "New York", value: "newYork" },
    { label: "Boston", value: "boston" },
    { label: "California", value: "california" }
]

class NewProduct extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedGroup: null,
            regionGroup:null,
            startDate: new Date(),
            endDate: new Date(),
            
        }
        this.add_bClass = this.add_bClass.bind(this);
        this.add_vClass = this.add_vClass.bind(this);

        this.handleSelectGroup = this.handleSelectGroup.bind(this);
        this.handleOptionGroup = this.handleOptionGroup.bind(this);
        
    
    }

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    add_bClass = () => {
        document.getElementById('bootstrap_validation').classList.add('was-validated');
    }
    add_vClass = () => {
        document.getElementById('b_validation').classList.add('was-validated');
    }

    handleSelectGroup = (selectedGroup) => {
        this.setState({ selectedGroup });
    }

    handleOptionGroup = (regionGroup) => {
        this.setState({ regionGroup });
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        const { selectedGroup,regionGroup  } = this.state;

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h4 className="page-title">New Product Page</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">New Product Pages</Link></li>
                                        <li className="breadcrumb-item active">New Product Page</li>
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    <div className="float-right d-none d-md-block">
                                        <Settingmenu />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title">Product Information</h4>
                                        <form className="needs-validation" id="bootstrap_validation" novalidate>
                                            <Row>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom01">Product Name</label>
                                                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Client Name" />
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom02">Prodcut Price</label>
                                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Client Collage" />
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom06">Creator</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Gradate Time" />
                                                        <div className="invalid-feedback">
                                                            Please provide a valid Gradate Time.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom07">Discount</label>
                                                        <input type="text" className="form-control" id="validationCustom04" placeholder="Perfence" />
                                                        <div className="invalid-feedback">
                                                            Please provide a Perfence.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                <div className="form-group">
                                                        <label for="validationCustom02">Region</label>
                                                        <Select
                                                            value={regionGroup}
                                                            onChange={this.handleOptionGroup}
                                                            options={regionOptions}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom03">Start Date</label>
                                                        <DatePicker
                                                            selected={this.state.startDate}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom04">End Date</label>
                                                        <DatePicker
                                                            selected={this.state.endDate}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                          
                                            <Row>
                                                <Col><hr/></Col>
                                            </Row>
                                            <Row>
                                                <Col><h4 className="mt-0 header-title">Resource Information</h4></Col>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom01">Resource Name</label>
                                                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" />
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom02">Resource Type</label>
                                                        <Select
                                                            value={selectedGroup}
                                                            onChange={this.handleSelectGroup}
                                                            options={optionGroup}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <h4 className="mt-0 header-title">Product Detail</h4>
                                                    <Editor
                                                        //toolbarClassName="toolbarClassName"
                                                        wrapperClassName="wrapperClassName"
                                                        editorClassName="editorClassName" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="12">
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="invalidCheck" />
                                                            <label className="custom-control-label" for="invalidCheck">Agree All infromation is correct</label>
                                                            <div className="invalid-feedback">
                                                                You must agree before submitting.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <button className="btn btn-primary" onClick={this.add_bClass} type="button">Submit</button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(NewProduct);