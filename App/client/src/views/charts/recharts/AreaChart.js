import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Calendar } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '7/12',
    sales: 20,
    clicks: 60,
    visits: 100
  },
  {
    name: '8/12',
    sales: 40,
    clicks: 80,
    visits: 120
  },
  {
    name: '9/12',
    sales: 30,
    clicks: 70,
    visits: 90
  },
  {
    name: '10/12',
    sales: 70,
    clicks: 110,
    visits: 170
  },
  {
    name: '11/12',
    sales: 40,
    clicks: 80,
    visits: 130
  },
  {
    name: '12/12',
    sales: 60,
    clicks: 80,
    visits: 160
  },
  {
    name: '13/12',
    sales: 50,
    clicks: 100,
    visits: 140
  },
  {
    name: '14/12',
    sales: 140,
    clicks: 90,
    visits: 240
  },
  {
    name: '15/12',
    sales: 120,
    clicks: 180,
    visits: 220
  },
  {
    name: '16/12',
    sales: 100,
    clicks: 160,
    visits: 180
  },
  {
    name: '17/12',
    sales: 140,
    clicks: 140,
    visits: 270
  },
  {
    name: '18/12',
    sales: 180,
    clicks: 200,
    visits: 280
  },
  {
    name: '19/12',
    sales: 220,
    clicks: 220,
    visits: 375
  }
]

const CustomTooltip = data => {
  if (data.active && data.payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <p className='font-weight-bold mb-0'>{data.label}</p>
        <hr />
        <div className='active'>
          {data.payload.map(i => {
            return (
              <div className='d-flex align-items-center' key={i.dataKey}>
                <span
                  className='bullet bullet-sm bullet-bordered mr-50'
                  style={{
                    backgroundColor: i.fill
                  }}
                ></span>
                <span className='align-middle text-capitalize mr-75'>
                  {i.dataKey} : {i.payload[i.dataKey]}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return null
}

const SimpleAreaChart = ({ primary }) => {
  return (
    <Card>
      <CardHeader className='flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start'>
        <CardTitle tag='h4'>Website Data</CardTitle>
        <div className='d-flex align-items-center'>
          <Calendar size={15} />
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
        <div className='d-flex align-items-center mb-2'>
          <div className='mr-2'>
            <span className='bullet bullet-sm bullet-primary bullet-bordered mr-50'></span>
            <span className='align-middle'>Clicks</span>
          </div>
          <div className='mr-2'>
            <span
              className='bullet bullet-sm bullet-bordered mr-50'
              style={{ backgroundColor: 'rgba(115, 103, 240, .5)' }}
            ></span>
            <span className='align-middle mr-75'>Sales</span>
          </div>
          <div>
            <span
              className='bullet bullet-sm bullet-bordered mr-50'
              style={{ backgroundColor: 'rgba(115, 103, 240, .2)' }}
            ></span>
            <span className='align-middle'>Visits</span>
          </div>
        </div>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <AreaChart height={400} data={data}>
              <CartesianGrid />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Area dataKey='sales' stackId='sales' stroke='0' fill='rgba(115, 103, 240, .5)' />
              <Area dataKey='clicks' stackId='clicks' stroke='0' fill='rgb(115, 103, 240)' />
              <Area dataKey='visits' stackId='visits' stroke='0' fill='rgba(115, 103, 240, .2)' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleAreaChart
