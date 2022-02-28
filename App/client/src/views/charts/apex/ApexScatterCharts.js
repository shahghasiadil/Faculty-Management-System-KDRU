import { useState } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, ButtonGroup, Button } from 'reactstrap'

const ApexScatterCharts = ({ direction, warning, primary, success }) => {
  const [active, setActive] = useState('daily')

  const options = {
    chart: {
      zoom: {
        enabled: true,
        type: 'xy'
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start'
    },
    colors: [warning, primary, success],

    xaxis: {
      tickAmount: 10,
      labels: {
        formatter(val) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  const series = [
    {
      name: 'Angular',
      data: [
        [5.4, 170],
        [5.4, 100],
        [6.3, 170],
        [5.7, 140],
        [5.9, 130],
        [7.0, 150],
        [8.0, 120],
        [9.0, 170],
        [10.0, 190],
        [11.0, 220],
        [12.0, 170],
        [13.0, 230]
      ]
    },
    {
      name: 'Vue',
      data: [
        [14.0, 220],
        [15.0, 280],
        [16.0, 230],
        [18.0, 320],
        [17.5, 280],
        [19.0, 250],
        [20.0, 350],
        [20.5, 320],
        [20.0, 320],
        [19.0, 280],
        [17.0, 280],
        [22.0, 300],
        [18.0, 120]
      ]
    },
    {
      name: 'React',
      data: [
        [14.0, 290],
        [13.0, 190],
        [20.0, 220],
        [21.0, 350],
        [21.5, 290],
        [22.0, 220],
        [23.0, 140],
        [19.0, 400],
        [20.0, 200],
        [22.0, 90],
        [20.0, 120]
      ]
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
        <CardTitle tag='h4'>New Technologies Data</CardTitle>
        <ButtonGroup className='mt-md-0 mt-1'>
          <Button active={active === 'daily'} color='primary' outline onClick={() => setActive('daily')}>
            Daily
          </Button>
          <Button active={active === 'monthly'} color='primary' outline onClick={() => setActive('monthly')}>
            Monthly
          </Button>
          <Button active={active === 'yearly'} color='primary' outline onClick={() => setActive('yearly')}>
            Yearly
          </Button>
        </ButtonGroup>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='scatter' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexScatterCharts
