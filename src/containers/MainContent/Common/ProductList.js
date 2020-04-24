import React, { Component } from 'react';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Modal } from 'reactstrap';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal_xlarge: false,
            modal_small: false

        };

        this.tog_xlarge = this.tog_xlarge.bind(this);
        this.tog_small = this.tog_small.bind(this);


    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    tog_xlarge() {
        this.setState(prevState => ({
            modal_xlarge: !prevState.modal_xlarge
        }));
        this.removeBodyCss();
    }

    tog_small() {
        this.setState(prevState => ({
            modal_small: !prevState.modal_small
        }));
    }

    removeBodyCss() {
        document.body.classList.add('no_padding');
    }


    render() {

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h4 className="page-title">Product Page</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Product Pages</Link></li>
                                        <li className="breadcrumb-item active">Product Page</li>
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
                                        <h4 className="mt-0 header-title">Current Product</h4>
        
                                        <div className="table-responsive">
                                            <table className="table mb-0">

                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Product Name</th>
                                                        <th>Product Price</th>
                                                        <th>Expire Date</th>
                                                        <th>Detail</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Product 1</td>
                                                        <td>$7500</td>
                                                        <td>2021-01-01</td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_xlarge} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Detail</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Product 2</td>
                                                        <td>$3500</td>
                                                        <td>2021-01-01</td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_xlarge} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Detail</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Product 3</td>
                                                        <td>$4500</td>
                                                        <td>2021-01-01</td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_xlarge} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Detail</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Modal className="modal-lg" isOpen={this.state.modal_xlarge} toggle={this.tog_xlarge} >
                        <div className="modal-header">
                            <h5 className="modal-title mt-0" id="exampleModalScrollableTitle">Product Details</h5>
                                <button onClick={() => this.setState({ modal_xlarge: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Product Infromation:</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='4'><p className="mb-3">Name: Product</p></Col>
                                        <Col sm='4'><p className="mb-3">Start Date: 2020-01-01</p></Col>
                                        <Col sm='4'><p className="mb-3">End Date: 2021-01-01</p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm='4'><p className="mb-3">Discount: None</p></Col>
                                        <Col sm='4'><p className="mb-3">Region: Boston</p></Col>
                                        <Col sm='4'><p className="mb-3">Type: Onsite intern</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Creator Infromation:</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='4'><p className="mb-3">Name: Lily Dou</p></Col>
                                        <Col sm='4'><p className="mb-3">Create Date: 2020-02-15</p></Col>
                                        <Col sm='4'><p className="mb-3">Comment: ssssss</p></Col>
                                    </Row><Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Resource Infromation:</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='6'><p className="mb-3">Resource: Ello</p></Col>
                                        <Col sm='6'><p className="mb-3">Resource Type: Mentor</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Product Detail</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><p className="mb-3">Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p></Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modal_xlarge: false })} data-dismiss="modal">Close</button>
                        </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(ProductList);