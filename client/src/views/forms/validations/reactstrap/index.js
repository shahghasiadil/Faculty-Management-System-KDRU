import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Validations from './Validation'
import Breadcrumbs from '@components/breadcrumbs'

const ReactstrapValidation = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Reactstrap Validation'
        breadCrumbParent='Form'
        breadCrumbActive='Reactstrap Validation'
      />
      <Row>
        <Col sm='12'>
          <Validations />
        </Col>
      </Row>
    </Fragment>
  )
}
export default ReactstrapValidation
