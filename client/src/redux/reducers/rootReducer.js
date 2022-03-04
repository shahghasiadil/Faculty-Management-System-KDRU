// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'
import students from '@src/views/student/store/reducer'
import finalMarks from '@src/views/final-marks/store/reducer'
import midTermMarks from '@src/views/mid-term-marks/store/reducer'
import chances from '@src/views/chance/store/reducer'
import teachers from '@src/views/teachers/store/reducer'
import semesters from '@src/views/semesters/store/reducer'
import registrations from '@src/views/registrations/store/reducer'
import ExamSchedules from '@src/views/examschedule/store/reducer'
import attendance from '../../views/attendances/store/reducer'
import schedules from '../../views/schedules/store/reducer'
import projects from '../../views/project/store/reducer'
// import semesters from '@src/views/semesters/store/reducer'
import subjects from '@src/views/subjects/store/reducer'
// import finalMarks from '@src/views/final-marks/store/reducer'
// import midTermMarks from '@src/views/mid-term-marks/store/reducer'
// import chances from '@src/views/chance/store/reducer'
const rootReducer = combineReducers({
    auth,
    todo,
    chat,
    email,
    users,
    navbar,
    layout,
    registrations,
    ExamSchedules,
    subjects,
    students,
    finalMarks,
    midTermMarks,
    chances,
    teachers,
    semesters,
    invoice,
    calendar,
    ecommerce,
    dataTables,
    attendance,
    schedules,
    projects
})

export default rootReducer
