import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import Card from '@components/card-snippet'
import DefaultAlert from './DefaultAlert'
import AlertTitle from './AlertTitle'
import AlertColors from './AlertColors'
import AlertDismissable from './AlertDismissable'
import AlertUncontrolled from './AlertUncontrolled'
import AlertIcon from './AlertIcon'
import AlertExample from './AlertExample'
import {
  defaultAlert,
  alertColors,
  alertTitle,
  alertDismissable,
  alertUncontrolled,
  alertIcon,
  alertExample
} from './AlertSourceCode'
import BreadCrumbs from '@components/breadcrumbs'

const Alerts = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Alerts' breadCrumbParent='Components' breadCrumbActive='Alerts' />
      <Row>
        <Col sm='12'>
          <Card title='Default' code={defaultAlert}>
            <CardText>
              Alerts are available for any length of text, as well as an optional dismiss button. Use <code>Alert</code>{' '}
              Component & <code>color</code> prop for alert with all theme colors.
            </CardText>
            <DefaultAlert />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Title' code={alertTitle}>
            <CardText>
              Add a title to the alert with the <code>.alert-heading</code>
            </CardText>
            <AlertTitle />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Colors' code={alertColors}>
            <CardText>
              Use <code>color</code> prop to for alert with all theme colors.
            </CardText>
            <AlertColors />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Dismissable Alert' code={alertDismissable}>
            <CardText>
              Using <code>isOpen</code> and <code>toggle</code> you can create a dismissable alert.
            </CardText>
            <AlertDismissable />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Uncontrolled Alert' code={alertUncontrolled}>
            <CardText>
              For the most basic use-case an uncontrolled component can provide the functionality wanted without the
              need to manage/control the state of the component. UncontrolledAlert does not require isOpen nor toggle
              props to work.
            </CardText>
            <AlertUncontrolled />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Icon' code={alertIcon}>
            <AlertIcon />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Example' code={alertExample}>
            <CardText>An example would be to have an input and when a condition is met, show the alert.</CardText>
            <AlertExample />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Alerts
