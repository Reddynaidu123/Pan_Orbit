import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch,withRouter } from 'react-router-dom'
import Component1 from './Component1.js'
import Component2 from './Component2.js'
// import LeaderBoard from './LeaderBoard.js';

class Routes extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path ="/" component={Component1} />
                    <Route path ="/Component2" component={Component2} />
                    {/* <Route path ="/leaderboard" component={LeaderBoard} /> */}
                </Switch>
            </Router>
        );
    }
}

export default Routes;
// export default withRouter(Routes);

