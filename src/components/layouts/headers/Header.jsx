import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goto = (path) => {
    navigate(path);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Container>
        <Navbar.Brand
          onClick={() => goto("/")}
          style={{ cursor: "pointer", color: "#0072CE" }}
        >
          Ajou Health With-Us
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => goto("/mypage")}
              style={{ color: "#0072CE" }}
            >
              내 페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => goto("/articles")}
              style={{ color: "#0072CE" }}
            >
              게시판 보러가기
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{ color: "#0072CE" }}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: "#0072CE" }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{ color: "#0072CE" }}>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{ color: "#0072CE" }}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              onClick={() => goto("/profile")}
              style={{ color: "#0072CE" }}
            >
              프로필
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{ color: "#0072CE" }}>
              로그인
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
