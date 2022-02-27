import { Home, Activity, ShoppingCart } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Analytics',
        icon: <Activity />,
        navLink: '/dashboard/analytics'
      },
      {
        id: 'eCommerceDash',
        title: 'eCommerce',
        icon: <ShoppingCart />,
        navLink: '/dashboard/ecommerce'
      }
    ]
  }
]
