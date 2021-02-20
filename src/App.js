import { Component } from 'react';
import './App.css';
import Aux from '../src/Auxiliary/Auxiliary';
import Navbar from './components/navbar/navbar';
import FirstMain from './components/main1/firstMain';
import SecondMain from './components/main2/secondMain';

class App extends Component  {
  render () {
    return (
      <Aux>
        <Navbar></Navbar>
        <FirstMain></FirstMain>
        <SecondMain></SecondMain>
      </Aux>
    )
  }
}

export default App;
