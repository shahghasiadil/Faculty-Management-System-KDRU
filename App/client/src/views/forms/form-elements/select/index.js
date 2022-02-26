import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import ReactSelect from './SelectReact'
import SelectMulti from './SelectMulti'
import SelectSizing from './SelectSizing'
import Selectoptions from './SelectOptions'
import SelectReactstrap from './SelectReactstrap'

import '@styles/react/libs/react-select/_react-select.scss'

const Select = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Select' breadCrumbParent='Form Elements' breadCrumbActive='Select' />
      <Row>
        <Col sm='12'>
          <ReactSelect />
        </Col>
        <Col sm='12'>
          <Selectoptions />
        </Col>
        <Col md='6' sm='12'>
          <SelectReactstrap />
        </Col>
        <Col md='6' sm='12'>
          <SelectSizing />
        </Col>
        <Col sm='12'>
          <SelectMulti />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Select
