import React, { useState } from 'react';
import { Button, Modal, ModalBody} from 'reactstrap';
import CreateAppointment from '../Calendar/CreateAppointment';

const ModalCreateAppointment = (props) => {
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
        <CreateAppointment {...props}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalCreateAppointment;