import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { TiWeatherSnow} from "react-icons/ti";
function Header() {
    return (
        <div>
              <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
    <h4><TiWeatherSnow color='white'/></h4>
      <Link to="/Banner"><Nav.Link href="#home">Welcome</Nav.Link></Link>
      <h4><TiWeatherSnow color='white'/></h4>
    </Nav>
    </Container>
  </Navbar>
    
        </div>
        </div>
    )
}

export default Header
