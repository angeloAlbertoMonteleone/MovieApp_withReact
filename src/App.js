import { Component, useRef } from 'react';
import './App.css';
import Aux from '../src/Auxiliary/Auxiliary';
import Nav from './components/navbar/navbar';
import FirstMain from './components/main1/firstMain';
import MovieRow from './components/row/row';
import requests from './environments/environments';

class App extends Component  {
  render () {
    return (
      <Aux>
        <Nav></Nav>
        <FirstMain></FirstMain>
        <MovieRow title="Most Popular" fetchUrl={requests.fetchPopular}></MovieRow>
        <MovieRow title="Comedies" fetchUrl={requests.fetchComedies}></MovieRow>
        <MovieRow title="Upcoming Movies" fetchUrl={requests.fetchUpcoming}></MovieRow>
        <MovieRow title="Family Movies" fetchUrl={requests.fetchFamilies}></MovieRow>
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated}></MovieRow>
        <MovieRow title="The Originals" fetchUrl={requests.fetchOriginals} biggerRow className ="biggerRow"></MovieRow>
        <MovieRow title="Dramatic Movies" fetchUrl={requests.fetchDramas}></MovieRow>
        <MovieRow title="Thrillers" fetchUrl={requests.fetchThrillers}></MovieRow>
        <MovieRow title="Horrors" fetchUrl={requests.fetchHorrors}></MovieRow>
      </Aux>
    )
  }
}

export default App;
