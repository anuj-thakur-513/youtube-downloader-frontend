import { Row, Col, Card, Button } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import { isPlaylist } from "../utils/youtube";
import axios from "axios";

const VideoDetails = ({
  videoDetails,
  url,
  setIsDownloading,
  setDownloadText,
  setDownloadErrorMessage,
}) => {
  const { thumbnail, title, qualities } = videoDetails;

  const onDownloadClick = async (quality) => {
    setIsDownloading(true);

    if (!isPlaylist(url)) {
      setDownloadText("Video");
    } else {
      setDownloadText("Playlist");
    }

    try {
      const response = await axios.post(
        "/api/video/download",
        {
          url: url,
          quality: quality,
        },
        {
          responseType: "blob",
        }
      );
      const blob = new Blob([response.data]);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = response.headers["x-file-title"];
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      setDownloadErrorMessage(
        "An error occured while downloading. Please try again later"
      );
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Card className="mb-4">
      <Row className="g-0">
        <Col md={4}>
          <Card.Img
            variant="top"
            src={thumbnail}
            alt="Video Thumbnail"
            className="rounded-2 img-fluid m-1"
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>
              <strong>{title}</strong>
            </Card.Title>
            <Row>
              {qualities?.map((quality) => (
                <Col key={quality.itag} xs={6} className="d-grid mb-2">
                  <Button
                    variant="danger"
                    className="d-flex align-items-center justify-content-center"
                    onClick={() => onDownloadClick(quality.itag)}
                  >
                    <span className="me-2">{quality.qualityLabel}</span>
                    <BsDownload />
                  </Button>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default VideoDetails;
