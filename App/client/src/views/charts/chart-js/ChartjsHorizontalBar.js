import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { HorizontalBar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ChartjsHorizontalBarChart = ({ tooltipShadow, gridLineColor, labelColor, info }) => {
  const options = {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'right',
          borderSkipped: 'top'
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      layout: {
        padding: {
          bottom: -30,
          left: -25
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              zeroLineColor: gridLineColor,
              borderColor: 'transparent',
              color: gridLineColor,
              drawTicks: false
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              min: 0,
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ]
      }
    },
    data = {
      labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI', 'SAT', 'SUN'],
      datasets: [
        {
          data: [710, 350, 470, 580, 230, 460, 120],
          backgroundColor: info,
          borderColor: 'transparent',
          barThickness: 15
        }
      ]
    }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <div>
          <CardSubtitle className='text-muted mb-25'>Balance</CardSubtitle>
          <CardTitle tag='h4'>$74,123</CardTitle>
        </div>
        <div className='d-flex align-items-center'>
          <Calendar size={14} />
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
        <div style={{ height: '400px' }}>
          <HorizontalBar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsHorizontalBarChart
