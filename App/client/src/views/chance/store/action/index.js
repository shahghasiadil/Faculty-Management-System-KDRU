
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
import { ADD_CHANCE, ARCHIVE, DELETE_CHANCE, GET_ALL_DATA, GET_DATA, GET_CHANCE, RESTORE_CHANCE, UPDATE_CHANCE } from './actionTypes'
// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/chances').then(response => {
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
    await axios.get(`http://127.0.0.1:8000/api/chances`, params).then(response => {
    dispatch({
      type: GET_DATA,
      data: response.data,
      totalPages: response.data.total,
      params
    })
    })
  }
} 
// ** Get Chance
export const getChance = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/chances/${id}`)
      .then(response => {
        dispatch({
          type: GET_CHANCE,
          selectedChance: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new Chance
export const addChance = chance => {
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/chances', chance)
      .then(response => {
        dispatch({
          type: ADD_CHANCE,
          chance 
        })
      })
      .then(() => {
        toast.success(<SuccessProgressToast  chanceCount = {chance.chance_count} mark = {chance.marks} />)        
        dispatch(getData(getState().chances.params))
        dispatch(getAllData())
        
      })
      .catch((e) => {
        toast.success(<ErrorToast/>)       
      })
    }
    //console.log(finalMark)
  }
  // ** Update Chance
  export const updateChance = (chance, id) => {
    return (dispatch, getState) => {
      axios
        .put(`http://127.0.0.1:8000/api/chances/${id}`, chance)
        .then(response => {
          dispatch({
            type: UPDATE_CHANCE,
            chance
          })
          
        })
        .then(() => {
          toast.success(<UpdateProgressToast/>)        
          dispatch(getData(getState().chances.params))
          dispatch(getAllData())
        })
        .catch(err => console.log(err))
      }
    }
  // ** Delete Chance
  export const deleteChance = id => {
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
            axios.delete(`http://127.0.0.1:8000/api/chances/chance/${id}`)
            .then(() => {
                dispatch({
                type: DELETE_CHANCE
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
        dispatch(getData(getState().chances.params))
        dispatch(getAllData())
      }).catch(err => console.log(err))
  }
}
// ** Move to Recycle bin Chance
export const archiveChance = id => {
  return (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/chances/${id}`).then(() => {
      dispatch({
        type:ARCHIVE
      })
    }).then(() => {
      dispatch(getData(getState().chances.params))
      dispatch(getAllData())
      toast.success(<AlertComponent id = {id}/>,
        { transition: Slide, autoClose: 10000 }
        )
     
    }).catch(err => console.log(err))
  }
}
// ** Restore Chance
export const restoreChance = id => {
  return (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/chances/${id}/restore`).then(() => {
      dispatch({
        type:RESTORE_CHANCE
      })
    }).then(() => {
      dispatch(getData(getState().chances.params))
      dispatch(getAllData())
    }).catch(err => console.log(err))
  }
}
