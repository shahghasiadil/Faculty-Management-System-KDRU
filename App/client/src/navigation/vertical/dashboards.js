import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
<<<<<<< HEAD
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'analyticsDash',
        title: 'Analytics',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      },
      {
        id: 'eCommerceDash',
        title: 'eCommerce',
        icon: <Circle size={12} />,
        navLink: '/dashboard/ecommerce'
      }
    ]
=======
    icon:  <Home size={20} />,
    badge: 'light-warning',
    badgeText: '1',
    navLink: '/dashboard/analytics'
>>>>>>> df3f393260d273b15f526a8272aaf8044f8c05bd
  }
]
