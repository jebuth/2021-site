import './App.css';
<<<<<<< HEAD
import Tile from './Tile';
import Footer from './Footer';
import MyNav from './MyNav';
import {Row, Col} from 'react-bootstrap';
=======
import NavBar from './Navbar';

import Tile from './Tile';
import Footer from './Footer';
import {Container,Col, Row} from 'react-bootstrap';
>>>>>>> 05eb176d9dbfbfb2442c05645f40f028c8a157fc
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
<<<<<<< HEAD

    <div>
      
      <MyNav />

        <main className="container-fluid">      
          <div>
            <Row className="justify-content-sm-center bordered-red">
              <Col lg={6} className='bordered-yellow d-flex justify-content-center'>
                  <Tile title="App 1" />
                  <Tile title="App 1" />
                  <Tile title="App 1" />
              </Col>
            </Row>
            <Row className="justify-content-sm-center bordered-red">
              <Col lg={6} className='bordered-yellow d-flex justify-content-center'>
                  <Tile className='tile' title="App 1" />
                  <Tile title="App 1" />
              </Col>
            </Row>
          </div>
        
        </main> 
        
        <Footer/>
      
    </div>
=======
    
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
      

    
>>>>>>> 05eb176d9dbfbfb2442c05645f40f028c8a157fc
  );
}

export default App;
