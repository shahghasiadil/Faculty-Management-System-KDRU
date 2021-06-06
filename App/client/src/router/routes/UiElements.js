import { lazy } from 'react'

const UiElementRoutes = [
  {
    path: '/ui-element/typography',
    component: lazy(() => import('../../views/ui-elements/typography'))
  },
  {
    path: '/colors/colors',
    component: lazy(() => import('../../views/ui-elements/colors'))
  },
  {
    path: '/icons/reactfeather',
    component: lazy(() => import('../../views/ui-elements/icons'))
  },
  {
    path: '/cards/basic',
    component: lazy(() => import('../../views/ui-elements/cards/basic'))
  },
  {
    path: '/cards/advance',
    component: lazy(() => import('../../views/ui-elements/cards/advance'))
  },
  {
    path: '/cards/statistics',
    component: lazy(() => import('../../views/ui-elements/cards/statistics'))
  },
  {
    path: '/cards/analytics',
    component: lazy(() => import('../../views/ui-elements/cards/analytics'))
  },
  {
    path: '/cards/action',
    component: lazy(() => import('../../views/ui-elements/cards/actions'))
  },
  {
    path: '/components/alerts',
    component: lazy(() => import('../../views/components/alerts'))
  },
  {
    path: '/components/auto-complete',
    component: lazy(() => import('../../views/components/autocomplete'))
  },
  {
    path: '/components/avatar',
    component: lazy(() => import('../../views/components/avatar'))
  },
  {
    path: '/components/badges',
    component: lazy(() => import('../../views/components/badge'))
  },
  {
    path: '/components/blockui',
    component: lazy(() => import('../../views/components/block-ui'))
  },
  {
    path: '/components/breadcrumbs',
    component: lazy(() => import('../../views/components/breadcrumbs'))
  },
  {
    path: '/components/buttons',
    component: lazy(() => import('../../views/components/buttons'))
  },
  {
    path: '/components/carousel',
    component: lazy(() => import('../../views/components/carousel'))
  },
  {
    path: '/components/collapse',
    component: lazy(() => import('../../views/components/collapse'))
  },
  {
    path: '/components/divider',
    component: lazy(() => import('../../views/components/divider'))
  },
  {
    path: '/components/dropdowns',
    component: lazy(() => import('../../views/components/dropdowns'))
  },
  {
    path: '/components/list-group',
    component: lazy(() => import('../../views/components/listGroup'))
  },
  {
    path: '/components/media-objects',
    component: lazy(() => import('../../views/components/media'))
  },
  {
    path: '/components/modals',
    component: lazy(() => import('../../views/components/modal'))
  },
  {
    path: '/components/nav-component',
    component: lazy(() => import('../../views/components/navComponent'))
  },
  {
    path: '/components/pagination',
    component: lazy(() => import('../../views/components/pagination'))
  },
  {
    path: '/components/pill-badges',
    component: lazy(() => import('../../views/components/badgePills'))
  },
  {
    path: '/components/pills-component',
    component: lazy(() => import('../../views/components/tabPills'))
  },
  {
    path: '/components/popovers',
    component: lazy(() => import('../../views/components/popovers'))
  },
  {
    path: '/components/progress',
    component: lazy(() => import('../../views/components/progress'))
  },
  {
    path: '/components/spinners',
    component: lazy(() => import('../../views/components/spinners'))
  },
  {
    path: '/components/tabs-component',
    component: lazy(() => import('../../views/components/tabs'))
  },
  {
    path: '/components/timeline',
    component: lazy(() => import('../../views/components/timeline'))
  },
  {
    path: '/components/toasts',
    component: lazy(() => import('../../views/components/toasts'))
  },
  {
    path: '/components/tooltips',
    component: lazy(() => import('../../views/components/tooltips'))
  }
]

export default UiElementRoutes
