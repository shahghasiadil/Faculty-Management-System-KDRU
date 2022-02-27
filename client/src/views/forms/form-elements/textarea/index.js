import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import TextareaDefault from './TextareaDefault'
import TextareaFloatingLabel from './TextareaFloatingLabel'
import TextareaCounter from './TextareaCounter'

const Textarea = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Textarea' breadCrumbParent='Form Elements' breadCrumbActive='Textarea' />
      <Row>
        <Col sm='12'>
          <TextareaDefault />
        </Col>
        <Col sm='12'>
          <TextareaFloatingLabel />
        </Col>
        <Col sm='12'>
          <TextareaCounter />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Textarea
