import { useEffect, useState } from 'react'
import axios from 'axios'
import { kFormatter } from '@utils'
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Progress
} from 'reactstrap'
import Chart from 'react-apexcharts'

const AvgSessions = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/avg-sessions').then(res => setData(res.data))
  }, [])

  const options = {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      colors: ['#ebf0f7', '#ebf0f7', props.primary, '#ebf0f7', '#ebf0f7', '#ebf0f7'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded'
        }
      },
      tooltip: {
        x: { show: false }
      },
      xaxis: {
        type: 'numeric'
      }
    },
    series = [
      {
        name: 'Sessions',
        data: [75, 125, 225, 175, 125, 75, 25]
      }
    ]

  return data !== null ? (
    <Card>
      <CardBody>
        <Row className='pb-50'>
          <Col
            sm={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className='d-flex justify-content-between flex-column mt-lg-0 mt-2'
          >
            <div className='session-info mb-1 mb-lg-0'>
              <h2 className='font-weight-bold mb-25'>{kFormatter(data.sessions)}</h2>
              <CardText className='font-weight-bold mb-2'>Avg Sessions</CardText>
              <h5 className='font-medium-2'>
                <span className='text-success mr-50'>{data.growth}</span>
                <span className='font-weight-normal'>vs last 7 days</span>
              </h5>
            </div>
            <Button color='primary'>View Details</Button>
          </Col>
          <Col
            sm={{ size: 6, order: 2 }}
            xs={{ order: 1 }}
            className='d-flex justify-content-between flex-column text-right'
          >
            <UncontrolledDropdown className='chart-dropdown'>
              <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
                Last 7 days
              </DropdownToggle>
              <DropdownMenu right>
                {data.last_days.map(item => (
                  <DropdownItem className='w-100' key={item}>
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <Chart options={options} series={series} type='bar' height={200} />
          </Col>
        </Row>
        <hr />
        <Row className='pt-50'>
          <Col className='mb-2' md='6' sm='12'>
            <p className='mb-50'>Goal: ${data.goal}</p>
            <Progress className='avg-session-progress mt-25' value='50' />
          </Col>
          <Col className='mb-2' md='6' sm='12'>
            <p className='mb-50'>Users: {kFormatter(data.users)}</p>
            <Progress className='avg-session-progress progress-bar-warning mt-25' value='60' />
          </Col>
          <Col md='6' sm='12'>
            <p className='mb-50'>Retention: {data.retention}%</p>
            <Progress className='avg-session-progress progress-bar-danger mt-25' value='70' />
          </Col>
          <Col md='6' sm='12'>
            <p className='mb-50'>Duration: {data.duration}yr</p>
            <Progress className='avg-session-progress progress-bar-success mt-25' value='80' />
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) : null
}
export default AvgSessions
