import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const Container = styled.div`
  ${(props) => props.theme.flex.center}
  width: 100%;
  height: 100%;
`;

function Personal() {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./images/user1.jpg" />
        <Card.Body style={{ border: "none", textAlign: "center" }}>
          <Card.Title className="text-center">소개</Card.Title>
          <Card.Text className="text-center">주황색 배경의 꽉꽉 오리</Card.Text>
          <br />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Link href="#" className="text-center">
            내 게시글
          </Card.Link>
          <Card.Link href="#" className="text-center">
            쪽지함
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Personal;
