import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-danger text-light mt-5 py-4">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="auto">
            <h5>About Us</h5>
            <p>
              Your One-stop solution to download YouTube videos and playlists in
              one go.
            </p>
            <p>More formats other than MP4 will be introduced soon.</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md="auto">
            <p>&copy; 2024 YouTube Downloader. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
