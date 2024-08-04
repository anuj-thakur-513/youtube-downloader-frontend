import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" className="header">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="#">YouTube Downloader</Navbar.Brand>
        <div className="d-flex">
          {/* You can add more navbar items here if needed */}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
