
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
import { ADD_FINAL_MARKS, ARCHIVE, DELETE_FINAL_MARKS, GET_ALL_DATA, GET_DATA, GET_FINAL_MARKS, RESTORE_FINAL_MARKS, UPDATE_FINAL_MARKS } from './actionTypes'
// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/final-marks').then(response => {
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
    await axios.get(`http://127.0.0.1:8000/api/final-marks`, params).then(response => {
    dispatch({
      type: GET_DATA,
      data: response.data,
      totalPages: response.data.total,
      params
    })
    })
  }
} 
// ** Get Final Marks
export const getFinalMark = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/final-marks/${id}`)
      .then(response => {
        dispatch({
          type: GET_FINAL_MARKS,
          selectedFinalMark: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new Final Mark
export const addFinalMark = finalMark => {
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/final-marks', finalMark)
      .then(response => {
        dispatch({
          type: ADD_FINAL_MARKS,
          finalMark 
        })
      })
      .then(() => {
        toast.success(<SuccessProgressToast  mark = {finalMark.marks} />)        
        dispatch(getData(getState().finalMarks.params))
        dispatch(getAllData())
        
      })
      .catch(() => {
        toast.success(<ErrorToast/>)        
      })
    }
    //console.log(finalMark)
  }
  // ** Update Student
  export const updateFinalMark = (finalMark, id) => {
    return (dispatch, getState) => {
      axios
        .put(`http://127.0.0.1:8000/api/final-marks/${id}`, finalMark)
        .then(response => {
          dispatch({
            type: UPDATE_FINAL_MARKS,
            finalMark
          })
          
        })
        .then(() => {
          toast.success(<UpdateProgressToast/>)        
          dispatch(getData(getState().finalMarks.params))
          dispatch(getAllData())
          
        })
        .catch(err => console.log(err))
      }
    }
  // ** Delete Student
  export const deleteFinalMark = id => {
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
            axios.delete(`http://127.0.0.1:8000/api/final-marks/final-mark/${id}`)
            .then(() => {
                dispatch({
                type: DELETE_FINAL_MARKS
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
        dispatch(getData(getState().finalMarks.params))
        dispatch(getAllData())
      }).catch(err => console.log(err))
  }
}
// ** Move to Recycle bin student
export const archiveFinalMark = id => {
  return (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/final-marks/${id}`).then(() => {
      dispatch({
        type:ARCHIVE
      })
    }).then(() => {
      dispatch(getData(getState().finalMarks.params))
      dispatch(getAllData())
      toast.success(<AlertComponent id = {id}/>,
        { transition: Slide, autoClose: 10000 }
        )
     
    }).catch(err => console.log(err))
  }
}
// ** Restore Student
export const restoreFinalMark = id => {
  return (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/final-marks/${id}/restore`).then(() => {
      dispatch({
        type:RESTORE_FINAL_MARKS
      })
    }).then(() => {
      dispatch(getData(getState().finalMarks.params))
      dispatch(getAllData())
    }).catch(err => console.log(err))
  }
}
