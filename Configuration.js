import React, { Component } from 'react';
import { Input, Row, Col, Button, Avatar, Modal } from 'antd';
import './game.css';
import img from './cri.svg';
import coin from './coin.jpg';
const axios = require('axios');
class Configuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configuration: {
                coins: {
                    registration: null,
                    topic_completion: null,
                    performance: null,
                    consecutive_days: null,
                    daily_max_coins: null,
                    daily_increment_coins: null,
                    topic_completion_1: null,
                    topic_completion_2: null,
                    topic_coins_1: null,
                    topic_coins_2: null
                },
                level_unlocking: {
                    level_1: null,
                    level_2: null,
                    level_3: null,
                    level_4: null,
                    level_5: null,
                    level_6: null,
                    level_7: null,
                    level_8: null,
                    level_9: null,
                    level_10: null
                },
                badges: {
                    program_percent_20: null,
                    program_percent_40: null,
                    program_percent_60: null,
                    program_percent_80: null,
                    program_percent_100: null
                }
            }
        }
        this.inputChange = this.inputChange.bind(this);
        this.onClickhandler = this.onClickhandler.bind(this);
        this.inputStyle = this.inputStyle.bind(this);
        this.percentBadgeLevel = this.percentBadgeLevel.bind(this);
        this.coinsInput = this.coinsInput.bind(this);

    }
    inputChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        let final = name.split(".", 2);
        let section = final[0];
        let key = final[1];
        let testObj = this.state.configuration;
        let currentState = testObj[section];
        currentState[key] = value;
        this.setState({ configuration: testObj }, () => console.log("state after on change", this.state.configuration));

    }
    onClickhandler() {

        axios.put('http://localhost:8081/configuration', this.state.configuration)
            .then((response) => {
                this.componentDidMount();
                console.log("response", response);
                Modal.success({ content: "successfully submitted" })

            })
            .catch((error) => {
                console.log("error", error);
            });
       
        

    }
    componentDidMount() {

        axios.get('http://localhost:8081/configuration/getdetails').then((response) => {
            console.log("response", response.data)
            response.data.map((item, index) => {
                console.log("index", index);

                let testObj = this.state.configuration;
                let currentState = testObj[item.section];
                currentState[item.key] = item.value;
                this.setState({ configuration: testObj }, () => {
                    console.log("setstate");
                })
                console.log("test obj", testObj)
            })
        })
    }

    inputStyle(placeholder, namesArray) {
        let rows = [];
        for (var index in namesArray) {
            let name = namesArray[index].split(".", 2);
            let keyName = name[1];
            let sectionName = name[0];
            if (name[0] == "percent") {
                rows.push(
                    <div>
                        <Input readOnly

                            type="textarea"
                            onChange={this.inputChange}
                            className="inputStyle"
                            name={namesArray[index]}
                            placeholder={placeholder}
                            value={keyName} />
                        <br />
                        <br />
                    </div>
                )

            }
            if ((name[0] == "level_unlocking") || (name[0] == "badges")) {
                console.log('statename', this.state.configuration[sectionName][keyName]);
                rows.push(
                    <div>
                        <Input

                            type="textarea"
                            onChange={this.inputChange}
                            className="inputStyle"
                            name={namesArray[index]}
                            placeholder={placeholder}
                            value={this.state.configuration[sectionName][keyName]} />
                        <br />
                        <br />
                    </div>
                )

            }

        }
        return rows;
    }

    coinsInput(placeholder, namesArray) {
        let rows = [];

        for (var index in namesArray) {
            let name = namesArray[index].split(".", 2);
            let sectionName = name[0];
            let keyName = name[1];
            console.log("key", index)
            rows.push(
                <div>
                    <Input
                        onChange={this.inputChange}
                        name={namesArray[index]}
                        placeholder={placeholder}
                        value={this.state.configuration[sectionName][keyName]} />

                    <br />
                    <br />
                </div>)

        }
        return rows;

    }
    percentBadgeLevel(number, label) {
        if (label == "percent") {
            var rows = [];
            for (let index = 0; index < number; index++) {
                rows.push(
                    <div>
                        <h3>
                            Percentage :
                        </h3>
                        <br />
                    </div>
                )

            }
        }
        else if (label == "badge") {
            var rows = [];
            for (let index = 0; index < number; index++) {
                rows.push(<div>
                    <h3>
                        Badge :
                    </h3>
                    <br />
                </div>
                )

            }
        }
        else {
            var rows = [];
            for (let index = 1; index <= number; index++) {
                rows.push(
                    <div>
                        <h3>
                            Level {index}  :
                        </h3>
                        <br />
                    </div>
                )

            }
        }
        return rows
    }
    render() {
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}  >
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3}  >
                            <img src={img} className="img" ></img>
                        </Col>
                        <Col xs={15} sm={15} md={15} lg={15} />
                        <Col xs={4} sm={4} md={4} lg={4}  >
                            <h3 className="name">Co-ordinator Name</h3>
                            <h3 className="name">Co-ordinator</h3>
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1} >

                            <div className="avatar1">
                                <Avatar
                                    shape="circle"
                                    icon="user"
                                    size={100}
                                /></div>
                        </Col>
                    </Row>
                    <hr className="vl" />
                    <div
                        className="verticalline"
                        style={{ marginLeft: 120, marginTop: -20 }}>
                    </div>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} />
                        <h1>Coins</h1>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} />
                        <Col xs={7} sm={7} md={7} lg={7} >
                            <h3>
                                Number of coins
                                <img src={coin} className="coin" ></img>
                                for student registration :
                                </h3>
                            <br />
                            <h3 >
                                Number of coins
                                <img src={coin} className="coin" ></img>
                                for each topic completion :
                                </h3>
                            <br />
                            <h3 >Number of coins
                                 <img src={coin} className="coin" ></img>
                                based on performance :
                                </h3>
                            <br />
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} >
                            {this.coinsInput("Enter coins",
                                ["coins.registration",
                                    "coins.topic_completion",
                                    "coins.performance"
                                ]
                                )}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} />
                        <Col xs={7} sm={7} md={7} lg={7} >
                            <h3>Coins for daily activity  :</h3>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} sm={5} md={5} lg={5} />
                        <Col xs={5} sm={5} md={5} lg={5} >
                            <h3  >Number of consecutive days :</h3>
                            <br />
                            <h3 >Day increment coins  :</h3>
                            <br />
                            <h3 >Maximum coins :</h3>
                            <br />
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} >
                            {this.coinsInput("Enter coins",
                                ["coins.consecutive_days",
                                    "coins.daily_increment_coins",
                                    "coins.daily_max_coins"])}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} />
                        <Col xs={7} sm={7} md={7} lg={7} >
                            <h3  >Coins for topic completions per day :</h3>
                            <br />
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} >
                            {this.coinsInput("Enter topics",
                                ["coins.topic_completion_1",
                                    "coins.topic_completion_2"])}
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1} />
                        <Col xs={2} sm={2} md={2} lg={2} >
                            {this.coinsInput("Enter coins",
                                ["coins.topic_coins_1",
                                    "coins.topic_coins_2"])}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} />
                        <Col xs={4} sm={4} md={4} lg={4} >
                            <h2  >Badges for students :</h2>
                            <br />
                        </Col> </Row>
                    <Row>
                        <Col xs={7} sm={7} md={7} lg={7} />
                        <Col xs={3} sm={3} md={3} lg={3} >
                            {this.percentBadgeLevel(5, "percent")}</Col>
                        <Col xs={2} sm={2} md={2} lg={2} >
                            {this.inputStyle("Enter Percentage",
                                ["percent.percent_20",
                                    "percent.percent_40",
                                    "percent.percent_60",
                                    "percent.percent_80",
                                    "percent.percent_100"])}
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1} />

                        <Col xs={2} sm={2} md={2} lg={2} >
                            {this.percentBadgeLevel(5, "badge")}
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} >

                            {this.inputStyle("Enter Badge",
                                ["badges.program_percent_20",
                                    "badges.program_percent_40",
                                    "badges.program_percent_60",
                                    "badges.program_percent_80",
                                    "badges.program_percent_100"])}
                            <br />
                            <br />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} />
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} />
                        <Col xs={7} sm={7} md={7} lg={7} >
                            <h2 >Minimum coins for unlocking the levels  :
                                <br />
                                <br />
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={7} sm={7} md={7} lg={7} />
                        <Col xs={3} sm={3} md={3} lg={3} >
                            {this.percentBadgeLevel(10, "level")}
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} >
                            {this.inputStyle("Enter Coins",
                                ["level_unlocking.level_1",
                                    "level_unlocking.level_2",
                                    "level_unlocking.level_3",
                                    "level_unlocking.level_4",
                                    "level_unlocking.level_5",
                                    "level_unlocking.level_6",
                                    "level_unlocking.level_7",
                                    "level_unlocking.level_8",
                                    "level_unlocking.level_9",
                                    "level_unlocking.level_10"])}
                            < br />
                            <br />
                        </Col>
                        <Col xs={5} sm={5} md={5} lg={5} />
                    </Row>
                    <Row>
                        <Col xs={18} sm={18} md={18} lg={18} />
                        <Col xs={3} sm={3} md={3} lg={3} >
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3} >
                            <Button
                                type="primary"
                                onClick={this.onClickhandler}
                                className="savebutton">
                                SAVE
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Configuration;