import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import "./body.css";
import { useRef, useState } from "react";
import axios from "axios";
import download from "downloadjs";

const Body = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const enteredUrl = useRef("");

  const onDownloadClick = async () => {
    const linkValue = enteredUrl.current.value;
    if (!linkValue || linkValue.trim() === "") {
      setErrorMessage(
        "Please enter a YouTube video or playlist link to proceed."
      );
    } else {
      setErrorMessage(null);
      const res = await axios.get("/api/download", {
        params: {
          url: linkValue.trim(),
        },
        responseType: "blob",
      });

      download(res.data, `${res.headers.get("X-File-Title")}`);
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-start vh-100 py-4">
      {/* Heading and Form */}
      <div className="text-center mb-5">
        <h2 className="text-danger">
          World's First YouTube Downloader That Downloads Entire Playlists in
          One Go
        </h2>
        <p className="lead mt-2">
          Easily download your favorite YouTube videos and playlists with just a
          few clicks. Our tool supports bulk downloads to save you time and
          effort.
        </p>

        <div className="d-flex justify-content-center align-items-center mt-3">
          <Row className="w-100 justify-content-center">
            <Col xs="auto">
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  ref={enteredUrl}
                  placeholder="Paste Video or Playlist link"
                  className="me-2 mb-2"
                  style={{
                    minWidth: "300px",
                    borderColor: "red",
                    transition: "box-shadow 0.2s ease-in-out",
                  }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 0 10px red")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
                <Button
                  variant="danger"
                  className="download-button d-flex align-items-center mb-2"
                  onClick={onDownloadClick}
                >
                  <span className="download-text">Download</span>
                  <BsDownload className="download-icon" />
                </Button>
              </Form>
              {errorMessage && (
                <p className="text-danger mt-2">{errorMessage}</p>
              )}
            </Col>
          </Row>
        </div>
      </div>

      {/* Additional Content */}
      <div className="text-center mt-auto mb-auto">
        <Row>
          <Col md={4}>
            <Card className="hover-shadow mb-3">
              <Card.Body>
                <Card.Title>Fast Downloads</Card.Title>
                <Card.Text>
                  Our tool ensures high-speed downloads so you can get your
                  videos quickly without long waits.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="hover-shadow mb-3">
              <Card.Body>
                <Card.Title>Multiple Formats</Card.Title>
                <Card.Text>
                  Currently supports MP4, with more formats to be introduced
                  soon to meet your needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="hover-shadow mb-3">
              <Card.Body>
                <Card.Title>Easy to Use</Card.Title>
                <Card.Text>
                  User-friendly interface that makes downloading YouTube videos
                  and playlists straightforward.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="hover-shadow mb-3">
              <Card.Body>
                <Card.Title>High Quality</Card.Title>
                <Card.Text>
                  Download videos in high quality to ensure the best viewing
                  experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="hover-shadow mb-3">
              <Card.Body>
                <Card.Title>Secure Downloads</Card.Title>
                <Card.Text>
                  Our tool ensures secure downloads with no malware or unwanted
                  software.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3 hover-shadow">
              <Card.Body>
                <Card.Title>Customizable Settings</Card.Title>
                <Card.Text>
                  Currently supports only high quality, with various settings
                  and preferences to be introduced soon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Body;
