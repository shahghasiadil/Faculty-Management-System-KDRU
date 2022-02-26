import { Card, CardHeader, CardTitle, CardBody, Badge } from 'reactstrap'
import { ArrowDown } from 'react-feather'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '7/12',
    pv: 280
  },
  {
    name: '8/12',
    pv: 200
  },
  {
    name: '9/12',
    pv: 220
  },
  {
    name: '10/12',
    pv: 180
  },
  {
    name: '11/12',
    pv: 270
  },
  {
    name: '12/12',
    pv: 250
  },
  {
    name: '13/12',
    pv: 70
  },
  {
    name: '14/12',
    pv: 90
  },
  {
    name: '15/12',
    pv: 200
  },
  {
    name: '16/12',
    pv: 150
  },
  {
    name: '17/12',
    pv: 160
  },
  {
    name: '18/12',
    pv: 100
  },
  {
    name: '19/12',
    pv: 150
  },
  {
    name: '20/12',
    pv: 100
  },
  {
    name: '21/12',
    pv: 50
  }
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <span>{`${payload[0].value}%`}</span>
      </div>
    )
  }

  return null
}

const SimpleLineChart = ({ warning }) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Balance</CardTitle>
          <small className='text-muted'>Commercial networks & enterprises</small>
        </div>
        <div className='d-flex align-items-center flex-wrap mt-sm-0 mt-1'>
          <h5 className='font-weight-bold mb-0 mr-1'>$ 100,000</h5>
          <Badge className='badge-md' color='light-secondary'>
            <ArrowDown className='text-danger mr-50' size={15} />
            20%
          </Badge>
        </div>
      </CardHeader>

      <CardBody>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <LineChart height={300} data={data}>
              <CartesianGrid />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Line dataKey='pv' stroke={warning} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleLineChart
