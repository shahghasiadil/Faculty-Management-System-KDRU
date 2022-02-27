import { BarChart2, PieChart, Circle, Map } from 'react-feather'
export default [
  {
    id: 'chartsAndMaps',
    title: 'Charts & Maps',
    icon: <BarChart2 />,
    children: [
      {
        id: 'charts',
        title: 'Charts',
        icon: <PieChart />,
        children: [
          {
            id: 'apex',
            title: 'Apex',
            icon: <Circle />,
            navLink: '/charts/apex'
          },
          {
            id: 'chartJs',
            title: 'ChartJS',
            icon: <Circle />,
            navLink: '/charts/chartjs'
          },
          {
            id: 'recharts',
            title: 'Recharts',
            icon: <Circle />,
            navLink: '/charts/recharts'
          }
        ]
      },
      {
        id: 'leafletMaps',
        title: 'Leaflet Maps',
        icon: <Map />,
        navLink: '/maps/leaflet'
      }
    ]
  }
]
