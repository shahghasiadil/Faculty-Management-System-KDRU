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
<<<<<<< HEAD
<<<<<<< HEAD
import finalMarks from '@src/views/final-marks/store/reducer'
import midTermMarks from '@src/views/mid-term-marks/store/reducer'
import chances from '@src/views/chance/store/reducer'
=======
import teachers from '@src/views/teachers/store/reducer'
>>>>>>> ee2b06aa98d28e0473e4d334482549368f7f9d86
=======
import finalMarks from '@src/views/final-marks/store/reducer'
import midTermMarks from '@src/views/mid-term-marks/store/reducer'
import chances from '@src/views/chance/store/reducer'
>>>>>>> 33dc43707cfa4926c551f5bb2e676d7bbd9a65eb
const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  students,
<<<<<<< HEAD
<<<<<<< HEAD
  finalMarks,
  midTermMarks,
  chances,
=======
  teachers,
>>>>>>> ee2b06aa98d28e0473e4d334482549368f7f9d86
=======
  finalMarks,
  midTermMarks,
  chances,
>>>>>>> 33dc43707cfa4926c551f5bb2e676d7bbd9a65eb
  invoice,
  calendar,
  ecommerce,
  dataTables
})

export default rootReducer
