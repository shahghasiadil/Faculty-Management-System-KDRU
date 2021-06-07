import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import InputBasic from './InputBasic'
import InputSizes from './InputSizes'
import InputHorizontalSize from './InputHorizontalSize'
import InputFloating from './InputFloating'
import InputFile from './InputFile'
import InputState from './InputStates'

const Input = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Input' breadCrumbParent='Form Elements' breadCrumbActive='Input' />
      <Row className='match-height'>
        <Col sm='12'>
          <InputBasic />
        </Col>
        <Col md='6' sm='12'>
          <InputSizes />
        </Col>
        <Col md='6' sm='12'>
          <InputHorizontalSize />
        </Col>
        <Col sm='12'>
          <InputFloating />
        </Col>
        <Col sm='12'>
          <InputFile />
        </Col>
        <Col sm='12'>
          <InputState />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Input
