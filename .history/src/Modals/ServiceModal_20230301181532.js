
import { Modal, Button } from 'react-bootstrap'


function ServiceModal(props) {

    return (
      <Modal
        {...props}
        // size="xl"
        fullscreen={'xxl-down'}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
         <div className='ServiceModalTwo'>
                <div>
                    <p>Legal Services</p>
                    <p>Legal cases with fixed pricing, standardized processes, and firm timelines</p>

                    <div>
                        
                    </div>
                </div>
         </div>
        </Modal.Body>
      </Modal>
    );
  }
  

  export default ServiceModal