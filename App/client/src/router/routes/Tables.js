import { lazy } from 'react'

const TablesRoutes = [
  {
    path: '/tables/reactstrap',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/datatables/basic',
    component: lazy(() => import('../../views/tables/data-tables/basic'))
  },
  {
    path: '/datatables/advance',
    component: lazy(() => import('../../views/tables/data-tables/advance'))
  }
]

export default TablesRoutes
