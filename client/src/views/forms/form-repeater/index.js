import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col } from 'reactstrap'
import RepeatingForm from './RepeatingForm'
import RepeatingFormAnimated from './RepeatingFormAnimated'

import 'react-slidedown/lib/slidedown.css'
const FormRepeater = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Form Repeater' breadCrumbParent='Form' breadCrumbActive='Form Repeater' />
      <Row>
        <Col sm={12}>
          <RepeatingForm />
        </Col>
        <Col sm={12}>
          <RepeatingFormAnimated />
        </Col>
      </Row>
    </Fragment>
  )
}

export default FormRepeater
