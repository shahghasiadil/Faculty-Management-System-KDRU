import { useEffect, useState } from 'react'
import axios from 'axios'
import TinyChartStats from '@components/widgets/stats/TinyChartStats'

const OrdersBarChart = ({ warning }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/orders-bar-chart').then(res => setData(res.data))
  }, [])

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: -15,
        bottom: -15
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        startingShape: 'rounded',
        colors: {
          backgroundBarColors: ['#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3', '#f3f3f3'],
          backgroundBarRadius: 5
        }
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    colors: [warning],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }

  return data !== null ? (
    <TinyChartStats
      height={70}
      type='bar'
      options={options}
      title={data.title}
      stats={data.statistics}
      series={data.series}
    />
  ) : null
}

export default OrdersBarChart
