
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
                        <ul>
                            <li>{">"}Property Possession Delay - RERA</li>
                            <li>{">"}Mutual Consent Divorce</li>
                            <li>{">"}Cheque Bounce Complaint</li>
                            <li>{">"}Unpaid Salary - Legal Notice</li>
                            <li>{">"}Consumer Matter - Legal Notice</li>
                            <li>{">"}Consumer Case</li>
                            <li>{">"}Suit - Recovery of Money</li>
                        </ul>
                        <ul>
                            <li>{">"}Possession Delay - NCLT</li>
                            <li>{">"}Trademark Registration</li>
                            <li>{">"}Legal Notice</li>
                            <li>{">"}Wrongful Termination - Legal Notice</li>
                            <li>{">"}Canada Immigration (PR)</li>
                            <li>{">"}Legal Documentation</li>
                            <li>{">"}Others</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Legal Services</p>
                    <p>Legal cases with fixed pricing, standardized processes, and firm timelines</p>

                    <div>
                        <ul>
                            <li>{">"}Property Possession Delay - RERA</li>
                            <li>{">"}Mutual Consent Divorce</li>
                            <li>{">"}Cheque Bounce Complaint</li>
                            <li>{">"}Unpaid Salary - Legal Notice</li>
                            <li>{">"}Consumer Matter - Legal Notice</li>
                            <li>{">"}Consumer Case</li>
                            <li>{">"}Suit - Recovery of Money</li>
                        </ul>
                        <ul>
                            <li>{">"}Possession Delay - NCLT</li>
                            <li>{">"}Trademark Registration</li>
                            <li>{">"}Legal Notice</li>
                            <li>{">"}Wrongful Termination - Legal Notice</li>
                            <li>{">"}Canada Immigration (PR)</li>
                            <li>{">"}Legal Documentation</li>
                            <li>{">"}Others</li>
                        </ul>
                    </div>
                </div>
         </div>
        </Modal.Body>
      </Modal>
    );
  }
  

  export default ServiceModal