import React, { useState } from 'react';
import FormikForm from './FormikForm';
import { Button, Modal, ModalHeader, ModalBody, NavLink } from 'reactstrap';

const Contact = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <NavLink style={{ cursor: 'pointer' }} onClick={toggle}>
        Contact
      </NavLink>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 300 }}
        backdropTransition={{ timeout: 300 }}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>Contact information</ModalHeader>
        <ModalBody>
          <FormikForm />
          <Button
            color='danger'
            onClick={toggle}
            style={{ width: '80%', marginLeft: '10%' }}
          >
            Cancel
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Contact;
