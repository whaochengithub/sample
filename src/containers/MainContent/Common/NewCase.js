import React, { Component } from 'react';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Select from 'react-select';
import { Editor } from 'react-draft-wysiwyg';

const optionGroup = [
    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" }
        ]
    }
];


const regionOptions = [
    { label: "New York", value: "newYork" },
    { label: "Boston", value: "boston" },
    { label: "California", value: "california" }
]

class NewCase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedGroup: null,
            regionGroup:null
        }
        this.add_bClass = this.add_bClass.bind(this);
        this.add_vClass = this.add_vClass.bind(this);

        this.handleSelectGroup = this.handleSelectGroup.bind(this);
        this.handleOptionGroup = this.handleOptionGroup.bind(this);
        
    
    }

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

    render() {

        const { selectedGroup,regionGroup  } = this.state;


        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h4 className="page-title">Create New Student Case</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Marketing</Link></li>
                                        <li className="breadcrumb-item active">Create New Case</li>
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
                                        <h4 className="mt-0 header-title">Client Information</h4>
                                        <form className="needs-validation" id="bootstrap_validation" novalidate>
                                            <Row>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom01">Client Name</label>
                                                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Client Name" />
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="form-group">
                                                        <label for="validationCustom02">Client Collage</label>
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
                                                        <label for="validationCustom03">Major</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Major" />
                                                        <div className="invalid-feedback">
                                                            Please provide a valid Major.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom04">Phone</label>
                                                        <input type="text" className="form-control" id="validationCustom04" placeholder="Phone" />
                                                        <div className="invalid-feedback">
                                                            Please provide a phone.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom05">Wechat</label>
                                                        <input type="text" className="form-control" id="validationCustom05" placeholder="wechat" />
                                                        <div className="invalid-feedback">
                                                            Please provide a valid wechat.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom06">Gradate Time</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Gradate Time" />
                                                        <div className="invalid-feedback">
                                                            Please provide a valid Gradate Time.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div className="form-group">
                                                        <label for="validationCustom07">Perfence</label>
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
                                                    <h4 className="mt-0 header-title">Summary</h4>
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

export default connect(null, { activateAuthLayout })(NewCase);


