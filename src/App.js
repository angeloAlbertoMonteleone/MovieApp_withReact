import { Component } from 'react';
import './App.css';
import Aux from '../src/Auxiliary/Auxiliary';
import Nav from './components/navbar/navbar';
import FirstMain from './components/main1/firstMain';
import Row from './components/row/row';
import requests from './environments/environments'

class App extends Component  {
  render () {
    return (
      <Aux>
        <Nav></Nav>
        <FirstMain></FirstMain>
        <Row title="Most Popular" fetchUrl={requests.fetchPopular}></Row>
        <Row title="Comedies" fetchUrl={requests.fetchComedies}></Row>
        <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming}></Row>
        <Row title="Family Movies" fetchUrl={requests.fetchFamilies}></Row>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
        <Row title="The Originals" fetchUrl={requests.fetchOriginals} smallerRow></Row>
        <Row title="Dramatic Movies" fetchUrl={requests.fetchDramas}></Row>
        <Row title="Thrillers" fetchUrl={requests.fetchThrillers}></Row>
        <Row title="Horrors" fetchUrl={requests.fetchHorrors}></Row>
      </Aux>
    )
  }
}

export default App;
