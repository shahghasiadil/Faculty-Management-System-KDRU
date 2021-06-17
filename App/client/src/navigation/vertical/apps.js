import { Mail, MessageSquare, Users, Edit3, Book, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'students', 
    title: 'Students', 
    icon: <Users size={20} />, 
    navLink: '/students' 
  },
  {
    id: 'teachers',
    title: 'Teachers',
    icon: <Users size={20} />,
    navLink: '/teachers'
  },
  {
    id: 'semesters',
    title: 'Semesters',
    icon: <CheckSquare size={20} />,
    navLink: '/semesters'
  },
  {
    id: 'schedules',
    title: 'Schedules',
    icon: <Calendar size={20} />,
    navLink: '/semesters'
  },
  {
    id: 'subjects',
    title: 'Subjects',
    icon: <Book size={20}/>,
    navLink: '/subjects'
  },
  {
    id: 'registration',
    title: 'Registration',
    icon: <Edit3 size={20}/>,
    navLink: '/registration'
  },
  
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/user/edit'
      }
    ]
  }
]
