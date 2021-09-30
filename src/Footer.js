import react from 'react';
import {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {

    return(
        <div className="fixed-bottom">  
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand>Footer</Navbar.Brand>
            </Navbar>
        </div>
    )

};

export default Footer;