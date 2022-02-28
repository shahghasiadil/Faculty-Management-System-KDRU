import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardTitle,
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import Chart from 'react-apexcharts'

const RevenueReport = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/revenue-report').then(res => setData(res.data))
  }, [])

  const revenueOptions = {
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10
        },
        yaxis: {
          lines: { show: false }
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: '17%',
          endingShape: 'rounded'
        },
        distributed: true
      },
      yaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        }
      }
    },
    revenueSeries = [
      {
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
      },
      {
        name: 'Expense',
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
      }
    ]

  const budgetSeries = [
      {
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
      },
      {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
      }
    ],
    budgetOptions = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 5],
        width: [2]
      },
      colors: [props.primary, '#dcdae3'],
      tooltip: {
        enabled: false
      }
    }

  return data !== null ? (
    <Card className='card-revenue-budget'>
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper' md='8' xs='12'>
          <div className='d-sm-flex justify-content-between align-items-center mb-3'>
            <CardTitle className='mb-50 mb-sm-0'>Revenue Report</CardTitle>
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center mr-2'>
                <span className='bullet bullet-primary mr-50 cursor-pointer'></span>
                <span>Earning</span>
              </div>
              <div className='d-flex align-items-center'>
                <span className='bullet bullet-warning mr-50 cursor-pointer'></span>
                <span>Expense</span>
              </div>
            </div>
          </div>
          <Chart id='revenue-report-chart' type='bar' height='230' options={revenueOptions} series={revenueSeries} />
        </Col>
        <Col className='budget-wrapper' md='4' xs='12'>
          <UncontrolledButtonDropdown>
            <DropdownToggle className='budget-dropdown' outline color='primary' size='sm' caret>
              2020
            </DropdownToggle>
            <DropdownMenu>
              {data.years.map(item => (
                <DropdownItem className='w-100' key={item}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <h2 className='mb-25'>${data.price}</h2>
          <div className='d-flex justify-content-center'>
            <span className='font-weight-bolder mr-25'>Budget:</span>
            <span>{data.budget}</span>
          </div>
          <Chart id='budget-chart' type='line' height='80' options={budgetOptions} series={budgetSeries} />
          <Button color='primary'>Increase Budget</Button>
        </Col>
      </Row>
    </Card>
  ) : null
}

export default RevenueReport
