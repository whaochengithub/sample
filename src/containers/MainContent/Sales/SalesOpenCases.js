import React, { Component } from 'react';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Modal } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import Select from 'react-select';



const optionGroup = [
    { label: "Product 1", value: "product1" },
    { label: "Product 2", value: "product2" },
    { label: "Product 3", value: "product3" }
]

class SalesOpenCases extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal_xlarge: false,
            modal_small: false,
            model_sales:false,
            model_request:false,
            selectedGroup: null

        };

        this.handleSelectGroup = this.handleSelectGroup.bind(this);
        this.tog_xlarge = this.tog_xlarge.bind(this);
        this.tog_small = this.tog_small.bind(this);
        this.tog_sales = this.tog_sales.bind(this);
        this.tog_request = this.tog_request.bind(this);



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

    tog_request() {
        this.setState(prevState => ({
            model_request: !prevState.model_request
        }));
        this.removeBodyCss();
    }

    tog_small() {
        
        this.setState(prevState => ({
            modal_small: !prevState.modal_small
        }));
        this.removeBodyCss();
    }

    tog_sales() {
        this.setState(prevState => ({
            model_sales: !prevState.model_sales
        }));
        this.removeBodyCss();
    }

    handleSelectGroup = (selectedGroup) => {
        this.setState({ selectedGroup });
    }

    removeBodyCss() {
        document.body.classList.add('no_padding');
    }

    render() {



        const { selectedGroup  } = this.state;

        const data = {
            columns: [
                {
                    label: 'Comment',
                    field: 'comment',
                    sort: 'asc',
                    width: 500
                },
                {
                    label: 'Update Time',
                    field: 'updateTime',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: [
                {
                    comment: 'Have a phone call',
                    updateTime: '2020-01-07'
                },
                {
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    comment: 'First Wechat talk',
                    updateTime: '2020-01-09'
                }
            ]
        }

        return (
            <React.Fragment>
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h4 className="page-title">Sales Page</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Sales Pages</Link></li>
                                        <li className="breadcrumb-item active">Sales Page</li>
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
                                        <h4 className="mt-0 header-title">My open Case</h4>
        
                                        <div className="table-responsive">
                                            <table className="table mb-0">

                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Client Name</th>
                                                        <th>Client School</th>
                                                        <th>Last Update</th>
                                                        <th>Detail Info</th>
                                                        <th>Marketing Record</th>
                                                        <th>Sales Trace</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Stevents</td>
                                                        <td>2020-01-01</td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_xlarge} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Detail</button></td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_small} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Record</button></td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_sales} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Updates</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>NYU</td>
                                                        <td>2020-02-14</td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_xlarge} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Detail</button></td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_small} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Record</button></td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_sales} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Updates</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>Colmbia</td>
                                                        <td>2019-08-17</td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_xlarge} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Detail</button></td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_small} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Record</button></td>
                                                        <td><button 
                                                            type="button" 
                                                            onClick={this.tog_sales} 
                                                            className="btn btn-primary waves-effect waves-light" 
                                                            data-toggle="modal" 
                                                            data-target=".bs-example-modal-xl">Updates</button></td>
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
                            <h5 className="modal-title mt-0" id="exampleModalScrollableTitle">Client Details</h5>
                                <button onClick={() => this.setState({ modal_xlarge: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Client Infromation:</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='4'><p className="mb-3">Name: Mark</p></Col>
                                        <Col sm='4'><p className="mb-3">Collage: Stevens</p></Col>
                                        <Col sm='4'><p className="mb-3">Major: Computer Science</p></Col>
                                    </Row>
                                    <Row>
                                        <Col sm='4'><p className="mb-3">Perfence: Fulltime</p></Col>
                                        <Col sm='4'><p className="mb-3">Gradete time: 2019-01-14</p></Col>
                                        <Col sm='4'><p className="mb-3">Region: New York</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Contact Infromation:</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='4'><p className="mb-3">Wechat: 12345</p></Col>
                                        <Col sm='4'><p className="mb-3">Phone: 111-111-1111</p></Col>
                                        <Col sm='4'><p className="mb-3">E-mail: xxx@yyy.com</p></Col>
                                    </Row><Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Resource Infromation:</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='6'><p className="mb-3">Resource: Event</p></Col>
                                        <Col sm='6'><p className="mb-3">Resource Type: CSSA Connection</p></Col>
                                    </Row><Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Summary</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><p className="mb-3">Cras mattis consectetur purus sit amet fermentum.
                                                            Cras justo odio, dapibus ac facilisis in,
                                                            egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><hr/></Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modal_xlarge: false })} data-dismiss="modal">Close</button>
                        </div>
                </Modal>
                <Modal className="modal-lg" isOpen={this.state.modal_small} toggle={this.tog_small} >
                        <div className="modal-header">
                            <h5 className="modal-title mt-0" id="exampleModalScrollableTitle">Marketing Records</h5>
                                <button onClick={() => this.setState({ modal_small: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <h4 className="mt-0 header-title">Marketing Handler</h4>
                                            <h5 className="mt-0 header-title">Jeff</h5>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">All Updates</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <MDBDataTable
                                            bordered
                                            data={data}
                                        />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modal_small: false })} data-dismiss="modal">Close</button>
                        </div>
                </Modal>
                <Modal className="modal-lg" isOpen={this.state.model_sales} toggle={this.tog_sales} >
                        <div className="modal-header">
                            <h5 className="modal-title mt-0" id="exampleModalScrollableTitle">Client Details</h5>
                                <button onClick={() => this.setState({ model_sales: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <h4 className="mt-0 header-title">Assign Product</h4>
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
                                            <button type="button" className="btn btn-primary">Update Product</button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Product Info</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                            <Col sm='6'><p className="mb-3">Product Name: product1</p></Col>
                                            <Col sm='6'><p className="mb-3">Contract Status: Requested</p></Col>
                                    </Row>
                                    <Row>
                                        
                                            <Col sm='6'><p className="mb-3">Product Price: $7500</p></Col>
                                            <Col sm='6'><p className="mb-3">Contract Approver: Lily Dou</p></Col>
                                    
                                    </Row>
                                    <Row>
                                        <Col>
                                        <button 
                                            type="button" 
                                            onClick={this.tog_request} 
                                            className="btn btn-primary waves-effect waves-light" 
                                            data-toggle="modal" 
                                            data-target=".bs-example-modal-xl">Request Contract</button>
                                        </Col>
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
                                    <Row>
                                        <Col><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">My Updates</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <MDBDataTable
                                            bordered
                                            data={data}
                                        />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Signed and dispatch to support</button>
                            <button type="button" className="btn btn-primary">Update Records</button>
                            <button type="button" className="btn btn-primary">Cancel Case</button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ model_sales: false })} data-dismiss="modal">Close</button>
                        </div>
                </Modal>
                <Modal isOpen={this.state.model_request} toggle={this.tog_request} >
                        <div className="modal-header">
                            <h5 className="modal-title mt-0" id="exampleModalScrollableTitle">request Contract</h5>
                                <button onClick={() => this.setState({ model_request: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <h4 className="mt-0 header-title">Request Contract</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h4 className="mt-0 header-title">Comments</h4>
                                            <textarea className="form-control" id="subject" rows="3"></textarea>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Request Contract</button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ model_request: false })} data-dismiss="modal">Close</button>
                        </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(SalesOpenCases);