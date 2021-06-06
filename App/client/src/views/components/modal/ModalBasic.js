import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'

const ModalBasic = () => {
  const [basicModal, setBasicModal] = useState(false)
  const [centeredModal, setCenteredModal] = useState(false)
  const [disabledModal, setDisabledModal] = useState(false)
  const [disabledAnimation, setDisabledAnimation] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button.Ripple color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Basic Modal
        </Button.Ripple>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Basic Modal</ModalHeader>
          <ModalBody>
            <h5>Check First Paragraph</h5>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
            candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
            liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className='vertically-centered-modal'>
        <Button.Ripple color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
          Vertically Centered
        </Button.Ripple>
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
          <ModalBody>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
            candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
            liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
              Accept
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
      <div className='disabled-backdrop-modal'>
        <Fragment>
          <Button.Ripple color='primary' outline onClick={() => setDisabledModal(!disabledModal)}>
            Disabled Backdrop
          </Button.Ripple>
          <Modal
            isOpen={disabledModal}
            toggle={() => setDisabledModal(!disabledModal)}
            className='modal-dialog-centered'
            backdrop={false}
          >
            <ModalHeader toggle={() => setDisabledModal(!disabledModal)}>Disabled Backdrop</ModalHeader>
            <ModalBody>
              Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot cake
              wafer candy canes. Biscuit croissant fruitcake bonbon soufflé.
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={() => setDisabledModal(!disabledModal)}>
                Accept
              </Button>{' '}
            </ModalFooter>
          </Modal>
        </Fragment>
      </div>
      <div className='disabled-animation-modal'>
        <Button.Ripple color='primary' outline onClick={() => setDisabledAnimation(!disabledAnimation)}>
          Disabled Animation
        </Button.Ripple>
        <Modal
          isOpen={disabledAnimation}
          toggle={() => setDisabledAnimation(!disabledAnimation)}
          className='modal-dialog-centered'
          fade={false}
        >
          <ModalHeader toggle={() => setDisabledAnimation(!disabledAnimation)}>Disabled Fade</ModalHeader>
          <ModalBody>
            Chocolate bar jelly dragée cupcake chocolate bar I love donut liquorice. Powder I love marzipan donut candy
            canes jelly-o. Dragée liquorice apple pie candy biscuit danish lemon drops sugar plum.
            <Alert className='mt-1' color='success'>
              <div className='alert-body'>Well done! You successfully read this important alert message.</div>
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setDisabledAnimation(!disabledAnimation)}>
              Accept
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ModalBasic
