import { Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'
import Breadcrumbs from '@components/breadcrumbs'
import StatsCard from './StatsCard'
import OrdersBarChart from './OrdersBarChart'
import ProfitLineChart from './ProfitLineChart'
import SubscribersGained from './SubscribersGained'
import RevenueGenerated from './RevenueGenerated'
import QuaterlySales from './QuaterlySales'
import OrdersReceived from './OrdersReceived'
import SiteTraffic from './SiteTraffic'
import ActiveUsers from './ActiveUsers'
import Newsletter from './Newsletter'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import {
  Eye,
  MessageSquare,
  ShoppingBag,
  Heart,
  Award,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon
} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'

const StatisticsCards = () => {
  const context = useContext(ThemeColors)

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Statistics Cards' breadCrumbParent='Card' breadCrumbActive='Statistics Cards' />

      <Row>
        {/* Orders Bar Chart */}
        <Col lg='2' xs='6'>
          <OrdersBarChart warning={context.colors.warning.main} />
        </Col>
        {/* Orders Bar Chart */}

        {/* Profit Line Chart */}
        <Col lg='2' xs='6'>
          <ProfitLineChart info={context.colors.info.main} />
        </Col>
        {/* Profit Line Chart */}

        {/* Stats Card */}
        <Col lg='8' sm='12'>
          <StatsCard cols={{ md: '3', sm: '6' }} />
        </Col>
        {/* Stats Card */}
      </Row>

      <Row>
        {/* Stats With Icons */}
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Eye size={21} />} color='info' stats='36.9k' statTitle='Views' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<MessageSquare size={21} />} color='warning' stats='12k' statTitle='Comments' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<ShoppingBag size={21} />} color='danger' stats='97.8k' statTitle='Orders' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Heart size={21} />} color='primary' stats='26.8' statTitle='Bookmarks' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Award size={21} />} color='success' stats='689' statTitle='Reviews' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Truck size={21} />} color='danger' stats='2.1k' statTitle='Returns' />
        </Col>
        {/* Stats With Icons */}
      </Row>

      <Row>
        {/* Stats With Icons Horizontal */}
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Cpu size={21} />} color='primary' stats='86%' statTitle='CPU Usage' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Server size={21} />} color='success' stats='1.2gb' statTitle='Memory Usage' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Activity size={21} />} color='danger' stats='0.1%' statTitle='Downtime Ratio' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<AlertOctagon size={21} />} color='warning' stats='13' statTitle='Issues Found' />
        </Col>
        {/* Stats With Icons Horizontal */}
      </Row>

      <Row>
        {/* Stats Area Charts */}
        <Col lg='3' sm='6'>
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        <Col lg='3' sm='6'>
          <RevenueGenerated kFormatter={kFormatter} success={context.colors.success.main} />
        </Col>
        <Col lg='3' sm='6'>
          <QuaterlySales danger={context.colors.danger.main} />
        </Col>
        <Col lg='3' sm='6'>
          <OrdersReceived kFormatter={kFormatter} warning={context.colors.warning.main} />
        </Col>
        {/* Stats Area Charts */}
      </Row>

      <Row>
        {/* Stats Line Charts */}
        <Col lg='4' sm='6'>
          <SiteTraffic />
        </Col>
        <Col lg='4' sm='6'>
          <ActiveUsers success={context.colors.success.main} />
        </Col>
        <Col lg='4' sm='6'>
          <Newsletter warning={context.colors.warning.main} />
        </Col>
        {/* Stats Line Charts */}
      </Row>
    </Fragment>
  )
}

export default StatisticsCards
