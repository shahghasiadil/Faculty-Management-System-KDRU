import { Type, Droplet, Eye, CreditCard, Circle, Briefcase, Box, Layout } from 'react-feather'

export default [
  {
    header: 'User Interface'
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <Type size={12} />,
    navLink: '/ui-element/typography'
  },
  {
    id: 'colors',
    title: 'Colors',
    icon: <Droplet size={20} />,
    navLink: '/colors/colors'
  },
  {
    id: 'feather',
    title: 'Feather',
    icon: <Eye size={20} />,
    navLink: '/icons/reactfeather'
  },
  {
    id: 'cards',
    title: 'Card',
    icon: <CreditCard size={20} />,
    badge: 'light-success',
    badgeText: 'New',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        icon: <Circle size={12} />,
        navLink: '/cards/basic'
      },
      {
        id: 'cardAdvance',
        title: 'Advance',
        icon: <Circle size={12} />,
        navLink: '/cards/advance'
      },
      {
        id: 'cardStatistics',
        title: 'Statistics',
        icon: <Circle size={12} />,
        navLink: '/cards/statistics'
      },
      {
        id: 'CardAnalytics',
        title: 'Analytics',
        icon: <Circle size={12} />,
        navLink: '/cards/analytics'
      },
      {
        id: 'cardActions',
        title: 'Actions',
        icon: <Circle size={12} />,
        navLink: '/cards/action'
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    icon: <Briefcase size={20} />,
    children: [
      {
        id: 'alerts',
        title: 'Alerts',
        icon: <Circle size={12} />,
        navLink: '/components/alerts'
      },
      {
        id: 'autoComplete',
        title: 'Auto Complete',
        icon: <Circle size={12} />,
        navLink: '/components/auto-complete'
      },
      {
        id: 'avatar',
        title: 'Avatar',
        icon: <Circle size={12} />,
        navLink: '/components/avatar'
      },
      {
        id: 'badges',
        title: 'Badges',
        icon: <Circle size={12} />,
        navLink: '/components/badges'
      },
      {
        id: 'blockui',
        title: 'BlockUI',
        icon: <Circle size={12} />,
        navLink: '/components/blockui'
      },
      {
        id: 'breadCrumbs',
        title: 'Breadcrumbs',
        icon: <Circle size={12} />,
        navLink: '/components/breadcrumbs'
      },
      {
        id: 'buttons',
        title: 'Buttons',
        icon: <Circle size={12} />,
        navLink: '/components/buttons'
      },
      {
        id: 'carousel',
        title: 'Carousel',
        icon: <Circle size={12} />,
        navLink: '/components/carousel'
      },
      {
        id: 'collapse',
        title: 'Collapse',
        icon: <Circle size={12} />,
        navLink: '/components/collapse'
      },
      {
        id: 'divider',
        title: 'Divider',
        icon: <Circle size={12} />,
        navLink: '/components/divider'
      },
      {
        id: 'dropDowns',
        title: 'Dropdowns',
        icon: <Circle size={12} />,
        navLink: '/components/dropdowns'
      },
      {
        id: 'listGroup',
        title: 'List Group',
        icon: <Circle size={12} />,
        navLink: '/components/list-group'
      },
      {
        id: 'mediaObjects',
        title: 'Media Objects',
        icon: <Circle size={12} />,
        navLink: '/components/media-objects'
      },
      {
        id: 'modals',
        title: 'Modals',
        icon: <Circle size={12} />,
        navLink: '/components/modals'
      },
      {
        id: 'navsComponent',
        title: 'Navs Component',
        icon: <Circle size={12} />,
        navLink: '/components/nav-component'
      },
      {
        id: 'pagination',
        title: 'Pagination',
        icon: <Circle size={12} />,
        navLink: '/components/pagination'
      },
      {
        id: 'pillBadges',
        title: 'Pill Badges',
        icon: <Circle size={12} />,
        navLink: '/components/pill-badges'
      },
      {
        id: 'pillsComponent',
        title: 'Pills Component',
        icon: <Circle size={12} />,
        navLink: '/components/pills-component'
      },
      {
        id: 'popovers',
        title: 'Popovers',
        icon: <Circle size={12} />,
        navLink: '/components/popovers'
      },
      {
        id: 'progress',
        title: 'Progress',
        icon: <Circle size={12} />,
        navLink: '/components/progress'
      },
      {
        id: 'spinners',
        title: 'Spinner',
        icon: <Circle size={12} />,
        navLink: '/components/spinners'
      },
      {
        id: 'tabsComponent',
        title: 'Tabs Component',
        icon: <Circle size={12} />,
        navLink: '/components/tabs-component'
      },
      {
        id: 'timeline',
        title: 'Timeline',
        icon: <Circle size={12} />,
        navLink: '/components/timeline'
      },
      {
        id: 'toasts',
        title: 'Toasts',
        icon: <Circle size={12} />,
        navLink: '/components/toasts'
      },
      {
        id: 'tooltips',
        title: 'Tooltips',
        icon: <Circle size={12} />,
        navLink: '/components/tooltips'
      }
    ]
  },
  {
    id: 'extensions',
    title: 'Extensions',
    icon: <Box size={20} />,
    children: [
      {
        id: 'sweetAlert',
        title: 'Sweet Alert',
        icon: <Circle size={12} />,
        navLink: '/extensions/sweet-alert'
      },
      {
        id: 'toastr',
        title: 'Toastr',
        icon: <Circle size={12} />,
        navLink: '/extensions/toastr'
      },
      {
        id: 'slider',
        title: 'Sliders',
        icon: <Circle size={12} />,
        navLink: '/extensions/slider'
      },
      {
        id: 'drag_&_drop',
        title: 'Drag & Drop',
        icon: <Circle size={12} />,
        navLink: '/extensions/drag-and-drop'
      },
      {
        id: 'tour',
        title: 'Tour',
        icon: <Circle size={12} />,
        navLink: '/extensions/tour'
      },
      {
        id: 'clipBoard',
        title: 'Clipboard',
        icon: <Circle size={12} />,
        navLink: '/extensions/clipboard'
      },
      {
        id: 'reactPlayer',
        title: 'React Player',
        icon: <Circle size={12} />,
        navLink: '/extensions/react-player'
      },
      {
        id: 'contentMenu',
        title: 'Context Menu',
        icon: <Circle size={12} />,
        navLink: '/extensions/context-menu'
      },
      {
        id: 'swiper',
        title: 'Swiper',
        icon: <Circle size={12} />,
        navLink: '/extensions/swiper'
      },
      {
        id: 'ratings',
        title: 'Ratings',
        icon: <Circle size={12} />,
        navLink: '/extensions/ratings'
      },
      {
        id: 'i18n',
        title: 'I18n',
        icon: <Circle size={12} />,
        navLink: '/extensions/i18n'
      },
      {
        id: 'extPagination',
        title: 'React Paginate',
        icon: <Circle size={12} />,
        navLink: '/extensions/pagination'
      },
      {
        id: 'extImport',
        title: 'Import',
        icon: <Circle size={12} />,
        navLink: '/extensions/import'
      },
      {
        id: 'extExport',
        title: 'Export',
        icon: <Circle size={12} />,
        navLink: '/extensions/export'
      },
      {
        id: 'extExportSelected',
        title: 'Export Selected',
        icon: <Circle size={12} />,
        navLink: '/extensions/export-selected'
      }
    ]
  },
  {
    id: 'pageLayouts',
    title: 'Page Layouts',
    icon: <Layout size={20} />,
    children: [
      {
        id: 'collapsedMenu',
        title: 'Collapsed Menu',
        icon: <Circle size={12} />,
        navLink: '/page-layout/collapse-menu'
      },
      {
        id: 'layoutBoxed',
        title: 'Layout Boxed',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-boxed'
      },
      {
        id: 'withoutMenu',
        title: 'Without Menu',
        icon: <Circle size={12} />,
        navLink: '/page-layout/without-menu'
      },
      {
        id: 'layoutEmpty',
        title: 'Layout Empty',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      },
      {
        id: 'layoutBlank',
        title: 'Layout Blank',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-blank'
      }
    ]
  }
]
