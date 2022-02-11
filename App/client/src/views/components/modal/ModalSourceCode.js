export const modalBasic = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
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
          Vertically Centered
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
          Launch Modal
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
        <React.Fragment>
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
        </React.Fragment>
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
  `}
    </code>
  </pre>
)

export const modalTheme = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
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
      <div className={'theme-{item.modalColor}'} key={item.id}>
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
`}
    </code>
  </pre>
)

export const modalSizes = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalConfig = [
  {
    id: 1,
    btnTitle: 'Extra Small',
    modalTitle: 'Extra Small modal',
    modalClass: 'modal-xs'
  },
  {
    id: 2,
    btnTitle: 'Small Modal',
    modalTitle: 'Small Modal',
    modalClass: 'modal-sm'
  },
  {
    id: 3,
    btnTitle: 'Default Modal',
    modalTitle: 'Default Modal',
    modalClass: ''
  },
  {
    id: 4,
    btnTitle: 'Large Modal',
    modalTitle: 'Large Modal',
    modalClass: 'modal-lg'
  },
  {
    id: 5,
    btnTitle: 'Extra Large Modal',
    modalTitle: 'Extra Large Modal',
    modalClass: 'modal-xl'
  }
]

const ModalSizes = () => {
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
      <React.Fragment key={item.id}>
        <div>
          <Button.Ripple color='primary' onClick={() => toggleModal(item.id)} key={item.title} outline>
            {item.btnTitle}
          </Button.Ripple>
        </div>
        <Modal
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={modal-dialog-centered item.modalClass}
          key={item.id}
        >
          <ModalHeader toggle={() => toggleModal(item.id)}>
            {item.modalTitle}
            {item.title}
          </ModalHeader>
          <ModalBody>
            Halvah powder wafer. Chupa chups pie topping carrot cake cake. Tootsie roll sesame snaps jelly-o marshmallow
            marshmallow jelly jujubes candy. Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet roll.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => toggleModal(item.id)} outline>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default ModalSizes
  `}
    </code>
  </pre>
)

export const modalEvents = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalEvents = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [modalClosed, setModalClosed] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='on-opened-modal'>
        <Button.Ripple color='primary' outline onClick={() => setModalOpened(!modalOpened)}>
          On Opened
        </Button.Ripple>
        <Modal
          isOpen={modalOpened}
          onOpened={() => alert('On Opened Event Fired')}
          toggle={() => setModalOpened(!modalOpened)}
          className='modal-dialog-centered'
        >
          <ModalHeader toggle={() => setModalOpened(!modalOpened)}>Basic Modal</ModalHeader>
          <ModalBody>
            Donut chocolate halvah I love caramels. Dessert croissant I love icing I love dragée candy canes chocolate
            bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setModalOpened(!modalOpened)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className='on-closed-modal'>
        <Button.Ripple color='primary' outline onClick={() => setModalClosed(!modalClosed)}>
          On Closed
        </Button.Ripple>
        <Modal
          isOpen={modalClosed}
          onClosed={() => alert('On Closed Event Fired')}
          toggle={() => setModalClosed(!modalClosed)}
          className='modal-dialog-centered'
        >
          <ModalHeader toggle={() => setModalClosed(!modalClosed)}>Basic Modal</ModalHeader>
          <ModalBody>
            Donut chocolate halvah I love caramels. Dessert croissant I love icing I love dragée candy canes chocolate
            bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setModalClosed(!modalClosed)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default ModalEvents`}
    </code>
  </pre>
)

export const modalForm = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap'

const ModalForm = () => {
  const [formModal, setFormModal] = useState(false)
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div>
        <Button.Ripple color='primary' outline onClick={() => setFormModal(!formModal)}>
          Login Form
        </Button.Ripple>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Login Form</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='email'>Email:</Label>
              <Input type='email' id='email' placeholder='Email Address' />
            </FormGroup>
            <FormGroup>
              <Label for='password'>Password:</Label>
              <Input type='password' id='password' placeholder='Password' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setFormModal(!formModal)}>
              Login
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button.Ripple color='primary' outline onClick={() => setScrollModal(!scrollModal)}>
          Scrolling Long Content
        </Button.Ripple>
        <Modal isOpen={scrollModal} toggle={() => setScrollModal(!scrollModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setScrollModal(!scrollModal)}>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
              pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setScrollModal(!scrollModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button.Ripple color='primary' outline onClick={() => setScrollInnerModal(!scrollInnerModal)}>
          Scrolling Content Inside Modal
        </Button.Ripple>
        <Modal scrollable isOpen={scrollInnerModal} toggle={() => setScrollInnerModal(!scrollInnerModal)}>
          <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
              pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setScrollInnerModal(!scrollInnerModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ModalForm
  `}
    </code>
  </pre>
)

export const modalUnmount = (
  <pre>
    <code className='language-jsx'>
      {`
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, Row, Col } from 'reactstrap'

const ModalDestructuring = () => {
  const [visibility, setVisibility] = useState(false)
  const [unmountOnClose, setUnmountOnClose] = useState(true)

  const changeUnmountOnClose = e => {
    let value = e.target.value
    setUnmountOnClose(JSON.parse(value))
  }

  return (
    <Fragment>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col className='mb-sm-0 mb-1' sm='6' md='4' lg='2'>
            <Input type='select' name='unmountOnClose' id='unmountOnClose' onChange={e => changeUnmountOnClose(e)}>
              <option value='true'>true</option>
              <option value='false'>false</option>
            </Input>
          </Col>
          <Col sm='6' md='4' lg='2'>
            <Button color='success' onClick={() => setVisibility(!visibility)} outline>
              Launch Modal
            </Button>
          </Col>
        </Row>
      </Form>
      <Modal isOpen={visibility} toggle={() => setVisibility(!visibility)} unmountOnClose={unmountOnClose}>
        <ModalHeader toggle={() => setVisibility(!visibility)}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            type='textarea'
            placeholder='Write something (data should remain in modal if unmountOnClose is set to false)'
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => setVisibility(!visibility)} outline>
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}
export default ModalDestructuring
        `}
    </code>
  </pre>
)
