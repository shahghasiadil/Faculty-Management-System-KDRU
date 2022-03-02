import axios from 'axios'

// ** Toast Components
import { SuccessProgressToast, ErrorToast } from '../../list/Sidebar'
import { UpdateProgressToast } from '../../list/edit'
import { toast, Slide } from 'react-toastify'
import { ErrorToast as AlertComponent } from '../../list/Table'

// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// ** ActionTypes Constants
import { GET_STUDENTS, RESEST_ATTENDANCE, ADD_ATTENDANCE, ARCHIVE, DELETE_ATTENDANCE, GET_ALL_DATA, GET_DATA, GET_ATTENDANCE, RESTORE_ATTENDANCE, UPDATE_ATTENDANCE } from './actionTypes'

export const resetAttendances = () => {
    return (dispatch) => {
        dispatch({
            type: RESEST_ATTENDANCE
        })
    }
}

// ** Get all Data
export const getAllData = () => {
    return async dispatch => {
        await axios.get('http://127.0.0.1:8000/api/attendances').then(response => {
            dispatch({
                type: GET_ALL_DATA,
                data: response.data.data
            })
        }).catch(err => console.log(err))
    }
}

export const getStudents = (periodId, subjectId) => {
    return async dispatch => {
        await axios
            .post(`http://127.0.0.1:8000/api/attendances/find-by-subject-period?period=${periodId}&subject_id=${subjectId}`)
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

// ** Get data on page or row change
export const getData = () => {
    return async dispatch => {
        await axios.get(`http://127.0.0.1:8000/attendances`).then(response => {
            dispatch({
                type: GET_DATA,
                data: response.data.data
            })
        }).catch(err => console.log(err))
    }
}


// ** Get Project
export const getAttendance = id => {
    return async dispatch => {
        await axios
            .get(`http://127.0.0.1:8000/api/attendances/${id}`)
            .then(response => {
                dispatch({
                    type: GET_ATTENDANCE,
                    selectedAttendance: response.data.data
                })
            })
            .catch(err => console.log(err))
    }
}

// ** Add new Project
export const addAttendance = attendance => {

    return (dispatch, getState) => {
        axios
            .post('http://127.0.0.1:8000/api/attendances', attendance)
            .then(response => {
                dispatch({
                    type: ADD_ATTENDANCE,
                    attendance
                })
            })
            .then(() => {
                toast.success(<SuccessProgressToast name={'student attendance saved'} />)
                dispatch(getData(getState().attendance))
                dispatch(getAllData())

            })
            .catch(() => {
                toast.error(<ErrorToast />)
            })
    }
}
// ** Update Project
export const updateAttendance = (attendances, id) => {
    return (dispatch, getState) => {
        axios
            .put(`http://127.0.0.1:8000/api/attendances/${id}`, attendances)
            .then(response => {
                dispatch({
                    type: UPDATE_ATTENDANCE,
                    attendances
                })

            })
            .then(() => {
                toast.success(<UpdateProgressToast />)
                dispatch(getData(getState().subject))
                dispatch(getAllData())

            })
            .catch(err => console.log(err))
    }
}
// ** Delete Project
export const deleteAttendance = id => {
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
                axios.delete(`http://127.0.0.1:8000/api/attendances/attendance/${id}`)
                    .then(() => {
                        dispatch({
                            type: DELETE_ATTENDANCE
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
                dispatch(getData(getState().project))
                dispatch(getAllData())
            }).catch(err => console.log(err))
    }
}
// ** Move to Recycle bin Project
export const archiveAttendance = id => {
    return (dispatch, getState) => {
        axios.delete(`http://127.0.0.1:8000/api/attendances/${id}`).then(() => {
            dispatch({
                type: ARCHIVE
            })
        }).then(() => {
            dispatch(getData(getState().attendance))
            dispatch(getAllData())
            toast.success(<AlertComponent id={id} />,
                { transition: Slide, autoClose: 10000 }
            )

        }).catch(err => console.log(err))
    }
}
// ** Restore Project
export const restoreAttendance = id => {
    return (dispatch, getState) => {
        axios.get(`http://127.0.0.1:8000/api/attendances/${id}/restore`).then(() => {
            dispatch({
                type: RESTORE_ATTENDANCE
            })
        }).then(() => {
            dispatch(getData(getState().attendance))
            dispatch(getAllData())
        }).catch(err => console.log(err))
    }
}
