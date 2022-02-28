import Chart from 'react-apexcharts'
import { MoreVertical, Circle } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

const Sales = props => {
  const options = {
      chart: {
        height: 300,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        },
        offsetY: 5
      },
      stroke: {
        width: 0
      },
      dataLabels: {
        background: {
          foreColor: ['#ebe9f1']
        }
      },
      legend: { show: false },
      colors: [props.primary, props.info],
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: ['#ebe9f1', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
            connectorColors: 'transparent'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [props.primary, props.info],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      markers: {
        size: 0
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false,
        padding: {
          bottom: -27
        }
      }
    },
    series = [
      {
        name: 'Sales',
        data: [90, 50, 86, 40, 100, 20]
      },
      {
        name: 'Visit',
        data: [70, 75, 70, 76, 20, 85]
      }
    ]
  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-start pb-1'>
        <div>
          <CardTitle className='mb-25' tag='h4'>
            Sales
          </CardTitle>
          <CardText>Last 6 months</CardText>
        </div>

        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            <MoreVertical size={18} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem className='w-100'>Last 28 Days</DropdownItem>
            <DropdownItem className='w-100'>Last Month</DropdownItem>
            <DropdownItem className='w-100'>Last Year</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>

      <CardBody>
        <div className='d-inline-block mr-1'>
          <div className='d-flex align-items-center'>
            <Circle size={13} className='text-primary mr-50' />
            <h6 className='mb-0'>Sales</h6>
          </div>
        </div>
        <div className='d-inline-block'>
          <div className='d-flex align-items-center'>
            <Circle size={13} className='text-info mr-50' />
            <h6 className='mb-0'>Visits</h6>
          </div>
        </div>
        <Chart options={options} series={series} type='radar' height={300} />
      </CardBody>
    </Card>
  )
}
export default Sales
