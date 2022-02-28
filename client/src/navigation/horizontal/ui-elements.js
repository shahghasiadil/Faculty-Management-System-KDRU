import { Layers, Type, Droplet, Eye, CreditCard, Circle, Briefcase, Box, Layout } from 'react-feather'

export default [
  {
    id: 'uiElements',
    title: 'User Interface',
    icon: <Layers />,
    children: [
      {
        id: 'typography',
        title: 'Typography',
        icon: <Type />,
        navLink: '/ui-element/typography'
      },
      {
        id: 'colors',
        title: 'Colors',
        icon: <Droplet />,
        navLink: '/colors/colors'
      },
      {
        id: 'feather',
        title: 'Feather',
        icon: <Eye />,
        navLink: '/icons/reactfeather'
      },
      {
        id: 'cards',
        title: 'Card',
        icon: <CreditCard />,
        badge: 'success',
        badgeText: 'New',
        children: [
          {
            id: 'basic',
            title: 'Basic',
            icon: <Circle />,
            navLink: '/cards/basic'
          },
          {
            id: 'cardAdvance',
            title: 'Advance',
            icon: <Circle />,
            navLink: '/cards/advance'
          },
          {
            id: 'cardStatistics',
            title: 'Statistics',
            icon: <Circle />,
            navLink: '/cards/statistics'
          },
          {
            id: 'CardAnalytics',
            title: 'Analytics',
            icon: <Circle />,
            navLink: '/cards/analytics'
          },
          {
            id: 'cardActions',
            title: 'Actions',
            icon: <Circle />,
            navLink: '/cards/action'
          }
        ]
      },
      {
        id: 'components',
        title: 'Components',
        icon: <Briefcase />,
        children: [
          {
            id: 'alerts',
            title: 'Alerts',
            icon: <Circle />,
            navLink: '/components/alerts'
          },
          {
            id: 'autoComplete',
            title: 'Auto Complete',
            icon: <Circle />,
            navLink: '/components/auto-complete'
          },
          {
            id: 'avatar',
            title: 'Avatar',
            icon: <Circle />,
            navLink: '/components/avatar'
          },
          {
            id: 'badges',
            title: 'Badges',
            icon: <Circle />,
            navLink: '/components/badges'
          },
          {
            id: 'blockui',
            title: 'BlockUI',
            icon: <Circle />,
            navLink: '/components/blockui'
          },
          {
            id: 'breadCrumbs',
            title: 'Breadcrumbs',
            icon: <Circle />,
            navLink: '/components/breadcrumbs'
          },
          {
            id: 'buttons',
            title: 'Buttons',
            icon: <Circle />,
            navLink: '/components/buttons'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            icon: <Circle />,
            navLink: '/components/carousel'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            icon: <Circle />,
            navLink: '/components/collapse'
          },
          {
            id: 'divider',
            title: 'Divider',
            icon: <Circle />,
            navLink: '/components/divider'
          },
          {
            id: 'dropDowns',
            title: 'Dropdowns',
            icon: <Circle />,
            navLink: '/components/dropdowns'
          },
          {
            id: 'listGroup',
            title: 'List Group',
            icon: <Circle />,
            navLink: '/components/list-group'
          },
          {
            id: 'mediaObjects',
            title: 'Media Objects',
            icon: <Circle />,
            navLink: '/components/media-objects'
          },
          {
            id: 'modals',
            title: 'Modals',
            icon: <Circle />,
            navLink: '/components/modals'
          },
          {
            id: 'navsComponent',
            title: 'Navs Component',
            icon: <Circle />,
            navLink: '/components/nav-component'
          },
          {
            id: 'pagination',
            title: 'Pagination',
            icon: <Circle />,
            navLink: '/components/pagination'
          },
          {
            id: 'pillBadges',
            title: 'Pill Badges',
            icon: <Circle />,
            navLink: '/components/pill-badges'
          },
          {
            id: 'pillsComponent',
            title: 'Pills Component',
            icon: <Circle />,
            navLink: '/components/pills-component'
          },
          {
            id: 'popovers',
            title: 'Popovers',
            icon: <Circle />,
            navLink: '/components/popovers'
          },
          {
            id: 'progress',
            title: 'Progress',
            icon: <Circle />,
            navLink: '/components/progress'
          },
          {
            id: 'spinners',
            title: 'Spinner',
            icon: <Circle />,
            navLink: '/components/spinners'
          },
          {
            id: 'tabsComponent',
            title: 'Tabs Component',
            icon: <Circle />,
            navLink: '/components/tabs-component'
          },
          {
            id: 'timeline',
            title: 'Timeline',
            icon: <Circle />,
            navLink: '/components/timeline'
          },
          {
            id: 'toasts',
            title: 'Toasts',
            icon: <Circle />,
            navLink: '/components/toasts'
          },
          {
            id: 'tooltips',
            title: 'Tooltips',
            icon: <Circle />,
            navLink: '/components/tooltips'
          }
        ]
      },
      {
        id: 'extensions',
        title: 'Extensions',
        icon: <Box />,
        children: [
          {
            id: 'sweetAlert',
            title: 'Sweet Alert',
            icon: <Circle />,
            navLink: '/extensions/sweet-alert'
          },

          {
            id: 'toastr',
            title: 'Toastr',
            icon: <Circle />,
            navLink: '/extensions/toastr'
          },
          {
            id: 'slider',
            title: 'Sliders',
            icon: <Circle />,
            navLink: '/extensions/slider'
          },
          {
            id: 'drag_&_drop',
            title: 'Drag & Drop',
            icon: <Circle />,
            navLink: '/extensions/drag-and-drop'
          },
          {
            id: 'tour',
            title: 'Tour',
            icon: <Circle />,
            navLink: '/extensions/tour'
          },
          {
            id: 'clipBoard',
            title: 'Clipboard',
            icon: <Circle />,
            navLink: '/extensions/clipboard'
          },
          {
            id: 'reactPlayer',
            title: 'React Player',
            icon: <Circle />,
            navLink: '/extensions/react-player'
          },
          {
            id: 'contentMenu',
            title: 'Context Menu',
            icon: <Circle />,
            navLink: '/extensions/context-menu'
          },
          {
            id: 'swiper',
            title: 'Swiper',
            icon: <Circle />,
            navLink: '/extensions/swiper'
          },
          {
            id: 'ratings',
            title: 'Ratings',
            icon: <Circle />,
            navLink: '/extensions/ratings'
          },
          {
            id: 'i18n',
            title: 'I18n',
            icon: <Circle />,
            navLink: '/extensions/i18n'
          },
          {
            id: 'extPagination',
            title: 'React Paginate',
            icon: <Circle />,
            navLink: '/extensions/pagination'
          },
          {
            id: 'extImport',
            title: 'Import',
            icon: <Circle />,
            navLink: '/extensions/import'
          },
          {
            id: 'extExport',
            title: 'Export',
            icon: <Circle />,
            navLink: '/extensions/export'
          },
          {
            id: 'extExportSelected',
            title: 'Export Selected',
            icon: <Circle />,
            navLink: '/extensions/export-selected'
          }
        ]
      },
      {
        id: 'pageLayouts',
        title: 'Page Layouts',
        icon: <Layout />,
        children: [
          {
            id: 'layoutBoxed',
            title: 'Layout Boxed',
            icon: <Circle />,
            navLink: '/page-layout/layout-boxed'
          },
          {
            id: 'withoutMenu',
            title: 'Without Menu',
            icon: <Circle />,
            navLink: '/page-layout/without-menu'
          },
          {
            id: 'layoutEmpty',
            title: 'Layout Empty',
            icon: <Circle />,
            navLink: '/page-layout/layout-empty'
          },
          {
            id: 'layoutBlank',
            title: 'Layout Blank',
            icon: <Circle />,
            navLink: '/page-layout/layout-blank'
          }
        ]
      }
    ]
  }
]
