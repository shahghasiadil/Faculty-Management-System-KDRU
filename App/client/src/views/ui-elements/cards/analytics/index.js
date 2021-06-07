import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import SessionByDevice from './SessionByDevice'
import ProductOrders from './ProductOrders'
import Customers from './Customers'
import Sales from './Sales'
import SupportTracker from './SupportTracker'
import RevenueReport from './RevenueReport'
import Revenue from './Revenue'
import GoalOverview from './GoalOverview'
import AvgSession from './AvgSessions'
import Sales2 from './Sales2'
import Earnings from './Earnings'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsCards = () => {
  const context = useContext(ThemeColors)
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Analytics Cards' breadCrumbParent='Card' breadCrumbActive='Analytics Cards' />
      <Row className='match-height'>
        <Col lg='6' sm='12'>
          <SupportTracker primary={context.colors.primary.main} danger={context.colors.danger.main} />
        </Col>
        <Col lg='6' sm='12'>
          <AvgSession primary={context.colors.primary.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' sm='12'>
          <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} />
        </Col>
        <Col lg='4' sm='12'>
          <GoalOverview success={context.colors.success.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' sm='12'>
          <Revenue primary={context.colors.primary.main} />
        </Col>
        <Col lg='4' sm='12'>
          <Sales primary={context.colors.primary.main} info={context.colors.info.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' sm='12'>
          <Row className='match-height'>
            <Col sm='12'>
              <Sales2 primary={context.colors.primary.main} />
            </Col>
            <Col md='6' sm='12'>
              <SessionByDevice
                primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}
              />
            </Col>
            <Col md='6' sm='12'>
              <Customers
                primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}
              />
            </Col>
          </Row>
        </Col>
        <Col lg='4' sm='12'>
          <Row className='match-height'>
            <Col sm='12'>
              <ProductOrders
                primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}
              />
            </Col>
            <Col sm='12'>
              <Earnings success={context.colors.success.main} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AnalyticsCards
