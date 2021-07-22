import React, { useState } from 'react';
import { Button, Modal, ModalBody} from 'reactstrap';
import ChangeAppointment from '../Calendar/ChangeAppointment';


const ModalChangeAppointment = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <ChangeAppointment/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ModalChangeAppointment;