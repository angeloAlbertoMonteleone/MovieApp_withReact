import { Component } from 'react';
import './App.css';
import Aux from '../src/Auxiliary/Auxiliary';
import Navbar from './components/navbar/navbar';
import FirstMain from './components/main1/firstMain';

class App extends Component  {
  render () {
    return (
      <Aux>
        <Navbar></Navbar>
        <FirstMain></FirstMain>
      </Aux>
    )
  }
}

export default App;
