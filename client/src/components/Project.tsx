import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Project = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <CardGroup>
            <Card className="me-5">
              <Card.Img
                variant="top"
                src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo.jpg"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo.jpg"
              />
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card className="me-5">
              <Card.Img
                variant="top"
                src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo.jpg"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo.jpg"
              />
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card className="me-5">
              <Card.Img
                variant="top"
                src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo.jpg"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.techtalkthai.com/wp-content/uploads/2019/11/new-microsoft-edge-logo.jpg"
              />
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
