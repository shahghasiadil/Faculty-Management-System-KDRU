import mock from '../mock'

const data = {
  orders_bar_chart: {
    title: 'Orders',
    statistics: '2,76k',
    series: [
      {
        name: '2020',
        data: [45, 85, 65, 45, 65]
      }
    ]
  },
  profit_line_chart: {
    title: 'Profit',
    statistics: '6,24k',
    series: [
      {
        data: [0, 20, 5, 30, 15, 45]
      }
    ]
  },
  subscribers_gained: {
    series: [
      {
        name: 'Subscribers',
        data: [28, 40, 36, 52, 38, 60, 55]
      }
    ],
    analyticsData: {
      subscribers: 92600
    }
  },
  revenueGenerated: {
    series: [
      {
        name: 'Revenue',
        data: [350, 275, 400, 300, 350, 300, 450]
      }
    ],
    analyticsData: {
      revenue: 97500
    }
  },
  quarterlySales: {
    series: [
      {
        name: 'Sales',
        data: [10, 15, 7, 12, 3, 16]
      }
    ],
    analyticsData: {
      sales: '36%'
    }
  },
  ordersRecevied: {
    series: [
      {
        name: 'Orders',
        data: [10, 15, 8, 15, 7, 12, 8]
      }
    ],
    analyticsData: {
      orders: 97500
    }
  },
  siteTraffic: {
    series: [
      {
        name: 'Traffic Rate',
        data: [150, 200, 125, 225, 200, 250]
      }
    ]
  },
  activeUsers: {
    series: [
      {
        name: 'Active Users',
        data: [750, 1000, 900, 1250, 1000, 1200, 1100]
      }
    ]
  },
  newsletter: {
    series: [
      {
        name: 'Newsletter',
        data: [365, 390, 365, 400, 375, 400]
      }
    ]
  }
}

mock.onGet('/card/card-statistics/orders-bar-chart').reply(() => [200, data.orders_bar_chart])

mock.onGet('/card/card-statistics/profit-line-chart').reply(() => [200, data.profit_line_chart])

mock.onGet('/card/card-statistics/subscribers').reply(() => [200, data.subscribers_gained])

mock.onGet('/card/card-statistics/revenue').reply(() => [200, data.revenueGenerated])

mock.onGet('/card/card-statistics/sales').reply(() => [200, data.quarterlySales])

mock.onGet('/card/card-statistics/orders').reply(() => [200, data.ordersRecevied])

mock.onGet('/card/card-statistics/site-traffic').reply(() => [200, data.siteTraffic])

mock.onGet('/card/card-statistics/active-users').reply(() => [200, data.activeUsers])

mock.onGet('/card/card-statistics/newsletter').reply(() => [200, data.newsletter])
