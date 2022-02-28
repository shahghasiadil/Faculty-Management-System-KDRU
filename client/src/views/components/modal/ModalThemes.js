import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalConfig = [
  {
    id: 1,
    title: 'Primary',
    modalColor: 'modal-primary',
    btnColor: 'primary'
  },
  {
    id: 2,
    title: 'Secondary',
    modalColor: 'modal-secondary',
    btnColor: 'secondary'
  },
  {
    id: 3,
    title: 'Success',
    modalColor: 'modal-success',
    btnColor: 'success'
  },
  {
    id: 4,
    title: 'Danger',
    modalColor: 'modal-danger',
    btnColor: 'danger'
  },
  {
    id: 5,
    title: 'Warning',
    modalColor: 'modal-warning',
    btnColor: 'warning'
  },
  {
    id: 6,
    title: 'Info',
    modalColor: 'modal-info',
    btnColor: 'info'
  },
  {
    id: 7,
    title: 'Dark',
    modalColor: 'modal-dark',
    btnColor: 'dark'
  }
]

const ModalTheme = () => {
  const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  const renderModal = ModalConfig.map(item => {
    return (
      <div className={`theme-${item.modalColor}`} key={item.id}>
        <Button.Ripple color={item.btnColor} onClick={() => toggleModal(item.id)} key={item.title} outline>
          {item.title}
        </Button.Ripple>
        <Modal
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className='modal-dialog-centered'
          modalClassName={item.modalColor}
          key={item.id}
        >
          <ModalHeader toggle={() => toggleModal(item.id)}>{item.title}</ModalHeader>
          <ModalBody>
            Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans carrot cake
            pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi bears cupcake dessert.
          </ModalBody>
          <ModalFooter>
            <Button color={item.btnColor} onClick={() => toggleModal(item.id)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default ModalTheme
