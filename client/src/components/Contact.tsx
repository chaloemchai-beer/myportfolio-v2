import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <InputGroup className="mb-3">
            <DropdownButton
              style={{ background: "black", border: "none", outline: "none" }}
              variant="outline-secondary"
              title="Name Prefix"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Mr.</Dropdown.Item>
              <Dropdown.Item href="#">Miss</Dropdown.Item>
              <Dropdown.Item href="#">Mrs.</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Boy/Girl</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="Text input with dropdown button" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Tel." />
          </InputGroup>
          <div className="d-grid gap-2">
            <Button
              style={{ background: "black", border: "none", outline: "none" }}
            >
              Accept
            </Button>
          </div>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
