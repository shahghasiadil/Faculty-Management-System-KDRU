import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import BasicTimeline from './BasicTimeline'
import IconsTimeline from './IconsTimeline'
import BreadCrumbs from '@components/breadcrumbs'

const Timeline = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Timeline' breadCrumbParent='Extra Components' breadCrumbActive='Timeline' />
      <Row>
        <Col lg='6'>
          <BasicTimeline />
        </Col>
        <Col lg='6'>
          <IconsTimeline />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Timeline
