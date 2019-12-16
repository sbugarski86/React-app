import React, { useState } from 'react';
import ContactForm from './ContactForm';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink
} from 'reactstrap';

const Contact = props => {
  const { buttonLabel, className } = props;

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
          <ContactForm />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Contact;
