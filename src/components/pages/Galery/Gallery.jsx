import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Row, Spinner } from 'react-bootstrap';
import { uploadImages } from '../../../redux/imagesReducer';
import Item from './Item';

const Gallery = () => {

  const { images, loading } = useSelector(state => state);

  React.useEffect(() => {
    uploadImages();
  }, []);

  return (
    <Container>
      <h1 style={{ marginBottom: '20px' }}>Галерея</h1>
      <Container>
        {loading
          ? <Spinner animation="border" />
          : <Row className="justify-content-md-between">
            {images.map((cat, i) => (
              <Card key={i} style={{ width: '18rem' }}>
                <Card.Title>Категория {i + 1}</Card.Title>
                <Card.Body>
                  {cat.map(img => <Item key={img.id} url={img.url} id={img.id} />)}
                </Card.Body>
              </Card>
            ))}
          </Row>
        }
      </Container>
    </Container>
  );
};

export default Gallery;