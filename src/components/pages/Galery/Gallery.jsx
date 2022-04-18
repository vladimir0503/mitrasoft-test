import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Row, Spinner } from 'react-bootstrap';
import { fetchImages } from '../../../redux/sagas';
import Item from './Item';

const Gallery = () => {

  const { images, loading } = useSelector(state => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchImages());
  }, []);

  console.log(images);

  return (
    <Container>
      <h1 className='mb-4'>Галерея</h1>
      <Container>
        {loading
          ? <Spinner animation="border" />
          : <Row className="justify-content-md-between">
            {images.map((cat, i) => (
              <Card className='mb-3' key={i} style={{ width: '18rem' }}>
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