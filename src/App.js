import './App.css';
import NavBar from './Navbar';

import Tile from './Tile';
import Footer from './Footer';
import {Container,Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    
      <div>
        <NavBar/>
        <Container>
          
          <Row className="d-flex justify-content-center">
            <Col className="d-flex justify-content-center bordered"><Tile title='app1' /></Col>
            <Col className="d-flex justify-content-center bordered"><Tile title='app1' /></Col>
            <Col className="d-flex justify-content-center bordered"><Tile title='app1' /></Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col className="d-flex justify-content-center bordered"><Tile title='app1' /></Col>
            <Col className="d-flex justify-content-center bordered"><Tile title='app1' /></Col>
            <Col className="d-flex justify-content-center bordered"><Tile title='app1' /></Col>
          </Row>
        
        </Container>
        <Footer/>
      </div>
      

    
  );
}

export default App;
