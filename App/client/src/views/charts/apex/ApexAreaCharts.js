import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const areaColors = {
  series3: '#a4f8cd',
  series2: '#60f2ca',
  series1: '#2bdac7'
}

const ApexAreaCharts = ({ direction }) => {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      curve: 'straight'
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start'
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    colors: [areaColors.series3, areaColors.series2, areaColors.series1],
    xaxis: {
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12'
      ]
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    tooltip: {
      shared: false
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  const series = [
    {
      name: 'Visits',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
    },
    {
      name: 'Clicks',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
    },
    {
      name: 'Sales',
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Line Chart
          </CardTitle>
          <CardSubtitle className='text-muted'>Commercial networks</CardSubtitle>
        </div>
        <div className='d-flex align-items-center mt-md-0 mt-1'>
          <Calendar size={17} />
          <Flatpickr
            options={{
              mode: 'range',
              defaultDate: ['2019-05-01', '2019-05-10']
            }}
            className='form-control flat-picker bg-transparent border-0 shadow-none'
          />
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='area' height={400} />
      </CardBody>
    </Card>
  )
}
export default ApexAreaCharts
