import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import ModalBasic from './ModalBasic'
import ModalThemes from './ModalThemes'
import ModalSizes from './ModalSizes'
import ModalEvents from './ModalEvents'
import ModalFormAndScroll from './ModalFormAndScroll'
import ModalUnmount from './ModalUnmount'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import { modalBasic, modalTheme, modalSizes, modalEvents, modalForm, modalUnmount } from './ModalSourceCode'
const Modals = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Modal' breadCrumbParent='Components' breadCrumbActive='Modal' />
      <Row>
        <Col sm='12'>
          <Card title='Modal Basic' code={modalBasic}>
            <CardText className='mb-0'>
              Use <code>Modal</code>, <code>ModalBody</code> and <code>ModalFooter</code> tags to create a Modal with
              reactstrap.
            </CardText>
            <ModalBasic />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <Card title='Modal Themes' code={modalTheme}>
            <CardText className='mb-0'>
              Use class <code>.modal-[color]</code> with your <code>.modal</code> to change theme of modal
            </CardText>
            <ModalThemes />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Modal Sizes' code={modalSizes}>
            <CardText className='mb-0'>
              Use class <code>.modal-[xs/sm/lg/xl]</code> with <code>ModalHeader</code> to change modal Size.
            </CardText>
            <ModalSizes />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Modal Events' code={modalEvents}>
            <CardText className='mb-0'>
              Use props <code>onClosed / onOpened</code> for modal events.
            </CardText>
            <ModalEvents />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <Card title='Form & Scrolling Modals' code={modalForm}>
            <ModalFormAndScroll />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Unmount On Close' code={modalUnmount}>
            <CardText>Write something (data should remain in modal if unmountOnClose is set to false).</CardText>
            <ModalUnmount />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Modals
