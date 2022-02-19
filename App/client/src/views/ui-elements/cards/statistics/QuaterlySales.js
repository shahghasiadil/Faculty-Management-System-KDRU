import { useEffect, useState } from 'react'
import axios from 'axios'
import { ShoppingCart } from 'react-feather'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const QuarterlySales = ({ danger }) => {
  const [data, setData] = useState(null)

  const options = {
    chart: {
      id: 'revenue',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      show: false
    },
    colors: [danger],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100]
      }
    },

    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: { show: false }
    }
  }

  useEffect(() => {
    axios.get('/card/card-statistics/sales').then(res => setData(res.data))
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<ShoppingCart size={21} />}
      color='danger'
      stats={data.analyticsData.sales}
      statTitle='Quarterly Sales'
      options={options}
      series={data.series}
      type='area'
    />
  ) : null
}
export default QuarterlySales
