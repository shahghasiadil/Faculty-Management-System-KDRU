import { Fragment } from 'react'
import { Row, Col, Card, CardBody, CardHeader, CardTitle, FormGroup } from 'reactstrap'
import PickerDefault from './PickerDefault'
import PickerTime from './PickerTime'
import PickerDateTime from './PickerDateTime'
import PickerMultipleDates from './PickerMultipleDates'
import PickerRange from './PickerRange'
import PickerHumanFriendly from './PickerHumanFriendly'
import PickerDisabledRange from './PickerDisabledRange'
import PickerInline from './PickerInline'
import Breadcrumbs from '@components/breadcrumbs'

import '@styles/react/libs/flatpickr/flatpickr.scss'

const Pickers = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Date & Time Picker'
        breadCrumbParent='Form Elements'
        breadCrumbActive='Date & Time Picker'
      />
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Flatpickr</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerDefault />
            </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerTime />
            </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerDateTime />
            </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerMultipleDates />
            </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerRange />
            </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerHumanFriendly />
            </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerDisabledRange />
            </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerInline />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}
export default Pickers
