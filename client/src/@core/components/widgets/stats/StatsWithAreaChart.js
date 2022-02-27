// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Chart from 'react-apexcharts'
import { Card, CardBody } from 'reactstrap'

// ** Default Options
import { areaChartOptions } from './ChartOptions'

const StatsWithAreaChart = props => {
  // ** Props
  const { icon, color, stats, statTitle, series, options, type, height, className, ...rest } = props
  return (
    <Card {...rest}>
      <CardBody
        className={classnames('pb-0', {
          [className]: className
        })}
      >
        <Avatar className='avatar-stats p-50 m-0' color={`light-${color}`} icon={icon} />
        <h2 className='font-weight-bolder mt-1'>{stats}</h2>
        <p className='card-text'>{statTitle}</p>
      </CardBody>
      <Chart options={options} series={series} type={type} height={height ? height : 100} />
    </Card>
  )
}

export default StatsWithAreaChart

// ** PropTypes
StatsWithAreaChart.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired,
  options: PropTypes.object,
  series: PropTypes.array.isRequired,
  type: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}

// ** Default Props
StatsWithAreaChart.defaultProps = {
  options: areaChartOptions,
  color: 'primary'
}
