import { lazy } from 'react'

const FormRoutes = [
  {
    path: '/forms/elements/input',
    component: lazy(() => import('../../views/forms/form-elements/input'))
  },
  {
    path: '/forms/elements/input-group',
    component: lazy(() => import('../../views/forms/form-elements/input-groups'))
  },
  {
    path: '/forms/elements/input-mask',
    component: lazy(() => import('../../views/forms/form-elements/input-mask'))
  },
  {
    path: '/forms/elements/textarea',
    component: lazy(() => import('../../views/forms/form-elements/textarea'))
  },
  {
    path: '/forms/elements/checkbox',
    component: lazy(() => import('../../views/forms/form-elements/checkboxes'))
  },
  {
    path: '/forms/elements/radio',
    component: lazy(() => import('../../views/forms/form-elements/radio'))
  },
  {
    path: '/forms/elements/switch',
    component: lazy(() => import('../../views/forms/form-elements/switch'))
  },
  {
    path: '/forms/elements/select',
    component: lazy(() => import('../../views/forms/form-elements/select'))
  },
  {
    path: '/forms/elements/number-input',
    component: lazy(() => import('../../views/forms/form-elements/number-input'))
  },
  {
    path: '/forms/elements/file-uploader',
    component: lazy(() => import('../../views/forms/form-elements/file-uploader'))
  },
  {
    path: '/forms/elements/editor',
    component: lazy(() => import('../../views/forms/form-elements/editor'))
  },
  {
    path: '/forms/elements/pickers',
    component: lazy(() => import('../../views/forms/form-elements/datepicker'))
  },
  {
    path: '/forms/layout/form-layout',
    component: lazy(() => import('../../views/forms/form-layouts'))
  },
  {
    path: '/forms/wizard',
    component: lazy(() => import('../../views/forms/wizard'))
  },
  {
    path: '/forms/react-hook-form',
    component: lazy(() => import('../../views/forms/validations/react-hook-form'))
  },
  {
    path: '/forms/reactstrap-validation',
    component: lazy(() => import('../../views/forms/validations/reactstrap'))
  },
  {
    path: '/forms/form-repeater',
    component: lazy(() => import('../../views/forms/form-repeater'))
  }
]

export default FormRoutes
