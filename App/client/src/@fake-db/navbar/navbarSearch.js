import mock from '../mock'

export const searchArr = [
  {
    groupTitle: 'Pages',
    searchLimit: 4,
    data: [
      {
        id: 1,
        target: 'analyticsDash',
        isBookmarked: false,
        title: 'Analytics Dashboard',
        icon: 'Home',
        link: '/dashboard/analytics'
      },
      {
        id: 2,
        target: 'eCommerceDash',
        isBookmarked: false,
        title: 'eCommerce Dashboard',
        icon: 'Home',
        link: '/'
      },
      {
        id: 3,
        target: 'email',
        isBookmarked: true,
        title: 'Email',
        icon: 'Mail',
        link: '/apps/email'
      },
      {
        id: 4,
        target: 'chat',
        isBookmarked: true,
        title: 'Chat',
        icon: 'MessageSquare',
        link: '/apps/chat'
      },
      {
        id: 5,
        target: 'todo',
        isBookmarked: true,
        title: 'Todo',
        icon: 'CheckSquare',
        link: '/apps/todo'
      },
      {
        id: 6,
        target: 'calendar',
        isBookmarked: true,
        title: 'Calendar',
        icon: 'Calendar',
        link: '/apps/calendar'
      },
      {
        id: 7,
        target: 'invoiceList',
        isBookmarked: false,
        title: 'Invoice List',
        icon: 'List',
        link: '/apps/invoice/list'
      },
      {
        id: 8,
        target: 'invoicePreview',
        isBookmarked: false,
        title: 'Invoice Preview',
        icon: 'FileText',
        link: '/apps/invoice/preview'
      },
      {
        id: 9,
        target: 'invoiceEdit',
        isBookmarked: false,
        title: 'Invoice Edit',
        icon: 'Edit',
        link: '/apps/invoice/edit'
      },
      {
        id: 10,
        target: 'invoiceAdd',
        isBookmarked: false,
        title: 'Invoice Add',
        icon: 'Plus',
        link: '/apps/invoice/add'
      },
      {
        id: 11,
        target: 'shop',
        isBookmarked: false,
        title: 'Shop Ecommerce',
        icon: 'ShoppingCart',
        link: '/apps/ecommerce/shop'
      },
      {
        id: 12,
        target: 'detail',
        isBookmarked: false,
        title: 'Product Detail',
        icon: 'Circle',
        link: '/apps/ecommerce/product-detail'
      },
      {
        id: 13,
        target: 'wishList',
        isBookmarked: false,
        title: 'Wish List',
        icon: 'Heart',
        link: '/apps/ecommerce/wishlist'
      },
      {
        id: 14,
        target: 'checkout',
        isBookmarked: false,
        title: 'Checkout',
        icon: 'CreditCard',
        link: '/apps/ecommerce/checkout'
      },
      {
        id: 15,
        target: 'userList',
        isBookmarked: false,
        title: 'User List',
        icon: 'User',
        link: '/apps/user/list'
      },
      {
        id: 16,
        target: 'userView',
        isBookmarked: false,
        title: 'User View',
        icon: 'User',
        link: '/apps/user/view'
      },
      {
        id: 17,
        target: 'userEdit',
        isBookmarked: false,
        title: 'User Edit',
        icon: 'User',
        link: '/apps/user/edit'
      },
      {
        id: 18,
        target: 'login-v1',
        isBookmarked: false,
        title: 'Login v1 Page',
        icon: 'LogIn',
        link: '/pages/login-v1'
      },
      {
        id: 19,
        target: 'login-v2',
        isBookmarked: false,
        title: 'Login v2 Page',
        icon: 'LogIn',
        link: '/pages/login-v2'
      },
      {
        id: 20,
        target: 'register-v1',
        isBookmarked: false,
        title: 'Register v1 Page',
        icon: 'UserPlus',
        link: '/pages/register-v1'
      },
      {
        id: 21,
        target: 'register-v2',
        isBookmarked: false,
        title: 'Register v2 Page',
        icon: 'UserPlus',
        link: '/pages/register-v2'
      },
      {
        id: 22,
        target: 'forgotPassword-v1',
        isBookmarked: false,
        title: 'Forgot Password v1 Page',
        icon: 'Crosshair',
        link: '/pages/forgot-password-v1'
      },
      {
        id: 23,
        target: 'forgotPassword-v2',
        isBookmarked: false,
        title: 'Forgot Password v2 Page',
        icon: 'Crosshair',
        link: '/pages/forgot-password-v2'
      },
      {
        id: 24,
        target: 'resetPassword-v1',
        isBookmarked: false,
        title: 'Reset Password v1 Page',
        icon: 'TrendingUp',
        link: '/pages/reset-password-v1'
      },
      {
        id: 25,
        target: 'resetPassword-v2',
        isBookmarked: false,
        title: 'Reset Password v2 Page',
        icon: 'TrendingUp',
        link: '/pages/reset-password-v2'
      },
      {
        id: 26,
        target: 'accountSettings',
        isBookmarked: false,
        title: 'Account Settings',
        icon: 'Settings',
        link: '/pages/account-settings'
      },
      {
        id: 27,
        target: 'profile',
        isBookmarked: false,
        title: 'Profile Page',
        icon: 'Users',
        link: '/pages/profile',
        collapsed: true
      },
      {
        id: 28,
        target: 'faq',
        isBookmarked: false,
        title: 'FAQ Page',
        icon: 'Zap',
        link: '/pages/faq'
      },
      {
        id: 29,
        target: 'knowledgeBase',
        isBookmarked: false,
        title: 'Knowledge Base Page',
        icon: 'AlignLeft',
        link: '/pages/knowledge-base'
      },

      {
        id: 30,
        target: 'pricing',
        isBookmarked: false,
        title: 'Pricing',
        icon: 'DollarSign',
        link: '/pages/pricing'
      },

      {
        id: 31,
        target: 'blogList',
        isBookmarked: false,
        title: 'Blog List',
        icon: 'List',
        link: '/pages/blog/list'
      },
      {
        id: 32,
        target: 'blogDetail',
        isBookmarked: false,
        title: 'Blog Details',
        icon: 'FileText',
        link: '/pages/blog/detail'
      },
      {
        id: 33,
        target: 'blogEdit',
        isBookmarked: false,
        title: 'Blog Edit',
        icon: 'Edit',
        link: '/pages/blog/edit'
      },

      {
        id: 34,
        target: 'comingSoon',
        isBookmarked: false,
        title: 'Coming Soon Page',
        icon: 'Watch',
        link: '/misc/coming-soon'
      },

      {
        id: 35,
        target: 'notAuthorized',
        isBookmarked: false,
        title: 'Not Authorized Page',
        icon: 'UserX',
        link: '/misc/not-authorized'
      },
      {
        id: 36,
        target: 'maintenance',
        isBookmarked: false,
        title: 'Maintenance Page',
        icon: 'Aperture',
        link: '/misc/maintenance'
      },
      {
        id: 37,
        target: 'error',
        isBookmarked: false,
        title: 'Error',
        icon: 'AlertTriangle',
        link: '/misc/error'
      },
      {
        id: 38,
        target: 'typography',
        isBookmarked: false,
        title: 'Typography',
        icon: 'Type',
        link: '/ui-element/typography'
      },
      {
        id: 39,
        target: 'colors',
        isBookmarked: false,
        title: 'Colors',
        icon: 'Feather',
        link: '/colors/colors'
      },
      {
        id: 40,
        target: 'feather',
        isBookmarked: false,
        title: 'Feather Icons',
        icon: 'Feather',
        link: '/icons/reactfeather'
      },
      {
        id: 41,
        target: 'basic',
        isBookmarked: false,
        title: 'Card Basic',
        icon: 'Square',
        link: '/cards/basic'
      },
      {
        id: 42,
        target: 'cardAdvance',
        isBookmarked: false,
        title: 'Card Advance',
        icon: 'Tablet',
        link: '/cards/advance'
      },
      {
        id: 43,
        target: 'cardStatistics',
        isBookmarked: false,
        title: 'Card Statistics',
        icon: 'Smartphone',
        link: '/cards/statistics'
      },
      {
        id: 44,
        target: 'CardAnalytics',
        isBookmarked: false,
        title: 'Card Analytics',
        icon: 'BarChart2',
        link: '/cards/analytics'
      },
      {
        id: 45,
        target: 'cardActions',
        isBookmarked: false,
        title: 'Card Actions',
        icon: 'Airplay',
        link: '/cards/action'
      },
      {
        id: 46,
        target: 'alerts',
        isBookmarked: false,
        title: 'Alerts',
        icon: 'Info',
        link: '/components/alerts'
      },
      {
        id: 47,
        target: 'autoComplete',
        isBookmarked: false,
        title: 'Auto Complete',
        icon: 'Search',
        link: '/components/auto-complete'
      },
      {
        id: 48,
        target: 'avatar',
        isBookmarked: false,
        title: 'Avatar',
        icon: 'User',
        link: '/components/avatar'
      },
      {
        id: 49,
        target: 'badges',
        isBookmarked: false,
        title: 'Badges',
        icon: 'Circle',
        link: '/components/badges'
      },
      {
        id: 50,
        target: 'breadCrumbs',
        isBookmarked: false,
        title: 'Breadcrumbs',
        icon: 'MoreHorizontal',
        link: '/components/breadcrumbs'
      },
      {
        id: 51,
        target: 'buttons',
        isBookmarked: false,
        title: 'Buttons',
        icon: 'Inbox',
        link: '/components/buttons'
      },
      {
        id: 52,
        target: 'carousel',
        isBookmarked: false,
        title: 'Carousel',
        icon: 'Map',
        link: '/components/carousel'
      },
      {
        id: 53,
        target: 'collapse',
        isBookmarked: false,
        title: 'Collapse',
        icon: 'Minimize',
        link: '/components/collapse'
      },
      {
        id: 54,
        target: 'divider',
        isBookmarked: false,
        title: 'Divider',
        icon: 'Minus',
        link: '/components/divider'
      },
      {
        id: 55,
        target: 'dropDowns',
        isBookmarked: false,
        title: 'Dropdowns',
        icon: 'Inbox',
        link: '/components/dropdowns'
      },
      {
        id: 56,
        target: 'listGroup',
        isBookmarked: false,
        title: 'List Group',
        icon: 'Layers',
        link: '/components/list-group'
      },
      {
        id: 57,
        target: 'mediaObjects',
        isBookmarked: false,
        title: 'Media Objects',
        icon: 'Image',
        link: '/components/media-objects'
      },
      {
        id: 58,
        target: 'modals',
        isBookmarked: false,
        title: 'Modals',
        icon: 'Maximize2',
        link: '/components/modals'
      },
      {
        id: 59,
        target: 'navsComponent',
        isBookmarked: false,
        title: 'Navs Component',
        icon: 'MoreVertical',
        link: '/components/nav-component'
      },
      {
        id: 60,
        target: 'pagination',
        isBookmarked: false,
        title: 'Pagination',
        icon: 'ChevronsRight',
        link: '/components/pagination'
      },
      {
        id: 61,
        target: 'pillBadges',
        isBookmarked: false,
        title: 'Pill Badges',
        icon: 'Circle',
        link: '/components/pill-badges'
      },
      {
        id: 62,
        target: 'pillsComponent',
        isBookmarked: false,
        title: 'Pills Component',
        icon: 'ToggleRight',
        link: '/components/pills-component'
      },
      {
        id: 63,
        target: 'popovers',
        isBookmarked: false,
        title: 'Popovers',
        icon: 'MessageCircle',
        link: '/components/popovers'
      },
      {
        id: 64,
        target: 'progress',
        isBookmarked: false,
        title: 'Progress',
        icon: 'Server',
        link: '/components/progress'
      },
      {
        id: 65,
        target: 'spinners',
        isBookmarked: false,
        title: 'Spinners',
        icon: 'Sun',
        link: '/components/spinners'
      },
      {
        id: 66,
        target: 'tabsComponent',
        isBookmarked: false,
        title: 'Tabs Component',
        icon: 'Server',
        link: '/components/tabs-component'
      },
      {
        id: 67,
        target: 'timeline',
        isBookmarked: false,
        title: 'Timeline',
        icon: 'MoreVertical',
        link: '/components/timeline'
      },
      {
        id: 68,
        target: 'toasts',
        isBookmarked: false,
        title: 'Toasts',
        icon: 'Triangle',
        link: '/components/toasts'
      },
      {
        id: 69,
        target: 'tooltips',
        isBookmarked: false,
        title: 'Tooltips',
        icon: 'MessageCircle',
        link: '/components/tooltips'
      },
      {
        id: 70,
        target: 'sweetAlert',
        isBookmarked: false,
        title: 'Sweet Alerts',
        icon: 'AlertTriangle',
        link: '/extensions/sweet-alert'
      },
      {
        id: 71,
        target: 'blockui',
        isBookmarked: false,
        title: 'BlockUI',
        icon: 'Loader',
        link: '/components/blockui'
      },
      {
        id: 72,
        target: 'toastr',
        isBookmarked: false,
        title: 'Toastr',
        icon: 'CreditCard',
        link: '/extensions/toastr'
      },
      {
        id: 73,
        target: 'slider',
        isBookmarked: false,
        title: 'Slider',
        icon: 'Sliders',
        link: '/extensions/slider'
      },
      {
        id: 74,
        target: 'drag_&_drop',
        isBookmarked: false,
        title: 'Drag & Drop',
        icon: 'Move',
        link: '/extensions/drag-and-drop'
      },
      {
        id: 75,
        target: 'tour',
        isBookmarked: false,
        title: 'Tour',
        icon: 'Airplay',
        link: '/extensions/tour'
      },
      {
        id: 76,
        target: 'clipBoard',
        isBookmarked: false,
        title: 'Clipboard',
        icon: 'Clipboard',
        link: '/extensions/clipboard'
      },
      {
        id: 77,
        target: 'mediaPlayer',
        isBookmarked: false,
        title: 'React Player',
        icon: 'Film',
        link: '/extensions/react-player'
      },
      {
        id: 78,
        target: 'contentMenu',
        isBookmarked: false,
        title: 'Context Menu',
        icon: 'Menu',
        link: '/extensions/context-menu'
      },
      {
        id: 79,
        target: 'swiper',
        isBookmarked: false,
        title: 'Swiper',
        icon: 'Smartphone',
        link: '/extensions/swiper'
      },
      {
        id: 81,
        target: 'ratings',
        isBookmarked: false,
        title: 'Ratings',
        icon: 'Star',
        link: '/extensions/ratings'
      },
      {
        id: 82,
        target: 'i18n',
        isBookmarked: false,
        title: 'I18n',
        icon: 'Globe',
        link: '/extensions/i18n'
      },
      {
        id: 83,
        target: 'access-control',
        isBookmarked: false,
        title: 'Access Control',
        icon: 'Lock',
        link: '/access-control'
      },
      {
        id: 84,
        target: 'extPagination',
        isBookmarked: false,
        title: 'React Paginate',
        icon: 'MoreHorizontal',
        link: '/extensions/pagination'
      },
      {
        id: 85,
        target: 'extImport',
        isBookmarked: false,
        title: 'Import',
        icon: 'DownloadCloud',
        link: '/extensions/import'
      },
      {
        id: 86,
        target: 'extExport',
        isBookmarked: false,
        title: 'Export',
        icon: 'UploadCloud',
        link: '/extensions/export'
      },
      {
        id: 87,
        target: 'extExportSelected',
        isBookmarked: false,
        title: 'Export Selected',
        icon: 'CheckSquare',
        link: '/extensions/export-selected'
      },
      {
        id: 88,
        target: 'pageLayout-collapsedMenu',
        isBookmarked: false,
        title: 'Collapsed Menu Page Layout',
        icon: 'Layout',
        link: '/page-layout/collapse-menu'
      },
      {
        id: 89,
        target: 'pageLayout-layoutBoxed',
        isBookmarked: false,
        title: 'Boxed Page Layout',
        icon: 'Layout',
        link: '/page-layout/layout-boxed'
      },
      {
        id: 90,
        target: 'pageLayout-withoutMenu',
        isBookmarked: false,
        title: 'Without Menu Page Layout',
        icon: 'Layout',
        link: '/page-layout/without-menu'
      },
      {
        id: 91,
        target: 'pageLayout-layoutEmpty',
        isBookmarked: false,
        title: 'Empty Page Layout',
        icon: 'Layout',
        link: '/page-layout/layout-empty'
      },
      {
        id: 92,
        target: 'pageLayout-layoutBlank',
        isBookmarked: false,
        title: 'Blank Page Layout',
        icon: 'Layout',
        link: '/page-layout/layout-blank'
      },
      {
        id: 93,
        target: 'input',
        isBookmarked: false,
        title: 'Input',
        icon: 'Server',
        link: '/forms/elements/input'
      },
      {
        id: 94,
        target: 'inputGroup',
        isBookmarked: false,
        title: 'Input Group',
        icon: 'Package',
        link: '/forms/elements/input-group'
      },
      {
        id: 95,
        target: 'inputMask',
        isBookmarked: false,
        title: 'Input Mask',
        icon: 'Copy',
        link: '/forms/elements/input-mask'
      },
      {
        id: 96,
        target: 'textarea',
        isBookmarked: false,
        title: 'Textarea',
        icon: 'Edit2',
        link: '/forms/elements/textarea'
      },
      {
        id: 97,
        target: 'checkbox',
        isBookmarked: false,
        title: 'Checkbox',
        icon: 'CheckSquare',
        link: '/forms/elements/checkbox'
      },
      {
        id: 98,
        target: 'radio',
        isBookmarked: false,
        title: 'Radio',
        icon: 'StopCircle',
        link: '/forms/elements/radio'
      },
      {
        id: 99,
        target: 'switch',
        isBookmarked: false,
        title: 'Switch',
        icon: 'ToggleLeft',
        link: '/forms/elements/switch'
      },
      {
        id: 100,
        target: 'select',
        isBookmarked: false,
        title: 'Select',
        icon: 'Server',
        link: '/forms/elements/select'
      },
      {
        id: 101,
        target: 'numberInput',
        isBookmarked: false,
        title: 'Number Input',
        icon: 'Plus',
        link: '/forms/elements/number-input'
      },
      {
        id: 102,
        target: 'fileUploader',
        isBookmarked: false,
        title: 'File Uploader',
        icon: 'Upload',
        link: '/forms/elements/file-uploader'
      },
      {
        id: 103,
        target: 'quillEditor',
        isBookmarked: false,
        title: 'Editor',
        icon: 'Edit3',
        link: '/forms/elements/editor'
      },
      {
        id: 104,
        target: 'date_&_timePicker',
        isBookmarked: false,
        title: 'Date & Time Picker',
        icon: 'Calendar',
        link: '/forms/elements/pickers'
      },
      {
        id: 105,
        target: 'formLayouts',
        isBookmarked: false,
        title: 'Form Layouts',
        icon: 'Layout',
        link: '/forms/layout/form-layout'
      },
      {
        id: 106,
        target: 'wizard',
        isBookmarked: false,
        title: 'Form Wizard',
        icon: 'Sliders',
        link: '/forms/wizard'
      },
      {
        id: 107,
        target: 'react-hook-form',
        isBookmarked: false,
        title: 'React Hook Form Validation',
        icon: 'ThumbsUp',
        link: '/forms/react-hook-form'
      },
      {
        id: 108,
        target: 'reactstrapVal',
        isBookmarked: false,
        title: 'Reactstrap Validation',
        icon: 'ThumbsUp',
        link: '/forms/reactstrap-validation'
      },
      {
        id: 109,
        target: 'formRepeater',
        isBookmarked: false,
        title: 'Form Repeater',
        icon: 'RotateCw',
        link: '/forms/form-repeater'
      },
      {
        id: 110,
        target: 'tablesReactstrap',
        isBookmarked: false,
        title: 'Reactstrap Tables',
        icon: 'Grid',
        link: '/tables/reactstrap'
      },
      {
        id: 111,
        target: 'dtBasic',
        isBookmarked: false,
        title: 'Datatables Basic',
        icon: 'Grid',
        link: '/datatables/basic'
      },
      {
        id: 112,
        target: 'dtAdvance',
        isBookmarked: false,
        title: 'Datatables Advance',
        icon: 'Grid',
        link: '/datatables/advance'
      },
      {
        id: 114,
        target: 'apex',
        isBookmarked: false,
        title: 'Apex Charts',
        icon: 'BarChart',
        link: '/charts/apex'
      },
      {
        id: 115,
        target: 'chartJs',
        isBookmarked: false,
        title: 'ChartJS',
        icon: 'Activity',
        link: '/charts/chartjs'
      },
      {
        id: 116,
        target: 'recharts',
        isBookmarked: false,
        title: 'Recharts',
        icon: 'BarChart2',
        link: '/charts/recharts'
      },
      {
        id: 117,
        target: 'leafletMaps',
        isBookmarked: false,
        title: 'Leaflet Maps',
        icon: 'MapPin',
        link: '/maps/leaflet'
      }
    ]
  },
  {
    groupTitle: 'Files',
    searchLimit: 4,
    data: [
      {
        title: 'Passport Image',
        by: 'Oliver Queen',
        size: '52kb',
        file: require('@src/assets/images/icons/jpg.png').default
      },
      {
        title: 'Parenting Guide',
        by: 'Alfred Pennyworth',
        size: '2.3mb',
        file: require('@src/assets/images/icons/doc.png').default
      },
      {
        title: 'Class Notes',
        by: 'Barry Allen',
        size: '30kb',
        file: require('@src/assets/images/icons/doc.png').default
      },
      {
        title: 'Class Attendance',
        by: 'Walter White',
        size: '52mb',
        file: require('@src/assets/images/icons/xls.png').default
      }
    ]
  },
  {
    groupTitle: 'Contacts',
    searchLimit: 4,
    data: [
      {
        title: 'Mia Davis',
        email: 'miadavis@teleworm.us',
        img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
        date: '01/03/2020'
      },
      {
        title: 'Norris Carrière',
        email: 'NorrisCarriere@rhyta.com',
        img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
        date: '07/03/2020'
      },
      {
        title: 'Charlotte Gordon',
        email: 'CharlotteGordon@jourrapide.com',
        img: require('@src/assets/images/portrait/small/avatar-s-26.jpg').default,
        date: '14/03/2020'
      },
      {
        title: 'Robert Nash',
        email: 'RobertNash@dayrep.com',
        img: require('@src/assets/images/portrait/small/avatar-s-25.jpg').default,
        date: '21/03/2020'
      }
    ]
  }
]

// GET Search Data
mock.onGet('/api/main-search/data').reply(config => {
  return [200, { searchArr }]
})

// GET Search Data & Bookmarks
mock.onGet('/api/bookmarks/data').reply(config => {
  const bookmarks = searchArr[0].data.filter(item => item.isBookmarked)
  const suggestions = searchArr[0].data
  return [200, { suggestions, bookmarks }]
})

// POST Update isBookmarked
mock.onPost('/api/bookmarks/update').reply(config => {
  const { id } = JSON.parse(config.data)

  const obj = searchArr[0].data.find(item => item.id === id)

  Object.assign(obj, { isBookmarked: !obj.isBookmarked })

  return [200]
})
