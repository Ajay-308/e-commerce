import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Badge,
  Nav,
  Dropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" varient="light" style={{ height: 95 }}>
      <Container>
        <Navbar.Brand>
          <a href="#home">Shopping cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 550 }}
            placeholder="search product"
            className="m-auto"
          />
          {/* //provide auto spacing */}
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <Badge>0</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 300 }}>
              <span style={{ padding: 15 }}>cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
