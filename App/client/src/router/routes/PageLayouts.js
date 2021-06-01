import { lazy } from 'react'

const PageLayoutRoutes = [
  {
    path: '/page-layout/collapse-menu',
    component: lazy(() => import('../../views/ui-elements/page-layouts/CollapsedMenu')),
    meta: {
      menuCollapsed: true
    }
  },
  {
    path: '/page-layout/layout-boxed',
    component: lazy(() => import('../../views/ui-elements/page-layouts/BoxedLayout')),
    meta: {
      contentWidth: 'boxed'
    }
  },
  {
    path: '/page-layout/without-menu',
    component: lazy(() => import('../../views/ui-elements/page-layouts/WithoutMenu')),
    meta: {
      menuHidden: true
    }
  },
  {
    path: '/page-layout/layout-empty',
    component: lazy(() => import('../../views/ui-elements/page-layouts/LayoutEmpty'))
  },
  {
    path: '/page-layout/layout-blank',
    component: lazy(() => import('../../views/ui-elements/page-layouts/LayoutBlank')),
    layout: 'BlankLayout'
  }
]

export default PageLayoutRoutes
