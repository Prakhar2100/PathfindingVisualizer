import React , {Component} from 'react';
import Pathfinder from './components/Pathfinder';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Pathfinder />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
