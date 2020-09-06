import React, { Component } from 'react';
import { Card, Row, Col, Divider, Menu, Modal, Dropdown, Button, Icon } from 'antd';
import { Layout } from 'antd';
import { Chat } from 'react-chat-popup';
import './game.css'

import Map from './map-utils/MapContainer';

import { MapsWrapper } from './styles';
// import usePosition from './Useposition.js';
const confirm = Modal.confirm;

const { Header, Sider, Content } = Layout;
class Component2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            array: ["Profile", "Posts", "Gallery", "To Do"],
            name: "Profile",
            visible: false,
            value: this.props.location.state.item

        }

        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    showModal() {
        this.setState({
            visible: true,
        });
    };

    handleOk(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
        this.props.history.push({
            pathname: "/",
            state: {

                key: "2"
            }
        })
    };

    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    onChangehandler(e, name) {
        this.setState({ name: name }, () => {
            console.log("2222222222222222", this.state.name)

        });
    }
    onClickhandler(e, item) {
        console.log("4444444444444", item)
        this.setState({ value: item });
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <img src={this.state.value.profilepicture}
                        style={{ width: "100px", marginLeft: "80px", marginRight: "50px", height: "110px", borderRadius: "80%" }} ></img>

                </Menu.Item>
                <Menu.Item>
                    <h4 style={{ marginLeft: "50px", marginRight: "50px", }}>
                        {this.state.value.name}
                    </h4>
                </Menu.Item>
                <Menu.Item>
                    <p style={{ marginLeft: "50px", marginRight: "50px", fontSize: "20px" }}>
                        {this.state.value.email}

                    </p>
                </Menu.Item>
                <Menu.Item>
                    <Divider style={{ marginTop: "-10px" }}></Divider>
                </Menu.Item>
                <Menu.Item>

                    {this.props.location.state.array.map((item, index) => {
                        if (index <= 2 && item.username != this.state.value.username) {
                            return (
                                <div style={{ display: "flex", marginBottom: "20px" }}>
                                    <img style={{ width: "40px", marginLeft: "30px", height: "30px", borderRadius: "80%" }} src={item.profilepicture} />
                                    <h4 style={{ marginLeft: "20px", }} onClick={(e) => this.onClickhandler(e, item)}> {item.name}</h4>
                                </div>
                            )
                        }

                    })}
                </Menu.Item>
                <Menu.Item>
                    <Divider style={{marginTop:"-20px"}}></Divider>
                </Menu.Item>
                <Menu.Item>
                    {/* <Button style={{ marginLeft: "80px" }} onClick={this.handleOk} danger> */}
                    <Button  style={{ marginLeft: "80px",marginTop:"-20px" ,backgroundColor:"red"}} onClick={this.handleOk}>
    Log Out
    </Button>
                </Menu.Item>
            </Menu>
        );
        console.log("props", this.props)
        return (
            <Layout>
                <Sider style={{ backgroundColor: "#FDFEFE" }}>
                    <div className="sider">
                        <Card style={{ width: "150%", height: "730px", borderRadius: "10%", marginTop: "30px", backgroundColor: "#2B60DE" }} >

                            <div style={{ marginTop: "80%" }}>
                                {this.state.array.map((item) => {
                                    return (
                                        <div>
                                            <h4 onClick={(e) => this.onChangehandler(e, item)} style={{ color: "#FDFEFE", cursor: "pointer" }}>{item}</h4>
                                            <Divider />
                                        </div>
                                    )
                                })}
                            </div>
                        </Card>
                    </div>
                </Sider>
                <Layout>
                    <Header style={{ backgroundColor: "#FDFEFE", height: "80px" }}>
                        <Row>
                            <Col sm={{ span: 2 }} md={{ span: 2 }} lg={{ span: 2 }} xl={{ span: 2 }} xxl={{ span: 2 }} />

                            <Col sm={{ span: 5 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }} xxl={{ span: 5 }}>
                                <h5 style={{ marginTop: "50px", fontSize: "20px", marginLeft: "40px" }}>{this.state.name}</h5>
                            </Col>
                            <Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }} />
                            <Col sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} xl={{ span: 1 }} xxl={{ span: 1 }} >
                                <Dropdown overlay={menu} placement="bottomLeft" style={{ width: "250px" }}>
                                    <img src={this.state.value.profilepicture} style={{ marginTop: "50px", width: "40px", helight: "100px", borderRadius: "80%" }} ></img>

                                </Dropdown>
                            </Col>
                            <Col sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 4 }} >
                                <Dropdown overlay={menu} placement="bottomLeft" style={{ width: "250px" }}>
                                    <p style={{ marginTop: "30px", fontSize: "20px" }}> {this.state.value.name}</p>
                                </Dropdown>
                            </Col>

                        </Row>

                    </Header>

                    <Content style={{ backgroundColor: "#FDFEFE" }}>
                        {this.state.name != "Profile" ?
                            <div>


                                <Row>
                                    <Col sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 3 }} />
                                    <Col sm={{ span: 20 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 20 }} xxl={{ span: 20 }} >
                                        <Divider style={{ backgroundColor: "#BEBBBB" }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <h1 style={{ marginLeft: "400px", marginTop: "180px", fontSize: "100px", color: "#E1D8D8" }}> Coming Soon</h1>
                                </Row></div>
                            :
                            <div>
                                <Row>
                                    <Col sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 3 }} />
                                    <Col sm={{ span: 20 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 20 }} xxl={{ span: 20 }} >
                                        <Divider style={{ backgroundColor: "#BEBBBB" }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 3 }} />
                                    <Col sm={{ span: 9 }} md={{ span: 9 }} lg={{ span: 9 }} xl={{ span: 9 }} xxl={{ span: 9 }} >

                                        <img src={this.state.value.profilepicture} style={{ marginTop: "10px", marginLeft: "60px", width: "200px", height: "200px", borderRadius: "90%" }} />
                                        <h3 style={{ marginTop: "0px", marginLeft: "80px" }}>{this.state.value.name}</h3>
                                        <div>
                                            <p style={{ fontSize: "20px", marginLeft: "20px", display: "flex" }}> Username :  <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.username}</h3></p>
                                            <p style={{ marginTop: "-8px", marginLeft: "49px", fontSize: "20px", display: "flex" }}> e-mail  : <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.email}</h3> </p>
                                            <p style={{ marginTop: "-8px", marginLeft: "49px", fontSize: "20px", display: "flex" }}> Phone  :  <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.phone}</h3></p>
                                            <p style={{ marginTop: "-8px", marginLeft: "35px", fontSize: "20px", display: "flex" }}> Website  :<h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.website}</h3>  </p>

                                            <Divider style={{ width: "90%", backgroundColor: "#BEBBBB", marginLeft: "-20px" }} />
                                            <p style={{ marginTop: "-8px", marginLeft: "70px", fontSize: "20px", display: "flex" }}> Company</p>
                                            <p style={{ marginTop: "-8px", marginLeft: "49px", fontSize: "20px", display: "flex" }}> Name  :  <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.company.name}</h3></p>
                                            <p style={{ marginTop: "-8px", marginLeft: "-5px", fontSize: "20px", display: "flex" }}> catchPhrase: <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.company.catchPhrase}</h3> </p>
                                            <p style={{ marginTop: "-8px", marginLeft: "75px", fontSize: "20px", display: "flex" }}> bs : <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.company.bs}</h3> </p>
                                        </div>


                                    </Col>
                                    <Col sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} xl={{ span: 1 }} xxl={{ span: 1 }} >
                                        <Divider type="vertical" style={{ height: "700px", marginLeft: "50px", marginTop: "20px", backgroundColor: "#BEBBBB" }} />
                                    </Col>
                                    <Col sm={{ span: 11 }} md={{ span: 11 }} lg={{ span: 11 }} xl={{ span: 11 }} xxl={{ span: 11 }} >
                                        <p style={{ marginTop: "20px", marginLeft: "50px", fontSize: "20px", display: "flex" }}> Address</p>
                                        <p style={{ marginTop: "-8px", marginLeft: "100px", fontSize: "20px", display: "flex" }}> street  : <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.address.street}</h3> </p>
                                        <p style={{ marginTop: "-8px", marginLeft: "105px", fontSize: "20px", display: "flex" }}> suite  : <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.address.suite}</h3> </p>
                                        <p style={{ marginTop: "-8px", marginLeft: "120px", fontSize: "20px", display: "flex" }}> city  :  <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.address.city}</h3></p>
                                        <p style={{ marginTop: "-8px", marginLeft: "80px", fontSize: "20px", display: "flex" }}> zipcode : <h3 style={{ marginLeft: "5px", marginTop: "3px" }}>{this.state.value.address.zipcode}</h3> </p>
                                        <div style={{ marginLeft: "50px", borderRadius: "50px" }}> <MapsWrapper>
                                            <Map

                                                // currPos={currPos}
                                                // markers={locations}
                                                height='350px'

                                            // favLocation={selected}
                                            />
                                        </MapsWrapper>
                                        <Chat />
                                        </div>
             

                                    </Col>


                                </Row>



                            </div>

                        }


                    </Content>
                </Layout>
            </Layout>

        );
    }
}

export default Component2;