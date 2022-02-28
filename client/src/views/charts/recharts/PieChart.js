import { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts'

const SimplePieChart = props => {
  const data = [
    { name: 'R&D', value: 50, color: props.series2 },
    { name: 'Operational', value: 85, color: props.series1 },
    { name: 'Networking', value: 16, color: props.series5 },
    { name: 'Hiring', value: 50, color: props.series3 }
  ]
  /*eslint-disable */
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, fill }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    /*eslint-enable */
    return (
      <text
        x={x}
        y={y}
        fill={fill === props.secondary ? '#000' : '#fff'}
        textAnchor='middle'
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Expense Ratio</CardTitle>
          <small className='text-muted'>Spending on various categories</small>
        </div>
      </CardHeader>

      <CardBody>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <PieChart height={350}>
              <Pie data={data} innerRadius={80} dataKey='value' label={renderCustomizedLabel} labelLine={false}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} label />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='d-flex align-items-center justify-content-center flex-wrap'>
          <div className='mr-2'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#ffe700' }}></span>
            <span className='align-middle mr-75'>Operational</span>
          </div>
          <div className='mr-2'>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#ffa1a1' }}></span>
            <span className='align-middle mr-75'>Networking</span>
          </div>
          <div className='mr-2'>
            <span className='bullet bullet-sm bullet-primary bullet-bordered mr-50'></span>
            <span className='align-middle mr-75'>Hiring</span>
          </div>
          <div>
            <span className='bullet bullet-sm bullet-bordered mr-50' style={{ backgroundColor: '#00d4bd' }}></span>
            <span className='align-middle mr-75'>R&amp;D</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SimplePieChart
