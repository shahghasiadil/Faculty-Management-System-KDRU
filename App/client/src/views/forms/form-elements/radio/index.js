import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import RadioBasic from './RadioBasic'
import RadioCustom from './RadioCustom'
import RadioColors from './RadioColors'

const Radio = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Radio' breadCrumbParent='Form Elements' breadCrumbActive='Radio' />
      <Row>
        <Col sm='12'>
          <RadioBasic />
        </Col>
        <Col sm='12'>
          <RadioCustom />
        </Col>
        <Col sm='12'>
          <RadioColors />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Radio
