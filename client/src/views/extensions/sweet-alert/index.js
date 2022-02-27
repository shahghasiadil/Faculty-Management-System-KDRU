import { Fragment } from 'react'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col } from 'reactstrap'
import SweetAlertBasic from './SweetAlertBasic'
import SweetAlertPositions from './SweetAlertPositions'
import SweetAlertAnimations from './SweetAlertAnimations'
import SweetAlertTypes from './SweetAlertTypes'
import SweetAlertOptions from './SweetAlertOptions'
import SweetAlertCallback from './SweetAlertCallback'

import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

const SweetAlert = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='Sweet Alerts2'
        subTitle='A React implementation of SweetAlert2'
        link='https://github.com/sweetalert2/sweetalert2-react-content'
      />
      <Row>
        <Col sm='12'>
          <SweetAlertBasic />
        </Col>
        <Col sm='12'>
          <SweetAlertPositions />
        </Col>
        <Col sm='12'>
          <SweetAlertAnimations />
        </Col>
        <Col sm='12'>
          <SweetAlertTypes />
        </Col>
        <Col sm='12'>
          <SweetAlertOptions />
        </Col>
        <Col sm='12'>
          <SweetAlertCallback />
        </Col>
      </Row>
    </Fragment>
  )
}

export default SweetAlert
