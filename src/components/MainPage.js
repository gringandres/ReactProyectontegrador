import React, { useState } from 'react';
import Modal from '../utils/ModalComponent';
import Navbar from '../utils/NavbarComponent'

function MainPage() {
  const [show, setshow] = useState(false)

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <>
      <Navbar
        handleShow={handleShow}
      />
      <Modal
        show={show}
        handleClose={handleClose}
      />
    </>
  )

}

export default MainPage;

