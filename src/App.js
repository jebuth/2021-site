import './App.css';
import Tile from './Tile';
import Footer from './Footer';
import MyNav from './MyNav';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (

    <div>
      
      <MyNav />

        <main className="container-fluid">      
          <div className="margin-top-row">
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
  );
}

export default App;
