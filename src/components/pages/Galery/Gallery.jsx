import React from 'react'
import { Container, Card, Row } from 'react-bootstrap';
import { getImages } from '../../../api/api';

const Gallery = () => {

  React.useEffect(() => {
    getImages().then(data => console.log(data))
  }, []);

  return (
    <Container fluid>
      <h1>Галерея</h1>
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Card style={{ width: '18rem' }}>
            <Card.Title>Первая категория</Card.Title>
            <Card.Body>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Title>Вторая категория</Card.Title>
            <Card.Body>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Title>Третья категория</Card.Title>
            <Card.Body>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Title>Четвертая категория</Card.Title>
            <Card.Body>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Container>
  );
};

export default Gallery;