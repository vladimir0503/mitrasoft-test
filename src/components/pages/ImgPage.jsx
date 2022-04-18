import React from 'react';
import { Spinner, Card, Image, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { fetchImageInfo } from '../../redux/sagas';

const ImgPage = () => {

  const { imageInfo, loading } = useSelector(state => state);

  const dispatch = useDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  React.useEffect(() => {
    dispatch(fetchImageInfo(id));
  }, []);

  return (
    <Container>
      <h1 className='mb-4'>Информация</h1>
      {loading
        ? <Spinner animation="border" />
        : <Card className='flex-row'>
          <Image width={300} height={300} src={imageInfo.url} />
          <Card.Body>
            <div className='mb-3'>
              <h3>{imageInfo.title}</h3>
              <a href={imageInfo.url}>{imageInfo.url}</a>
            </div>
            <Button onClick={goHome}>Назад</Button>
          </Card.Body>
        </Card>
      }
    </Container>
  );
};

export default ImgPage