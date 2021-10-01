
import {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const MyNav = () => {

    return(
        <div className="fixed-top">  
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand>nav</Navbar.Brand>
            </Navbar>
        </div>
    )

}

export default MyNav;