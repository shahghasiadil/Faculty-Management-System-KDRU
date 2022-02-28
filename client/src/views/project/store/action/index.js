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
import { ADD_PROJECT, ARCHIVE, DELETE_PROJECT, GET_ALL_DATA, GET_DATA, GET_PROJECT, RESTORE_PROJECT, UPDATE_PROJECT } from './actionTypes'

// ** Get all Data
export const getAllData = () => {
    return async dispatch => {
        await axios.get('http://127.0.0.1:8000/api/final-projects').then(response => {
            dispatch({
                type: GET_ALL_DATA,
                data: response.data.data
            })
        }).catch(err => console.log(err))
    }
}


// ** Get data on page or row change
export const getData = () => {
    return async dispatch => {
        await axios.get(`http://127.0.0.1:8000/api/final-projects`).then(response => {
            dispatch({
                type: GET_DATA,
                data: response.data.data
            })
        }).catch(err => console.log(err))
    }
}

// ** Get Project
export const getProject = id => {
    return async dispatch => {
        await axios
            .get(`http://127.0.0.1:8000/api/projects/${id}`)
            .then(response => {
                dispatch({
                    type: GET_PROJECT,
                    selectedProject: response.data
                })
            })
            .catch(err => console.log(err))
    }
}

// ** Add new Project
export const addProject = project => {
    return (dispatch, getState) => {
        axios
            .post('http://127.0.0.1:8000/api/final-projects', project)
            .then(response => {
                dispatch({
                    type: ADD_PROJECT,
                    project
                })
            })
            .then(() => {
                toast.success(<SuccessProgressToast name={project.name} />)
                dispatch(getData(getState().project))
                dispatch(getAllData())

            })
            .catch(() => {
                toast.error(<ErrorToast />)
            })
    }
}
// ** Update Project
export const updateSubject = (project, id) => {
    return (dispatch, getState) => {
        axios
            .put(`http://127.0.0.1:8000/api/projects/${id}`, project)
            .then(response => {
                dispatch({
                    type: UPDATE_PROJECT,
                    project
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
export const deleteProject = id => {
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
                axios.delete(`http://127.0.0.1:8000/api/projects/project/${id}`)
                    .then(() => {
                        dispatch({
                            type: DELETE_PROJECT
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
export const archiveProject = id => {
    return (dispatch, getState) => {
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`).then(() => {
            dispatch({
                type: ARCHIVE
            })
        }).then(() => {
            dispatch(getData(getState().project))
            dispatch(getAllData())
            toast.success(<AlertComponent id={id} />,
                { transition: Slide, autoClose: 10000 }
            )

        }).catch(err => console.log(err))
    }
}
// ** Restore Project
export const restoreProject = id => {
    return (dispatch, getState) => {
        axios.get(`http://127.0.0.1:8000/api/projects/${id}/restore`).then(() => {
            dispatch({
                type: RESTORE_PROJECT
            })
        }).then(() => {
            dispatch(getData(getState().project))
            dispatch(getAllData())
        }).catch(err => console.log(err))
    }
}
