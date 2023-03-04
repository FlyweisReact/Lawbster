
import { Modal  } from 'react-bootstrap'

function CunsultationModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className='consultationModal'>
                
            </div>
        </Modal.Body>
      </Modal>
    );
  }
  

  export default CunsultationModal