import React, { Component } from 'react';
import { activateAuthLayout } from '../../../store/actions';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import { Link } from 'react-router-dom';
import Pie from '../../../containers/charts/echart/Pie';
import { Row, Col, Card, CardBody, Modal } from 'reactstrap';
import Line from '../../../containers/charts/echart/Line';
import { MDBDataTable } from 'mdbreact';

class MgtReview extends Component {


    constructor(props) {
        super(props);
        this.state = {
            modal_xlarge: false,

        };

        this.tog_xlarge = this.tog_xlarge.bind(this);


    }

    removeBodyCss() {
        document.body.classList.add('no_padding');
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


    render() {

        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: '300'
                },
                {
                    label: 'Client',
                    field: 'client',
                    sort: 'asc',
                    width: '300'
                },
                {
                    label: 'Phase',
                    field: 'phase',
                    sort: 'asc',
                    width: '300'
                },
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
                {   name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Have a phone call',
                    updateTime: '2020-01-07'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
                    comment: 'Add wechat friend',
                    updateTime: '2020-01-08'
                },
                {
                    name:'baijun',
                    client:'yaya',
                    phase:'pre-sale',
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
                                    <h4 className="page-title">Blank Page</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="mdi mdi-home-outline"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                        <li className="breadcrumb-item active">Blank Page</li>
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
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-broadcast bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Close Cases</h6>
                                        <h5 className="mb-3">25</h5>
                                        <p className="text-muted mb-0"><span className="text-success mr-2"> 12% <i className="mdi mdi-arrow-up"></i> </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-box bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">Revenue</h6>
                                        <h5 className="mb-3">$ 48,265</h5>
                                        <p className="text-muted mb-0"><span className="text-danger mr-2"> +26% <i className="mdi mdi-arrow-down"></i> </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mini-stat bg-pattern">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className="dripicons-tags bg-soft-primary text-primary float-right h4"></i>
                                        </div>
                                        <h6 className="text-uppercase mb-3 mt-0">New Case</h6>
                                        <h5 className="mb-3">75</h5>
                                        <p className="text-muted mb-0"><span className="text-danger mr-2"> +36% <i className="mdi mdi-arrow-down"></i> </span> From previous period</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Weekly Revenue</h4>
                                        <div id="line-chart" className="e-chart">
                                            <Line />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6">
                                <Card>
                                    <CardBody>
                                        <h4 className="mt-0 header-title mb-4">Sales Performance</h4>
                                        <div id="pie-chart" className="e-chart">
                                            <Pie />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
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
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                    <Row>
                                        <Col>
                                            <h6 className="text-uppercase mb-3 mt-0">Recent Updates</h6>
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
                            <button type="button" className="btn btn-primary">Update</button>
                            <button type="button" className="btn btn-primary">Remove</button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modal_xlarge: false })} data-dismiss="modal">Close</button>
                        </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect(null, { activateAuthLayout })(MgtReview);