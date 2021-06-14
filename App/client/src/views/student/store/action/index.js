import axios from 'axios'

// ** Toast Components
import { SuccessProgressToast, ErrorToast } from '../../list/Sidebar'
import {UpdateProgressToast} from '../../edit/Edit'
import { toast, Slide } from 'react-toastify'
import { ErrorToast as AlertComponent } from '../../list/Table'
// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
// ** ActionTypes Constants
import { ADD_STUDENT, ARCHIVE, DELETE_STUDENT, GET_ALL_DATA, GET_DATA, GET_STUDENT, RESTORE_STUDENT, UPDATE_STUDENT } from './actionTypes'
import { paginateArray } from '../../../../@fake-db/utils'


// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/students').then(response => {
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
    await axios.get(`http://127.0.0.1:8000/api/students`, params).then(response => {
    dispatch({
      type: GET_DATA,
      data: dat,
      totalPages: response.data.total,
      params
    })
    })
  }
} 
// ** Get Student
export const getStudent = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/students/${id}`)
      .then(response => {
        dispatch({
          type: GET_STUDENT,
          selectedStudent: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new student
export const addStudent = student => {
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/students', student)
      .then(response => {
        dispatch({
          type: ADD_STUDENT,
          student
        })
        if (response.data) {
          throw new Error("Duplicate Email or National ID")
        }
      })
      .then(() => {
        toast.success(<SuccessProgressToast name={student.name} lastName = {student.last_name}/>)        
        dispatch(getData(getState().students.params))
        dispatch(getAllData())
        
      })
      .catch(() => {
        toast.success(<ErrorToast/>)        
      })
    }
  }
  // ** Update Student
  export const updateStudent = (student, id) => {
    return (dispatch, getState) => {
      axios
        .put(`http://127.0.0.1:8000/api/students/${id}`, student)
        .then(response => {
          dispatch({
            type: UPDATE_STUDENT,
            student
          })
          
        })
        .then(() => {
          toast.success(<UpdateProgressToast/>)        
          dispatch(getData(getState().students.params))
          dispatch(getAllData())
          
        })
        .catch(err => console.log(err))
      }
    }
  // ** Delete Student
  export const deleteStudent = id => {
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
        }).then(function (result) {
          if (result.value) {
            axios.delete(`http://127.0.0.1:8000/api/students/student/${id}`)
            .then(() => {
                dispatch({
                type: DELETE_STUDENT
                })
                MySwal.fire({
                  icon: 'success',
                  title: 'Deleted!',
                  text: 'Your record has been deleted.',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  }
                })
              }).catch(() => {
                MySwal.fire('Failed!',
                'There was something wrong.',
                'warning')
              })
          }
        })      
      .then(() => {
        dispatch(getData(getState().students.params))
        dispatch(getAllData())
      }).catch(err => console.log(err))
  }
}
// ** Move to Recycle bin student
export const archiveStudent = id => {
  return (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/students/${id}`).then(() => {
      dispatch({
        type:ARCHIVE
      })
    }).then(() => {
      dispatch(getData(getState().students.params))
      dispatch(getAllData())
      toast.success(<AlertComponent id = {id}/>,
        { transition: Slide, autoClose: 10000 }
        )
     
    }).catch(err => console.log(err))
  }
}
// ** Restore Student
export const restoreStudent = id => {
  return (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/students/${id}/restore`).then(() => {
      dispatch({
        type:RESTORE_STUDENT
      })
    }).then(() => {
      dispatch(getData(getState().students.params))
      dispatch(getAllData())
    }).catch(err => console.log(err))
  }
}
