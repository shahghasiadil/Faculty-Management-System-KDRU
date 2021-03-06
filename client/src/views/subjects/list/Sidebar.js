// ** React Import
import { useState, useEffect, Fragment } from 'react'

import Select from 'react-select'
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
import { Button, FormGroup, Label, Form, Input, FormFeedback } from 'reactstrap'

// ** Store & Actions
import { addSubject } from '../store/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export const SuccessProgressToast = ({ name }) => (
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
                {`${name} Added Successfully`}
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

            </span>
        </div>
    </Fragment>
)
const SidebarNewSubjects = ({ open, toggleSidebar }) => {
    const [semesters, setSemesters] = useState([])
    const [teachers, setTeachers] = useState([])
    const [selectedTeacher, setSelectedTeacher] = useState({})
    const [value, setVaules] = useState({})
    const [inputTerm, setInputTerm] = useState('')
    const [visible, setVisible] = useState('')
    // ** Store Vars

    const dispatch = useDispatch()
    // ** Validations Yup

    const SubjectSchema = yup.object().shape({
        name: yup.string().required().min(3).label('Name'),
        credit: yup.string().required().label("Credit"),
        code: yup.string().required().label("Code")
    })

    // ** React hook form
    const { register, errors, handleSubmit, watch } = useForm({ mode: 'onChange', resolver: yupResolver(SubjectSchema) })

    const loadSemesters = () => {
        axios.get('http://127.0.0.1:8000/api/semesters').then((res) => {

            for (const data of res.data.data) {
                semesters.push({ value: data.id, label: data.name })
            }
        })
    }
    const loadTeachers = () => {

        axios.get('http://127.0.0.1:8000/api/teachers').then((res) => {
            setTeachers('')
            for (const data of res.data.data) {
                teachers.push({ value: data.id, label: data.name })
            }
            setTeachers(teachers)
        })
    }
    useEffect(() => {
        loadSemesters()
        loadTeachers()
    }, [])
    // ** Function to handle form submit
    const onSubmit = (values) => {

        if (isObjEmpty(errors)) {
            toggleSidebar()
            dispatch(
                addSubject({
                    name: values.name,
                    credit: values.credit,
                    semester_id: value,
                    teacher_id: selectedTeacher,
                    code: values.code
                })
            )
        }
    }

    return (
        <Sidebar
            size='lg'
            open={open}
            title='New Subject'
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="new-password">
                <FormGroup>
                    <Label for='first-name'>
                        Name <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='name'
                        id='name'
                        autoComplete="off"
                        placeholder='John'
                        innerRef={register({ required: true })}
                        invalid={errors.name && true}
                        className={watch('name') ? classnames({ 'is-valid': !errors.name }) : ''}
                    />
                    {errors && errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='first-name'>
                        Code <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='code'
                        id='code'
                        autoComplete="off"
                        placeholder='Code'
                        innerRef={register({ required: true })}
                        invalid={errors.code && true}
                        className={watch('code') ? classnames({ 'is-valid': !errors.code }) : ''}
                    />
                    {errors && errors.code && <FormFeedback>{errors.code.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='lastName'>
                        Credit <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='credit'
                        id='credit'
                        type='number'
                        placeholder='...'
                        autoComplete="off"
                        invalid={errors.credit && true}
                        innerRef={register({ required: true })}
                        className={watch('credit') ? classnames({ 'is-valid': !errors.credit }) : ''}
                    />
                    {errors && errors.credit && <FormFeedback>{errors.credit.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='student_id'>
                        Semester <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        //defaultValue={semesters[0]}
                        name='loading'
                        // value = {selectedSemester}
                        options={semesters}
                        isLoading={true}
                        onChange={(e) => { setVaules(e.value) }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='teacher'>
                        Teacher <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        // defaultValue={teachers[teacher]}
                        name='loading'
                        options={teachers}
                        isLoading={true}
                        onChange={(e) => { setSelectedTeacher(e.value) }}
                    />
                </FormGroup>
                <Button type='submit' className='mr-1' color='primary' disabled={visible}>
                    Submit
                </Button>
                <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
                    Cancel
                </Button>
            </Form>
        </Sidebar>
    )
}
export default SidebarNewSubjects
