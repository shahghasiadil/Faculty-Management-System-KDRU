import {
  FileText,
  Unlock,
  Circle,
  Settings,
  User,
  HelpCircle,
  Info,
  DollarSign,
  Clipboard,
  Mail,
  File
} from 'react-feather'
export default [
  {
    id: 'pages',
    title: 'Pages',
    icon: <FileText />,
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        icon: <Unlock />,
        children: [
          {
            id: 'login-v1',
            title: 'Login v1',
            icon: <Circle />,
            navLink: '/pages/login-v1',
            newTab: true
          },
          {
            id: 'login-v2',
            title: 'Login v2',
            icon: <Circle />,
            navLink: '/pages/login-v2',
            newTab: true
          },
          {
            id: 'register-v1',
            title: 'Register v1',
            icon: <Circle />,
            navLink: '/pages/register-v1',
            newTab: true
          },
          {
            id: 'register-v2',
            title: 'Register v2',
            icon: <Circle />,
            navLink: '/pages/register-v2',
            newTab: true
          },
          {
            id: 'forgotPassword-v1',
            title: 'Forgot Password v1',
            icon: <Circle />,
            navLink: '/pages/forgot-password-v1',
            newTab: true
          },
          {
            id: 'forgotPassword-v2',
            title: 'Forgot Password v2',
            icon: <Circle />,
            navLink: '/pages/forgot-password-v2',
            newTab: true
          },
          {
            id: 'resetPassword-v1',
            title: 'Reset Password v1',
            icon: <Circle />,
            navLink: '/pages/reset-password-v1',
            newTab: true
          },
          {
            id: 'resetPassword-v2',
            title: 'Reset Password v2',
            icon: <Circle />,
            navLink: '/pages/reset-password-v2',
            newTab: true
          }
        ]
      },
      {
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Settings />,
        navLink: '/pages/account-settings'
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: <User />,
        navLink: '/pages/profile',
        collapsed: true
      },
      {
        id: 'faq',
        title: 'FAQ',
        icon: <HelpCircle />,
        navLink: '/pages/faq'
      },
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: <Info />,
        navLink: '/pages/knowledge-base',
        parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
      },

      {
        id: 'pricing',
        title: 'Pricing',
        icon: <DollarSign />,
        navLink: '/pages/pricing'
      },

      {
        id: 'blog',
        title: 'Blog',
        icon: <Clipboard />,
        children: [
          {
            id: 'blogList',
            title: 'List',
            icon: <Circle />,
            navLink: '/pages/blog/list'
          },
          {
            id: 'blogDetail',
            title: 'Detail',
            icon: <Circle />,
            navLink: '/pages/blog/detail'
          },
          {
            id: 'blogEdit',
            title: 'Edit',
            icon: <Circle />,
            navLink: '/pages/blog/edit'
          }
        ]
      },

      {
        id: 'mailTemplate',
        title: 'Mail Template',
        icon: <Mail />,
        children: [
          {
            id: 'welcomeTemp',
            title: 'Welcome',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
            externalLink: true
          },
          {
            id: 'resetPassTemp',
            title: 'Reset Password',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
            externalLink: true
          },
          {
            id: 'verifyEmailTemp',
            title: 'Verify Email',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
            externalLink: true
          },
          {
            id: 'deactivateAccountTemp',
            title: 'Deactivate Account',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
            externalLink: true
          },
          {
            id: 'invoiceMailTemp',
            title: 'Invoice',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
            externalLink: true
          },
          {
            id: 'promotionalMailTemp',
            title: 'Promotional',
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
            externalLink: true
          }
        ]
      },

      {
        id: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <File />,
        children: [
          {
            id: 'comingSoon',
            title: 'Coming Soon',
            icon: <Circle />,
            navLink: '/misc/coming-soon',
            newTab: true
          },

          {
            id: 'notAuthorized',
            title: 'Not Authorized',
            icon: <Circle />,
            navLink: '/misc/not-authorized',
            newTab: true
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            icon: <Circle />,
            navLink: '/misc/maintenance',
            newTab: true
          },
          {
            id: 'error',
            title: 'Error',
            icon: <Circle />,
            navLink: '/misc/error',
            newTab: true
          }
        ]
      }
    ]
  }
]
