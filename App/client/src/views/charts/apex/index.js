// ** React Imports
import { Fragment, useContext } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Charts
import ApexBarChart from './ApexBarChart'
import ApexLineChart from './ApexLineChart'
import ApexAreaChart from './ApexAreaCharts'
import ApexRadarChart from './ApexRadarChart'
import ApexDonutChart from './ApexDonutChart'
import ApexRadialBarChart from './ApexRadialbar'
import ApexColumnChart from './ApexColumnCharts'
import ApexHeatmapChart from './ApexHeatmapChart'
import ApexScatterChart from './ApexScatterCharts'
import ApexCandlestickChart from './ApexCandlestickChart'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ApexCharts = () => {
  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  // ** Theme Colors
  const { colors } = useContext(ThemeColors)

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Apex Charts' breadCrumbParent='Charts' breadCrumbActive='Apex' />
      <Row className='match-height'>
        <Col sm='12'>
          <p>
            A React.js component for ApexCharts. Read full documnetation{' '}
            <a href='https://github.com/apexcharts/react-apexcharts' target='_blank' rel='noopener noreferrer'>
              here
            </a>
          </p>
        </Col>
        <Col sm='12'>
          <ApexAreaChart direction={isRtl ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <ApexColumnChart direction={isRtl ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <ApexScatterChart
            direction={isRtl ? 'rtl' : 'ltr'}
            primary={colors.primary.main}
            success={colors.success.main}
            warning={colors.warning.main}
          />
        </Col>
        <Col sm='12'>
          <ApexLineChart direction={isRtl ? 'rtl' : 'ltr'} warning={colors.warning.main} />
        </Col>
        <Col xl='6' lg='12'>
          <ApexBarChart direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
        </Col>
        <Col xl='6' lg='12'>
          <ApexCandlestickChart
            direction={isRtl ? 'rtl' : 'ltr'}
            success={colors.success.main}
            danger={colors.danger.main}
          />
        </Col>
        <Col xl='6' lg='12'>
          <ApexHeatmapChart />
        </Col>
        <Col xl='6' lg='12'>
          <ApexRadialBarChart />
        </Col>
        <Col xl='6' lg='12'>
          <ApexRadarChart />
        </Col>
        <Col xl='6' lg='12'>
          <ApexDonutChart />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ApexCharts
