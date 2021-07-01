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
import {ADD_TEACHER, ARCHIVE_TEACHER, DELETE_TEACHER, GET_ALL_DATA, GET_DATA, GET_TEACHER, RESTORE_TEACHER, UPDATE_TEACHER} from './actionTypes'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/teachers').then(response => {
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
    await axios.get(`http://127.0.0.1:8000/api/teachers`, params).then(response => {
    dispatch({
      type: GET_DATA,
      data: response.data.data,
      totalPages: response.data.total,
      params
    })
    })
  }
} 
// ** Get Teacher
export const getTeacher = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/teachers/${id}`)
      .then(response => {
        dispatch({
          type: GET_TEACHER,
          selectedTeacher: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new Teacher
export const addTeacher = teacher => {
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/teachers', teacher)
      .then(response => {
        dispatch({
          type: ADD_TEACHER,
          teacher
        })
        if (response.data) {
          throw new Error("Duplicate Email or National ID")
        }
      })
      .then(() => {
        toast.success(<SuccessProgressToast name={teacher.name} lastName = {teacher.last_name}/>)        
        dispatch(getData(getState().teachers.params))
        dispatch(getAllData())
        
      })
      .catch(() => {
        toast.success(<ErrorToast/>)        
      })
    }
  }

  // ** Update Teacher
  export const updateTeacher = (teacher, id) => {
    return (dispatch, getState) => {
      axios
        .put(`http://127.0.0.1:8000/api/teachers/${id}`, teacher)
        .then(() => {
          dispatch({
            type: UPDATE_TEACHER,
            teacher
          })
          
        })
        .then(() => {
          toast.success(<UpdateProgressToast/>)        
          dispatch(getData(getState().teachers.params))
          dispatch(getAllData())
          
        })
        .catch(err => console.log(err))
      }
    }
  // ** Delete Teacher
  export const deleteTeacher = id => {
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
            axios.delete(`http://127.0.0.1:8000/api/teachers/teacher/${id}`)
            .then(() => {
                dispatch({
                type: DELETE_TEACHER
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
        dispatch(getData(getState().teachers.params))
        dispatch(getAllData())
      }).catch(err => console.log(err))
  }
}
// ** Move to Recycle bin Teacher
export const archiveTeacher = id => {
  return (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/teachers/${id}`).then(() => {
      dispatch({
        type:ARCHIVE_TEACHER
      })
    }).then(() => {
      dispatch(getData(getState().teachers.params))
      dispatch(getAllData())
      toast.success(<AlertComponent id = {id}/>,
        { transition: Slide, autoClose: 20000 }
        )
    }).catch(err => console.log(err))
  }
}
// ** Restore Teacher
export const restoreTeacher = id => {
  return (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/teachers/${id}/restore`).then(() => {
      dispatch({
        type:RESTORE_TEACHER
      })
    }).then(() => {
      dispatch(getData(getState().teachers.params))
      dispatch(getAllData())
    }).catch(err => console.log(err))
  }
}
