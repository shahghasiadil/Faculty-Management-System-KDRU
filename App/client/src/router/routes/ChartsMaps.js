import { lazy } from 'react'

const ChartMapsRoutes = [
  {
    path: '/charts/apex',
    component: lazy(() => import('../../views/charts/apex'))
  },
  {
    path: '/charts/chartjs',
    component: lazy(() => import('../../views/charts/chart-js'))
  },
  {
    path: '/charts/recharts',
    component: lazy(() => import('../../views/charts/recharts'))
  },
  {
    path: '/maps/leaflet',
    component: lazy(() => import('../../views/maps'))
  }
]

export default ChartMapsRoutes
