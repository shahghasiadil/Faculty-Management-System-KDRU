import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import NumberInputStep from './NumberInputStep'
import NumberInputWrap from './NumberInputWrap'
import NumberInputBasic from './NumberInputBasic'
import NumberInputSizes from './NumberInputSizes'
import NumberInputWidth from './NumberInputWidth'
import NumberInputInline from './NumberInputInline'
import NumberInputMinMax from './NumberInputMinMax'
import NumberInputStates from './NumberInputStates'
import NumberInputVertical from './NumberInputVertical'
import NumberInputCustomIcons from './NumberInputCustomIcon'

const NumberInput = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Number Input' breadCrumbParent='Form Elements' breadCrumbActive='Number Input' />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <NumberInputBasic />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputSizes />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputMinMax />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputStep />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputWrap />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputVertical />
        </Col>
        <Col lg='6' sm='12'>
          <NumberInputInline />
        </Col>
        <Col lg='6' sm='12'>
          <NumberInputStates />
        </Col>
        <Col sm='12'>
          <NumberInputCustomIcons />
        </Col>
        <Col sm='12'>
          <NumberInputWidth />
        </Col>
      </Row>
    </Fragment>
  )
}
export default NumberInput
