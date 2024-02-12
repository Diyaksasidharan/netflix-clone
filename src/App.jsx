
import './App.css';
import requests from './Requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';





function App() {
  return (
    <div className="App">
            <Nav/>
            <Banner fetchUrl= {requests.fetchNetflixOriginals}/>
            <Row isPoster= {true} title="NetflixOriginals" fetchUrl= {requests.fetchNetflixOriginals} />
            <Row title="Trending In India" fetchUrl= {requests.fetchTrending} />
            <Row title="Top-Rated" fetchUrl= {requests.fetchTopRated} />
            <Row title="Action-Movies" fetchUrl= {requests.fetchActionMovies} />
            <Row title="Comedy-Movies" fetchUrl= {requests.fetchComedyMovies} />
            <Row title="Horror-Movies" fetchUrl= {requests.fetchHorrorMovies} />
            <Row title="Romantic-Movies" fetchUrl= {requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl= {requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
