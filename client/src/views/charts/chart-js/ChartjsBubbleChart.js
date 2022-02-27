import { Bubble } from 'react-chartjs-2'
import { ArrowDown } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Badge } from 'reactstrap'

const ChartjsRadarChart = ({ labelColor, primaryColorShade, warningColorShade, tooltipShadow, gridLineColor }) => {
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              stepSize: 10,
              min: 0,
              max: 140,
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: labelColor
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      }
    },
    data = {
      animation: {
        duration: 10000
      },
      datasets: [
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 20,
              y: 74,
              r: 10
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 30,
              y: 72,
              r: 5
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 10,
              y: 110,
              r: 5
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 40,
              y: 110,
              r: 7
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 20,
              y: 135,
              r: 6
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 10,
              y: 160,
              r: 12
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 30,
              y: 165,
              r: 7
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 40,
              y: 200,
              r: 20
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 90,
              y: 185,
              r: 7
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 50,
              y: 240,
              r: 7
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 60,
              y: 275,
              r: 10
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 70,
              y: 305,
              r: 5
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 80,
              y: 325,
              r: 4
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 50,
              y: 285,
              r: 5
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 60,
              y: 235,
              r: 5
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 70,
              y: 275,
              r: 7
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 80,
              y: 290,
              r: 4
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 90,
              y: 250,
              r: 10
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 100,
              y: 220,
              r: 7
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 120,
              y: 230,
              r: 4
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 110,
              y: 320,
              r: 15
            }
          ]
        },
        {
          backgroundColor: warningColorShade,
          borderColor: warningColorShade,
          data: [
            {
              x: 130,
              y: 330,
              r: 7
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 100,
              y: 310,
              r: 5
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 110,
              y: 240,
              r: 5
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 120,
              y: 270,
              r: 7
            }
          ]
        },
        {
          backgroundColor: primaryColorShade,
          borderColor: primaryColorShade,
          data: [
            {
              x: 130,
              y: 300,
              r: 6
            }
          ]
        }
      ]
    }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Bubble Chart</CardTitle>
        <div className='d-flex align-items-center flex-wrap'>
          <h5 className='font-weight-bolder mb-0 mr-1'>$ 100,000</h5>
          <Badge color='light-secondary'>
            <ArrowDown size={13} className='text-danger' />
            <span className='align-middle ml-25'>20%</span>
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '500px' }}>
          <Bubble data={data} options={options} height={500} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsRadarChart
