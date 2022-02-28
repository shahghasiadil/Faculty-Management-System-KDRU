// ** Third Party Components
import PropTypes from 'prop-types'
import Chart from 'react-apexcharts'
import { Card, CardBody } from 'reactstrap'

const TinyChartStats = props => {
  // ** Props
  const { title, stats, options, series, type, height } = props

  return (
    <Card className='card-tiny-line-stats'>
      <CardBody className='pb-50'>
        <h6>{title}</h6>
        <h2 className='font-weight-bolder mb-1'>{stats}</h2>
        <Chart options={options} series={series} type={type} height={height} />
      </CardBody>
    </Card>
  )
}

export default TinyChartStats

// ** PropTypes
TinyChartStats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

// ** Default Props
TinyChartStats.defaultProps = {
  height: 100
}
