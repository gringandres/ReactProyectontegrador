import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Modal from '../utils/ModalComponent';
import Navbar from '../utils/NavbarComponent';
import Carousel from '../utils/CarouselComponent';
import CardBody from '../utils/CardBody'

function MainPage() {
  const [show, setshow] = useState(false)
  const [state] = useState([
    {
      title: "Adidas",
      img: require('../img/default.jpg'),
    },
    {
      title: "Nike",
      img: require('../img/default.jpg'),
    },
    {
      title: "Reebook",
      img: require('../img/default.jpg'),
    },
    {
      title: "Oakly",
      img: require('../img/default.jpg'),
    },
    {
      title: "Ganga",
      img: require('../img/default.jpg'),
    },
    {
      title: "Fox",
      img: require('../img/default.jpg'),
    }
  ])

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <>
      <Navbar
        handleShow={handleShow}
      />
      <Carousel />

      <Container style={{ display: "flex", flexWrap:"wrap", justifyContent:"center" }}>
        {state.map(data =>
          <CardBody
            title={data.title}
            img={data.img}
          />
        )}
      </Container>

      <Modal
        show={show}
        handleClose={handleClose}
      />
    </>
  )

}

export default MainPage;

