import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ApexRadiarChart = () => {
  const donutColors = {
    series1: '#ffe700',
    series3: '#826bf8'
  }
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      parentHeightOffset: 0,
      dropShadow: {
        enabled: false,
        blur: 8,
        left: 1,
        top: 1,
        opacity: 0.2
      }
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    yaxis: {
      show: false
    },
    colors: [donutColors.series1, donutColors.series3],
    xaxis: {
      categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price']
    },
    fill: {
      opacity: [1, 0.8]
    },
    stroke: {
      show: false,
      width: 0
    },
    markers: {
      size: 0
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: -20
      }
    }
  }

  const series = [
    {
      name: 'iPhone 11',
      data: [41, 64, 81, 60, 42, 42, 33, 23]
    },
    {
      name: 'Samsung s20',
      data: [65, 46, 42, 25, 58, 63, 76, 43]
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Mobile Comparison</CardTitle>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='radar' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexRadiarChart
