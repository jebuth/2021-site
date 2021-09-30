import './App.css';
// import NavBar from './Navbar';

import Tile from './Tile';
import Footer from './Footer';
import {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      
      <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand>Navbar</Navbar.Brand>
      </Navbar>

      <div>
        <Tile title="App 1"/>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
