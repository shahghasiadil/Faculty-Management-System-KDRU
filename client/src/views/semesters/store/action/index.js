import axios from 'axios'

// ** Toast Components
import { SuccessProgressToast, ErrorToast } from '../../list/Sidebar'
import { UpdateProgressToast } from '../../edit/Edit'
import { toast, Slide } from 'react-toastify'
import { ErrorToast as AlertComponent } from '../../list/Table'

// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// ** ActionTypes Constants
import {
  ADD_SEMESTER,
  ARCHIVE,
  DELETE_SEMESTER,
  GET_ALL_DATA,
  GET_DATA,
  GET_SEMESTER,
  RESTORE_SEMESTER,
  UPDATE_SEMESTER
} from './actionTypes'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/semesters').then(response => {
      dispatch({
        type: GET_ALL_DATA,
        data: response.data.data
      })
      // console.log(response.data)
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/semesters`, params)
      .then(response => {
        dispatch({
          type: GET_DATA,
          data: response.data.data,
          totalPages: response.data.total,
          params
        })
      })
  }
}

// ** Get SEMESTER
export const getSemester = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/semesters/${id}`)
      .then(response => {
        dispatch({
          type: GET_SEMESTER,
          selectedSemester: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new SEMESTER
export const addSemester = semester => {
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/semesters', semester)
      .then(response => {
        dispatch({
          type: ADD_SEMESTER,
          semester
        })
      })
      .then(() => {
        toast.success(<SuccessProgressToast name={semester.name} />)
        dispatch(getData(getState().semesters.params))
        dispatch(getAllData())
      })
      .catch(() => {
        toast.success(<ErrorToast />)
      })
  }
}
// ** Update SEMESTER
export const updateSemester = (semester, id) => {
  return (dispatch, getState) => {
    axios
      .put(`http://127.0.0.1:8000/api/semesters/${id}`, semester)
      .then(response => {
        dispatch({
          type: UPDATE_SEMESTER,
          semester
        })
      })
      .then(() => {
        toast.success(<UpdateProgressToast />)
        dispatch(getData(getState().semesters.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}
// ** Delete SEMESTER
export const deleteSemester = id => {
  return (dispatch, getState) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false
    })
      .then(function (result) {
        if (result.value) {
          axios
            .delete(`http://127.0.0.1:8000/api/semesters/semester/${id}`)
            .then(() => {
              dispatch({
                type: DELETE_SEMESTER
              })
              MySwal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Your record has been deleted.',
                customClass: {
                  confirmButton: 'btn btn-success'
                }
              })
            })
            .catch(() => {
              MySwal.fire('Failed!', 'There was something wrong.', 'warning')
            })
        }
      })
      .then(() => {
        dispatch(getData(getState().semesters.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}
// ** Move to Recycle bin SEMESTER
export const archiveSemseter = id => {
  return (dispatch, getState) => {
    axios
      .delete(`http://127.0.0.1:8000/api/semesters/${id}`)
      .then(() => {
        dispatch({
          type: ARCHIVE
        })
      })
      .then(() => {
        dispatch(getData(getState().semesters.params))
        dispatch(getAllData())
        toast.success(<AlertComponent id={id} />, {
          transition: Slide,
          autoClose: 10000
        })
      })
      .catch(err => console.log(err))
  }
}
// ** Restore SEMESTER
export const restoreSemester = id => {
  return (dispatch, getState) => {
    axios
      .get(`http://127.0.0.1:8000/api/semesters/${id}/restore`)
      .then(() => {
        dispatch({
          type: RESTORE_SEMESTER
        })
      })
      .then(() => {
        dispatch(getData(getState().semesters.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}
