import React from 'react';
import { Card, Image, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <h1 className='mb-4'>Обо мне</h1>
      <Card className='flex-row'>
        <Image width={300} height={300} src={avatar} />
        <Card.Body>
          <h3>Владимир Безобразов</h3>
          <p>Верстаю адаптивно и кроссбраузерно по стандартам HTML5. Пишу стили c помощью препроцессоров Sass и Less.
            Пишу скрипты на чистом JS. Работаю с макетами из Figma и Adobe Photoshop. Имею опыт разработки интерфейсов и SPA на React/Redux.</p>
          <p>Стрек технологий: HTML5, CSS3, SCSS, JavaScript, Git, React, Redux, CSS in JS (styled-components).</p>
          <Button onClick={goHome}>Назад</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;