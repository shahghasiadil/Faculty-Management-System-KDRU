import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
  {
    subject: 'Battery',
    'iPhone 11': 41,
    'Samsung s20': 65
  },
  {
    subject: 'Brand',
    'iPhone 11': 64,
    'Samsung s20': 46
  },
  {
    subject: 'Camera',
    'iPhone 11': 81,
    'Samsung s20': 42
  },
  {
    subject: 'Memory',
    'iPhone 11': 60,
    'Samsung s20': 25
  },
  {
    subject: 'Storage',
    'iPhone 11': 42,
    'Samsung s20': 58
  },
  {
    subject: 'Display',
    'iPhone 11': 42,
    'Samsung s20': 63
  },
  {
    subject: 'OS',
    'iPhone 11': 33,
    'Samsung s20': 76
  },
  {
    subject: 'Price',
    'iPhone 11': 23,
    'Samsung s20': 43
  }
]

const SimpleRadarChart = ({ series1, series3 }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Mobile Comparison</CardTitle>
      </CardHeader>

      <CardBody>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <RadarChart cx='50%' cy='50%' height={400} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey='subject' />
              <PolarRadiusAxis />
              <Radar dataKey='iPhone 11' stroke={series1} fill={series1} fillOpacity={1} />

              <Radar dataKey='Samsung s20' stroke={series3} fill={series3} fillOpacity={0.8} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='mr-2'>
            <span className='bullet bullet-sm bullet-primary bullet-bordered mr-50'></span>
            <span className='align-middle mr-75'>Replies</span>
          </div>
          <div>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#ffe700' }}></span>
            <span className='align-middle mr-75'>Shares</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimpleRadarChart
