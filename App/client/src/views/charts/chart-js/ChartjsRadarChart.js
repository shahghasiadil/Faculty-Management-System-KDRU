import { Radar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ChartjsRadarChart = ({ gridLineColor, labelColor }) => {
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'top',
        labels: {
          padding: 25,
          fontColor: labelColor
        }
      },
      layout: {
        padding: {
          top: -20
        }
      },
      tooltips: {
        enabled: false,
        custom(tooltip) {
          const tooltipEl = document.getElementById('tooltip')
          if (tooltip.body) {
            tooltipEl.style.display = 'block'
            if (tooltip.body[0].lines && tooltip.body[0].lines[0]) {
              tooltipEl.innerHTML = tooltip.body[0].lines[0]
            }
          } else {
            setTimeout(function () {
              tooltipEl.style.display = 'none'
            }, 500)
          }
        }
      },
      gridLines: {
        display: false
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false,
          fontColor: labelColor
        },
        gridLines: {
          color: gridLineColor
        },
        angleLines: { color: gridLineColor }
      }
    },
    data = canvas => {
      // For radar gradient color
      const gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150)
      gradientBlue.addColorStop(0, 'rgba(155,136,250, 0.9)')
      gradientBlue.addColorStop(1, 'rgba(155,136,250, 0.8)')

      const gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150)
      gradientRed.addColorStop(0, 'rgba(255,161,161, 0.9)')
      gradientRed.addColorStop(1, 'rgba(255,161,161, 0.8)')

      return {
        labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
        datasets: [
          {
            label: 'Donté Panlin',
            data: [25, 59, 90, 81, 60, 82],
            fill: true,
            backgroundColor: gradientRed,
            borderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
          },
          {
            label: 'Mireska Sunbreeze',
            data: [40, 100, 40, 90, 40, 90],
            fill: true,
            backgroundColor: gradientBlue,
            borderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
          }
        ]
      }
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Radar Chart</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: '355px' }}>
          <Radar data={data} options={options} height={355} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsRadarChart
