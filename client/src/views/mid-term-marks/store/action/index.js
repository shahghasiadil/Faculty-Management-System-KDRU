
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
import { ADD_MID_TERM_MARKS, ARCHIVE, DELETE_MID_TERM_MARKS, GET_ALL_DATA, GET_DATA, GET_MID_TERM_MARKS, RESTORE_MID_TERM_MARKS, UPDATE_MID_TERM_MARKS } from './actionTypes'
// ** Get all Data
export const getAllData = () => {
    return async dispatch => {
        await axios.get('http://127.0.0.1:8000/api/mid-term-marks').then(response => {
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
        await axios.get(`http://127.0.0.1:8000/api/mid-term-marks`, params).then(response => {
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
export const getMidTermMark = id => {
    return async dispatch => {
        await axios
            .get(`http://127.0.0.1:8000/api/mid-term-marks/${id}`)
            .then(response => {
                dispatch({
                    type: GET_MID_TERM_MARKS,
                    selectedMidTermMark: response.data
                })
            })
            .catch(err => console.log(err))
    }
}

// ** Add new mid Mark
export const addMidTermMark = midTermMark => {
    alert(midTermMark)
    return (dispatch, getState) => {
        axios
            .post('http://127.0.0.1:8000/api/mid-term-marks', midTermMark)
            .then(response => {
                dispatch({
                    type: ADD_MID_TERM_MARKS,
                    midTermMark
                })
            })
            .then(() => {
                toast.success(<SuccessProgressToast mark={midTermMark.marks} />)
                dispatch(getData(getState().midTermMarks.params))
                dispatch(getAllData())

            })
            .catch(() => {
                toast.success(<ErrorToast />)
            })
    }
    //console.log(finalMark)
}
// ** Update Student
export const updateMidTermMark = (midTermMark, id) => {
    return (dispatch, getState) => {
        axios
            .put(`http://127.0.0.1:8000/api/mid-term-marks/${id}`, midTermMark)
            .then(response => {
                dispatch({
                    type: UPDATE_MID_TERM_MARKS,
                    midTermMark
                })

            })
            .then(() => {
                toast.success(<UpdateProgressToast />)
                dispatch(getData(getState().midTermMarks.params))
                dispatch(getAllData())

            })
            .catch(err => console.log(err))
    }
}
// ** Delete Student
export const deleteMidTermMark = id => {
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
                axios.delete(`http://127.0.0.1:8000/api/mid-term-marks/mid-term-mark/${id}`)
                    .then(() => {
                        dispatch({
                            type: DELETE_MID_TERM_MARKS
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
                dispatch(getData(getState().midTermMarks.params))
                dispatch(getAllData())
            }).catch(err => console.log(err))
    }
}
// ** Move to Recycle bin student
export const archiveMidTermMark = id => {
    return (dispatch, getState) => {
        axios.delete(`http://127.0.0.1:8000/api/mid-term-marks/${id}`).then(() => {
            dispatch({
                type: ARCHIVE
            })
        }).then(() => {
            dispatch(getData(getState().midTermMarks.params))
            dispatch(getAllData())
            toast.success(<AlertComponent id={id} />,
                { transition: Slide, autoClose: 10000 }
            )

        }).catch(err => console.log(err))
    }
}
// ** Restore Student
export const restoreMidTermMark = id => {
    return (dispatch, getState) => {
        axios.get(`http://127.0.0.1:8000/api/mid-term-marks/${id}/restore`).then(() => {
            dispatch({
                type: RESTORE_MID_TERM_MARKS
            })
        }).then(() => {
            dispatch(getData(getState().midTermMarks.params))
            dispatch(getAllData())
        }).catch(err => console.log(err))
    }
}
