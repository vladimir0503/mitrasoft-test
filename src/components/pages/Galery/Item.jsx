import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Image, Button } from 'react-bootstrap';

const Item = ({ url, id }) => {
  const [hideBtn, setHide] = React.useState(true);

  const navigate = useNavigate();

  const goToImgPage = () => {
    navigate(`/image/${id}`);
  };

  return (
    <Container
      style={{marginBottom: '20px'}}
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
    >
      <Button
        className={`mb-1 ${hideBtn ? 'opacity-0' : 'opacity-100'}`}
        variant="primary"
        disabled={hideBtn}
        onClick={goToImgPage}
      >
        Подробнее
      </Button>
      <Image width={150} height={150} src={url} />
    </Container>
  );
};

export default Item;