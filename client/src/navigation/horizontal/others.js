import { Box, Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'
export default [
  {
    id: 'misc',
    title: 'Misc',
    icon: <Box />,
    children: [
      {
        id: 'access-control',
        title: 'Access Control',
        icon: <Shield size={20} />,
        action: 'read',
        resource: 'ACL',
        navLink: '/access-control'
      },
      {
        id: 'menuLevels',
        title: 'Menu Levels',
        icon: <Menu />,
        children: [
          {
            id: 'secondLevel',
            title: 'Second Level 2.1',
            icon: <Circle />,
            navLink: '#'
          },
          {
            id: 'secondLevel1',
            title: 'Second Level 2.2',
            icon: <Circle />,
            children: [
              {
                id: 'ThirdLevel',
                title: 'Third Level 3.1',
                icon: <Circle />,
                navLink: '#'
              },
              {
                id: 'ThirdLevel1',
                title: 'Third Level 3.2',
                icon: <Circle />,
                navLink: '#'
              }
            ]
          }
        ]
      },
      {
        id: 'disabledMenu',
        title: 'Disabled Menu',
        icon: <EyeOff />,
        navLink: '#',
        disabled: true
      },
      {
        id: 'documentation',
        title: 'Documentation',
        icon: <Folder />,
        externalLink: true,
        newTab: true,
        navLink: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation'
      },
      {
        id: 'raiseSupport',
        title: 'Raise Support',
        icon: <LifeBuoy />,
        externalLink: true,
        newTab: true,
        navLink: 'https://pixinvent.ticksy.com/'
      }
    ]
  }
]
