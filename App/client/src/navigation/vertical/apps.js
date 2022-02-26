
import { Layers, Users, Edit3, Book, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Mail, MessageSquare, Edit, List } from 'react-feather'

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
    children: [
      {
        id: 'schedules',
        title: 'Schedules',
        icon: <Circle size={12} />,
        navLink: '/schedules'
      },
      {
        id: 'exam-schedules',
        title: 'Exam Schedules',
        icon: <Circle size={12} />,
        navLink: '/exam-schedule'
      },
      {
        id: 'view-schedule',
        title: 'View Schedule',
        icon: <Circle size={12} />,
        navLink: '/view-schedule'
      },
      {
        id: 'view-exam-schedule',
        title: 'View Exam Schedule',
        icon: <Circle size={12} />,
        navLink: '/view-exam-schedule'
      }
    ]
  },
  {
    id: 'subjects',
    title: 'Subjects',
    icon: <Book size={20} />,
    navLink: '/subjects'
  },
  {
    id: 'marks',
    title: 'Marks',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'midterm',
        title: 'Mid Marks',
        icon: <Circle size={12} />,
        navLink: '/mid-term-marks'
      },
      {
        id: 'final-marks',
        title: 'Final Marks',
        icon: <Circle size={12} />,
        navLink: '/final-marks'
      },
      {
        id: 'final-marks-report',
        title: 'Marks Report',
        icon: <Circle size={12} />,
        navLink: '/marks-report'
      },
      {
        id: 'assign-marks',
        title: 'Assign Marks',
        icon: <Circle size={12} />,
        navLink: '/assign-marks'
      }, {
        id: 'chance',
        title: 'Chance',
        icon: <FileText size={20} />,
        navLink: '/chances'
      }
    ]
  },
  {
    id: 'registrations',
    title: 'Registrations',
    icon: <Edit3 size={20} />,
    navLink: '/registrations'
  }, {
    id: 'attendances',
    title: 'Attendances',
    icon: <User size={20} />,
    children: [
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/attendances'
      },
      {
        id: 'report',
        title: 'Report',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <User size={20} />,
    children: [
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/projects'
      },
      {
        id: 'report',
        title: 'Emtpy',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      }
    ]
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

