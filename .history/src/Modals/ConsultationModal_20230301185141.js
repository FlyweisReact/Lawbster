
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
                <div>
                    <p>How it Works?</p>
                    
                    <div>
                        
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    );
  }
  

  export default CunsultationModal