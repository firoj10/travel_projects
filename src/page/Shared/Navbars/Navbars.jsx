import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css';
import { CiGlobe } from 'react-icons/ci';



const Navbars = () => {

  return (
    <div className="container">
 <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href=""><img src="/Vector.png" className="brand_logo" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='menu_item' href="#features">Home</Nav.Link>
            <Nav.Link className='menu_item' href="#pricing">Hotels</Nav.Link>
            <Nav.Link className='menu_item' href="#pricing">Flights</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link ><div className="wrap-select-arrow border-0 menu_item">
              <select className="form-control active border-0 menu_item pe-2" >
                <option className='pe-2' selected="selected">العربية</option>
                <option className='pe-2'>العربية</option>
              </select>
              <div className="select-arrow ">
                <CiGlobe />
              </div>
            </div>
            </Nav.Link>
            <Nav.Link ><select className="border-0 menu_itemss ">
              <option className="menu_item">Sar</option>
              <option className="menu_item">Sar</option>
              <option className="menu_item">Sar</option>
              <option className="menu_item">Sar</option>
            </select></Nav.Link>
            <Button className='deactive_button border-0' >Sign In</Button>

            <Button className='active_button' variant="outline-primary">Sign Up</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
  );
}

export default Navbars;
