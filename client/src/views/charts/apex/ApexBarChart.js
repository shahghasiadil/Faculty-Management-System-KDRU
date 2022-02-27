import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ApexBarChart = ({ info, direction }) => {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '30%',
        endingShape: 'rounded'
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: info,
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23']
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  const series = [
    {
      data: [700, 350, 480, 600, 210, 550, 150]
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
          <CardSubtitle className='text-muted mb-25'>Balance</CardSubtitle>
          <CardTitle className='font-weight-bolder' tag='h4'>
            $74,382.72
          </CardTitle>
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
        <Chart options={options} series={series} type='bar' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexBarChart
