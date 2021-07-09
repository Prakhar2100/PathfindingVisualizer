import React , {Component} from 'react';
import { Navbar,NavbarBrand ,Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />

                        <NavbarBrand  className="mr-auto menu-title">PathFinding Visualizer</NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/astar">Astar
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/dijkshitra">Dijkshitra
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/dfs">Dfs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/bfs">Bfs
                                    </NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>

                    </div>
                </Navbar>
                {/* <Jumbotron>
                    <div classname="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Pathfinding Visualizer</h1>
                                <p>Visualize path between 2 nodes based on the selected algorithm</p>
                            </div>
                        </div>

                    </div>
                </Jumbotron> */}

            </React.Fragment>
        )
    }
}

export default Header