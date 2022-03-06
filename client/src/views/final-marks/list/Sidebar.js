// ** React Import
import { useState, Fragment, useEffect } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

import Avatar from '@components/avatar'
import { Check, X } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'

// ** Store & Actions
import { updateFinalMark, getFinalMark } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

export const SuccessProgressToast = ({ student, subject, mark }) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Check size={12} />} />
                <h6 className='toast-title'>Success</h6>
            </div>
            <small className='text-muted'>3 secondes Ago</small>
        </div>
        <div className='toastify-body'>
            <span role='img' aria-label='toast-text'>
                {`${mark} Final Mark Added Successfully`}
            </span>
        </div>
    </Fragment>
)
export const ErrorToast = () => (
    <Fragment>
           <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='danger' icon={<X size={12} />} />
                <h6 className='toast-title'>Error!</h6>
            </div>
            <small className='text-muted'>3 Sec Ago</small>

        </div>
        <div className='toastify-body'>
            <span role='img' aria-label='toast-text'>
               Invalid Marks
            </span>
        </div>
    </Fragment>
)
const SidebarNewMidTermMarks = ({ open, toggleSidebar, marksId }) => {

    const [selectedSubject, setSelectedSubject] = useState(0)
    const [selectedStudentRollNo, setSelectedStudentRollNo] = useState('')

    const store = useSelector(state => state.finalMarks)

    // ** Store Vars
    const dispatch = useDispatch()
    // ** Validations Yup
    const MidTermMarkSchema = yup.object().shape({
        mark: yup.number().required("Mark is required field")
    })
    // ** React hook form
    const { register, errors, handleSubmit, watch } = useForm({ mode: 'onChange', resolver: yupResolver(MidTermMarkSchema) })

    useEffect(() => {
        dispatch(getFinalMark(marksId))
    }, [marksId, store.length])

    const onSubmit = (values) => {
        if (isObjEmpty(errors)) {
            toggleSidebar()
            updateFinalMark({
                student_id: store.selectedFinalMark.student_id,
                subject_id: store.selectedFinalMark.subject_id,
                marks: values.mark
            }, store.selectedFinalMark.id)
        }
    }

    return (
        <Sidebar
            size='lg'
            open={open}
            title='Update Marks'
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>

                <FormGroup>
                    <Label for='mid_term_mark'>
                        Final MARKS <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='mark'
                        id='mark'
                        type='number'
                        autoComplete="off"
                        defaultValue={store.selectedFinalMark && store.selectedFinalMark.marks}
                        placeholder='20'
                        innerRef={register({ required: true })}
                        className={watch('mark') ? classnames({ 'is-valid': !errors.mark }) : ''}
                    />
                    {errors && errors.mark && <FormFeedback>{errors.mark.message}</FormFeedback>}
                </FormGroup>
                <Button type='submit' className='mr-1' color='primary'>
                    Update
                </Button>
                <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
                    Cancel
                </Button>
            </Form>
        </Sidebar>

    )
}

export default SidebarNewMidTermMarks
