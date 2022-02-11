import { Layers, Users, Edit3, Book, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Mail, MessageSquare, Edit, List} from 'react-feather'


export default [

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
    navLink: '/schedules'
  },
  {
    id: 'ExamSchedules',
    title: 'Exam Schedule',
    icon: <Calendar size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <List size={12} />,
        navLink: '/examschedule'
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: <Edit size={12} />,
        navLink: '/examschedule/edit'
      }
    ]
  },
  {
    id: 'subjects',
    title: 'Subjects',
    icon: <Book size={20}/>,
    navLink: '/subjects'
  },
  {
    id: 'final-marks',
    title: 'Final Marks',
    icon: <FileText size={20}/>,
    navLink: '/final-marks'
  },
  {
    id: 'mid-term-marks',
    title: 'Mid Term Marks',
    icon: <FileText size={20}/>,
    navLink: '/mid-term-marks'
  },
  {
    id: 'chance',
    title: 'Chance',
    icon: <FileText size={20}/>,
    navLink: '/chances'
  },
  {
    id: 'registrations',
    title: 'Registrations',
    icon: <Edit3 size={20}/>,
    navLink: '/registrations'
  },
  {
    id:'schedules',
    title:'Schedules',
    icon:<Layers size = {20}/>,
    navLink:'/schedules'
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
