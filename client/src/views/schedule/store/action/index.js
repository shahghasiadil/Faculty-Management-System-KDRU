import axios from 'axios'

import { toast, Slide } from 'react-toastify'

// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// ** ActionTypes Constants
import {
  GET_SCHEDULE
} from './actionTypes'


// ** Get SEMESTER
export const getSchedule = (semesterId, year) => {
  return async dispatch => {
    await axios
      .post(`http://127.0.0.1:8000/api/schedules/schedule-filter?semester_id=${semesterId}&year=${year}`)
      .then(response => {
        dispatch({
          type: GET_SCHEDULE,
          schedule: response.data.data
        })
      })
      .catch(() => {
        MySwal.fire('Failed!', 'There was something wrong.', 'warning')
      })
  }
}
