import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import SwitchReactstrap from './SwitchBasic'
import SwitchColors from './SwitchColors'
import SwitchIcons from './SwitchIcons'

const Switch = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Switch' breadCrumbParent='Form Elements' breadCrumbActive='Switch' />
      <Row>
        <Col sm='12'>
          <SwitchReactstrap />
        </Col>
        <Col sm='12'>
          <SwitchColors />
        </Col>
        <Col sm='12'>
          <SwitchIcons />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Switch
