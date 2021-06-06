import { PieChart, Circle, Map } from 'react-feather'
export default [
  {
    header: 'Charts & Maps'
  },
  {
    id: 'charts',
    title: 'Charts',
    badge: 'light-danger',
    badgeText: '3',
    icon: <PieChart size={20} />,
    children: [
      {
        id: 'apex',
        title: 'Apex',
        icon: <Circle size={12} />,
        navLink: '/charts/apex'
      },
      {
        id: 'chartJs',
        title: 'ChartJS',
        icon: <Circle size={12} />,
        navLink: '/charts/chartjs'
      },
      {
        id: 'recharts',
        title: 'Recharts',
        icon: <Circle size={12} />,
        navLink: '/charts/recharts'
      }
    ]
  },
  {
    id: 'leafletMaps',
    title: 'Leaflet Maps',
    icon: <Map size={20} />,
    navLink: '/maps/leaflet'
  }
]
