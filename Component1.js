import React, { Component } from 'react';
import img from './imagess.png';
import { Card, Row, Col, Divider } from 'antd';
import axios from 'axios';
// import component from './Component2.js'
import { withRouter } from 'react-router-dom';

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage:  `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
        this.onChangehandler = this.onChangehandler.bind(this)
    }
    onChangehandler(e, item) {
        console.log("itemmmmm", item)

        this.props.history.push({
            pathname: "/Component2",
            state: {
                item: item,
                array:this.state.array,
                key: "2"
            }
        })

    }
    componentDidMount() {
        axios.get('https://panorbit.in/api/users.json')
            .then((response) => {
                console.log("getttt", response.data.users)
                this.setState({ array: response.data.users });
            })
    }
    render() {
        return (
            <div style={ sectionStyle }>

                <Card title="Select an Account" style={{ width: 650,transform: "translateY(250px)", marginLeft: "28%", position:"relative",marginTop: "0%",zIndex:"100",borderRadius:"2rem",paddingLeft:"2%",backgroundColor:"" }} >
                    {this.state.array && this.state.array.map((item) => {
                        return (
                            <div >
                                <Row style={{cursor:"pointer"}}>
                                    <Col sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} xl={{ span: 1 }} xxl={{ span: 1 }}>
                                        <img src={item.profilepicture} onClick={(e) => this.onChangehandler(e, item)} className="imagee" ></img>
                                    </Col>
                                    <Col sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 18 }} xxl={{ span: 18 }}>
                                        <p className="left" onClick={(e) => this.onChangehandler(e, item)} >{item.name}</p>
                                    </Col>
                                    <Divider style={{marginTop:"10px"}}></Divider>

                                </Row> 
                            </div>
                        )
                    })}

                </Card>

            </div>
        );
    }
}

export default Component1;