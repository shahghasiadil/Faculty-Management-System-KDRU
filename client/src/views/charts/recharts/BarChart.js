import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Calendar } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '7/12',
    apple: 80,
    samsung: 130,
    oneplus: 150,
    motorola: 210
  },
  {
    name: '8/12',
    apple: 100,
    samsung: 150,
    oneplus: 170,
    motorola: 380
  },
  {
    name: '9/12',
    apple: 80,
    samsung: 140,
    oneplus: 160,
    motorola: 220
  },
  {
    name: '10/12',
    apple: 100,
    samsung: 150,
    oneplus: 170,
    motorola: 380
  },
  {
    name: '11/12',
    apple: 50,
    samsung: 90,
    oneplus: 110,
    motorola: 150
  },
  {
    name: '12/12',
    apple: 125,
    samsung: 90,
    oneplus: 100,
    motorola: 65
  },
  {
    name: '13/12',
    apple: 70,
    samsung: 110,
    oneplus: 130,
    motorola: 210
  },
  {
    name: '14/12',
    apple: 100,
    samsung: 150,
    oneplus: 170,
    motorola: 380
  },
  {
    name: '15/12',
    apple: 80,
    samsung: 100,
    oneplus: 120,
    motorola: 180
  },
  {
    name: '16/12',
    apple: 30,
    samsung: 60,
    oneplus: 70,
    motorola: 110
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
                  className='bullet  bullet-sm bullet-bordered mr-50'
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

const SimpleBarChart = () => {
  return (
    <Card>
      <CardHeader className='flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start'>
        <CardTitle tag='h4'>Brand Turnover</CardTitle>
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
        <div className='d-flex align-items-center flex-wrap mb-2'>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#826af9' }}></span>
            <span className='align-middle mr-75'>Apple</span>
          </div>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#9f87ff' }}></span>
            <span className='align-middle mr-75'>Samsung</span>
          </div>
          <div className='mr-1'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#d2b0ff' }}></span>
            <span className='align-middle mr-75'>Oneplus</span>
          </div>
          <div>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#f8d3ff' }}></span>
            <span className='align-middle'>Motorola</span>
          </div>
        </div>
        <div className='recharts-wrapper bar-chart'>
          <ResponsiveContainer>
            <BarChart height={300} data={data} barSize={15}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Bar dataKey='apple' stackId='a' fill='#826af9' />
              <Bar dataKey='samsung' stackId='a' fill='#9f87ff' />
              <Bar dataKey='oneplus' stackId='a' fill='#d2b0ff' />
              <Bar dataKey='motorola' stackId='a' fill='#f8d3ff' radius={[15, 15, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleBarChart
