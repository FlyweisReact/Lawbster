import React from 'react'
import ServiceModal from '../Modals/ServiceModal'

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
<>
<ServiceModal
    show={modalShow}
        onHide={() => setModalShow(false)} />
</>
    
  

  )
}

export default Navbar