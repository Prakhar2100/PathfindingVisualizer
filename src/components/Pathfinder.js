import React , {Component} from 'react';
import Pathfinderastar from './PathfinderAstar';
import Pathfinderdiju from './PathfinderDiju';
import Header from './HeaderComponent';
import Pathfinderdfs from './PathfinderDfs';
import Pathfinderbfs from './PathfinderBfs';
import { Switch , Route, Redirect } from 'react-router-dom';

class Pathfinder extends Component {

    render(){

        const Astar = () => {
            return(
                <Pathfinderastar />
            )
        }

        const Dijkshitra = () => {
            return(
                <Pathfinderdiju />
            )
        }

        const Dfs = () => {
            return(
                <Pathfinderdfs />
            )
        }

        const Bfs = () => {
            return(
                <Pathfinderbfs />
            )
        }

        return (
        <div>
            <Header />
                <Switch>
                    <Route path="/astar" component={Astar} />
                    <Route exact path="/dijkshitra" component={Dijkshitra} />
                    <Route exact path="/dfs" component={Dfs} />
                    <Route exact path="/bfs" component={Bfs} />
                    <Redirect to="/astar" />
                </Switch>
        </div>
        );
    }
}

export default Pathfinder;
