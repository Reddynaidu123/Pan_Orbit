import React, { Component } from 'react';
import { Card, Row, Col, Divider } from 'antd';
class Navigation extends Component {
    render() {
        return (
            <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                <Row>
                    <Col sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 4 }}>
                        <Card style={{ width: "100%", height: "680px", borderRadius: "5%", backgroundColor: "#5F33FF" }} >
                            <h4 style={{ marginTop: "70%", color: "#FDFEFE" }}>Profile</h4>
                            <Divider></Divider>
                            <h4 style={{ color: "#FDFEFE" }}>Posts</h4>
                            <Divider></Divider>
                            <h4 style={{ color: "#FDFEFE" }}>Gallery</h4>
                            <Divider></Divider>
                            <h4 style={{ color: "#FDFEFE" }}>To Do</h4>
                        </Card>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Navigation;