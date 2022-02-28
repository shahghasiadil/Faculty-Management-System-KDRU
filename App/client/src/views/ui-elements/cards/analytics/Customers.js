import { useEffect, useState } from 'react'
import classnames from 'classnames'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import * as Icon from 'react-feather'
import Chart from 'react-apexcharts'

const Customers = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/customers').then(res => setData(res.data))
  }, [])

  const options = {
      chart: {
        toolbar: {
          show: false
        }
      },
      labels: ['New', 'Returning', 'Referrals'],
      dataLabels: {
        enabled: false
      },
      legend: { show: false },
      stroke: {
        width: 4
      },
      colors: [props.primary, props.warning, props.danger]
    },
    series = [690, 258, 149]

  const renderChartInfo = () => {
    return data.listData.map((item, index) => {
      const IconTag = Icon[item.icon]

      return (
        <div
          key={index}
          className={classnames('d-flex justify-content-between', {
            'mb-1': index !== data.listData.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <IconTag
              size={15}
              className={classnames({
                [item.iconColor]: item.iconColor
              })}
            />
            <span className='font-weight-bold ml-75'>{item.text}</span>
          </div>
          <span>{item.result}</span>
        </div>
      )
    })
  }

  return data !== null ? (
    <Card>
      <CardHeader className='align-items-end'>
        <CardTitle tag='h4'>Customers</CardTitle>
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
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='pie' height={325} />
        <div className='pt-25'>{renderChartInfo()}</div>
      </CardBody>
    </Card>
  ) : null
}
export default Customers
