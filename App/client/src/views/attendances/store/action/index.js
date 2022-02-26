import axios from 'axios'

import { toast, Slide } from 'react-toastify'

// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// ** ActionTypes Constants
import {
  GET_STUDENTS
} from './actionTypes'


// ** Get SEMESTER
export const getStudents = (periodId, subjectId) => {
  return async dispatch => {
    await axios
      .post(`http://127.0.0.1:8000/api/students/find-by-subject-period?period=${periodId}&subject_id=${subjectId}`)
      .then(response => {
        dispatch({
          type: GET_STUDENTS,
          students: response.data.data
        })
      })
      .catch(() => {
        MySwal.fire('Failed!', 'There was something wrong.', 'warning')
      })
  }
}
