import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/students',
    exact: true,
    component: lazy(() => import('../../views/student/list/'))
  },
  {
    path: '/students/add',
    exact: true,
    component: lazy(() => import('../../views/student/list/register/register'))
  },
  {
    path: '/students/edit/:id',
    component: lazy(() => import('../../views/student/edit/Edit')),
    meta: {
      navLink: '/views/student/edit'
    }
  },
  {
    path: '/students/info/:id',
    exact: true,
    component: lazy(() => import('../../views/student/list/info/'))
  },
  {
    path: '/registrations',
    exact: true,
    component: lazy(() => import('../../views/registrations/list'))
  },
  {
    path: '/views/registrations/edit/:id',
    component: lazy(() => import('../../views/registrations/edit')),
    meta: {
      navLink: '/views/registrations/edit'
    }
  },


  // exam schedule route
  {
    path: '/attendances',
    exact: true,
    component: lazy(() => import('../../views/attendances/list'))
  },
  {
    path: '/assign-marks',
    exact: true,
    component: lazy(() => import('../../views/assign-marks/list'))
  },
  {
    path: '/exam-schedule',
    exact: true,
    component: lazy(() => import('../../views/examschedule/list'))
  },
  {
    path: '/schedule',
    exact: true,
    component: lazy(() => import('../../views/schedule/'))
  },
  {
    path: '/views/exam-schedule/edit/:id',
    exact: true,
    component: lazy(() => import('../../views/examschedule/edit')),
    meta: {
      navLink: '/views/examschedule/edit'
    }
  },

  {
    path: '/projects',
    exact: true,
    component: lazy(() => import('../../views/project/'))
  },
  {
    path: '/final-marks',
    exact: true,
    component: lazy(() => import('../../views/final-marks/list'))
  },
  {
    path: '/marks-report',
    exact: true,
    component: lazy(() => import('../../views/final-marks/list/report'))
  },
  {
    path: '/views/final-mark/edit/:id',
    component: lazy(() => import('../../views/final-marks/edit')),
    meta: {
      navLink: '/views/final-mark/edit'
    }
  },
  {
    path: '/mid-term-marks',
    exact: true,
    component: lazy(() => import('../../views/mid-term-marks/list'))
  },
  {
    path: '/views/mid-term-mark/edit/:id',
    component: lazy(() => import('../../views/mid-term-marks/edit')),
    meta: {
      navLink: '/views/mid-term-mark/edit'
    }
  },
  {
    path: '/chances',
    exact: true,
    component: lazy(() => import('../../views/chance/list'))
  },
  {
    path: '/views/chance/edit/:id',
    component: lazy(() => import('../../views/chance/edit')),
    meta: {
      navLink: '/views/chance/edit'
    }
  },
  {
    path: '/semesters',
    exact: true,
    component: lazy(() => import('../../views/semesters/list'))
  },
  {
    path: '/views/semesters/edit/:id',
    component: lazy(() => import('../../views/semesters/edit')),
    meta: {
      navLink: '/views/semester/edit'
    }
  },
  {
    path: '/teachers',
    exact: true,
    component: lazy(() => import('../../views/teachers/list'))
  },
  {
    path: '/views/teachers/edit/:id',
    component: lazy(() => import('../../views/teachers/edit')),
    meta: {
      navLink: '/views/teacher/edit'
    }
  },
  {
    path: '/subjects',
    exact: true,
    component: lazy(() => import('../../views/subjects/list'))
  },
  {
    path: '/views/subject/edit/:id',
    component: lazy(() => import('../../views/subjects/edit')),
    meta: {
      navLink: '/views/subject/edit'
    }
  },

  // {
  //   path:'/schedules',
  //   exact:true,
  //   component:lazy(() => import('../../views/schedules/list'))
  // },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  }
]

export default AppRoutes
