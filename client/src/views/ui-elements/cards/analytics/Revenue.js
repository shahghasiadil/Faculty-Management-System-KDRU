import { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'
import { Settings } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const Revenue = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/revenue').then(res => setData(res.data))
  }, [])

  const options = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        offsetX: -10
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 12],
        width: [4, 3]
      },
      legend: {
        show: false
      },
      colors: ['#d0ccff', '#ebe9f1'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: [props.primary, '#ebe9f1'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '1rem'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
        axisBorder: {
          show: false
        },
        tickPlacement: 'on'
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '1rem'
          },
          formatter(val) {
            return val > 999 ? `${(val / 1000).toFixed(0)}k` : val
          }
        }
      },
      grid: {
        borderColor: '#e7eef7',
        padding: {
          top: -20,
          bottom: -10,
          left: 20
        }
      },
      tooltip: {
        x: { show: false }
      }
    },
    series = [
      {
        name: 'This Month',
        data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
      },
      {
        name: 'Last Month',
        data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
      }
    ]
  return data !== null ? (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Revenue</CardTitle>
        <Settings size={18} className='text-muted cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div className='d-flex justify-content-start mb-3'>
          <div className='mr-2'>
            <CardText className='mb-50'>This Month</CardText>
            <h3 className='font-weight-bolder'>
              <sup className='font-medium-1 font-weight-bold mr-25'>$</sup>
              <span className='text-primary'>86,589</span>
            </h3>
          </div>
          <div>
            <CardText className='mb-50'>Last Month</CardText>
            <h3 className='font-weight-bolder'>
              <sup className='font-medium-1 font-weight-bold mr-25'>$</sup>
              <span>73,683</span>
            </h3>
          </div>
        </div>
        <Chart options={options} series={series} type='line' height={240} />
      </CardBody>
    </Card>
  ) : null
}
export default Revenue
