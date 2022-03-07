
import { Layers, Users, Edit3, Book, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Mail, MessageSquare, Edit, List } from 'react-feather'

export default [
    {
        id: 'students',
        title: 'Students',
        icon: <User size={20} />,
        children: [

            {
                id: 'students',
                title: 'Students',
                icon: <Users size={20} />,
                navLink: '/students'
            },
            {
                id: 'repeat',
                title: 'Repeat',
                icon: <Circle size={12} />,
                navLink: '/students-repeat'
            },
            {
                id: 'funded',
                title: 'Funded',
                icon: <Circle size={12} />,
                navLink: '/students-funded'
            }
        ]
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
                navLink: '/schedule-view'
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
                id: 'assign-mid-marks',
                title: 'Assign Mid Marks',
                icon: <Circle size={12} />,
                navLink: '/assign-mid-marks'
            },
            {
                id: 'assign-final-marks',
                title: 'Assign final Marks',
                icon: <Circle size={12} />,
                navLink: '/assign-final-marks'
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
                id: 'attendance',
                title: 'Attendance',
                icon: <Circle size={12} />,
                navLink: '/attendances'
            },
            {
                id: 'report',
                title: 'Report',
                icon: <Circle size={12} />,
                navLink: '/attendances-report'
            }
        ]
    },
    {
        id: 'projects',
        title: 'Projects',
        icon: <User size={20} />,
        children: [
            {
                id: 'project',
                title: 'Assign Project',
                icon: <Circle size={12} />,
                navLink: '/assign-project'
            },
            {
                id: 'report',
                title: 'View Projects',
                icon: <Circle size={12} />,
                navLink: '/projects-report'
            }
        ]
    }
]

