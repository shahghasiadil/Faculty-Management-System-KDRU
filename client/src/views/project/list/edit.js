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
import { updateSubject } from '../store/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export const UpdateProgressToast = () => (
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
                Record Successfully Updated
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
const SidebarUpdateProject = ({ open, selectedProject, openEditSidebar }) => {

    const [teachers, setTeachers] = useState([])
    const [students, setStudents] = useState([])
    const [selectedTeacher, setSelectedTeacher] = useState({})
    const [selectedStudents, setSelectedStudents] = useState([])
    const [visible, setVisible] = useState('')

    // ** for edit
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [teacher, setTeacher] = useState({ value: '', label: 'select' })
    const [studentsEdit, setStudentsEdit] = useState([])
    // ** Store Vars

    const dispatch = useDispatch()
    // ** Validations Yup

    const ProjectSchema = yup.object().shape({
        name: yup.string().required().min(3).label('Project'),
        code: yup.string().required().label("Code")
    })

    // ** React hook form
    const { register, errors, handleSubmit, watch, trigger } = useForm({ mode: 'onChange', resolver: yupResolver(ProjectSchema) })

    const loadTeachers = () => {


        axios.get('http://127.0.0.1:8000/api/teachers').then((res) => {
            setTeachers('')
            for (const data of res.data.data) {
                teachers.push({ value: data.id, label: data.name })
            }
            setTeachers(teachers)
        })
    }

    const loadStudents = () => {
        axios.get('http://127.0.0.1:8000/api/students').then((res) => {

            for (const data of res.data.data) {
                students.push({
                    value: data.id,
                    label: `${data.name} -  ${data.father_name}`
                })
            }
        })
    }
    useEffect(() => {
        loadTeachers()
        loadStudents()
    }, [])

    useEffect(() => {
        if (selectedProject !== null) {
            setName(selectedProject.name)
            setCode(selectedProject.code)
            teachers.map((data, index) => {
                if (data.value === selectedProject.teacher.id) {
                    setTeacher(index)
                }
            })

            selectedProject.students.map((data) => {

                students.map((std) => {

                    if (data.pivot.student_id === std.value) {
                        studentsEdit.push(std)
                    }
                })
            })
        }
    }, [selectedProject])
    // ** Function to handle form submit
    const studentsId = []
    const onSubmit = (values) => {

        selectedStudents.some((data) => {
            studentsId.push(data.value)
        })
        trigger()
        if (isObjEmpty(errors)) {
            openEditSidebar()
            dispatch(
                updateSubject({
                    name: values.name,
                    code: values.code,
                    teacher_id: selectedTeacher,
                    students: studentsId
                }, selectedProject.id)
            )
        }
    }

    return (
        <Sidebar
            size='lg'
            open={open}
            title='Update Project'
            headerClassName='mb-1'
            contentClassName='pt-0'
            openEditSidebar={openEditSidebar}
        >
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="new-password">
                <FormGroup>
                    <Label for='name'>
                        Project <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='name'
                        id='name'
                        autoComplete="off"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Smart House'
                        innerRef={register({ required: true })}
                        invalid={errors.project && true}
                        className={watch('project') ? classnames({ 'is-valid': !errors.project }) : ''}
                    />
                    {errors && errors.project && <FormFeedback>{errors.project.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='code'>
                        Code <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='code'
                        id='code'
                        defaultValue={code}
                        onChange={(e) => setCode(e.target.value)}
                        autoComplete="off"
                        placeholder='Code'
                        innerRef={register({ required: true })}
                        invalid={errors.code && true}
                        className={watch('code') ? classnames({ 'is-valid': !errors.code }) : ''}
                    />
                    {errors && errors.code && <FormFeedback>{errors.code.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='teacher'>
                        Teacher <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        defaultValue={teachers[teacher]}
                        name='loading'
                        options={teachers}
                        isLoading={true}
                        onChange={(e) => { setSelectedTeacher(e.value) }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='students'>
                        Students <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        isClearable={false}
                        theme={selectThemeColors}
                        defaultValue={studentsEdit}
                        isMulti
                        name='colors'
                        options={students}
                        className='react-select'
                        classNamePrefix='select'
                        onChange={(e) => { setSelectedStudents(e) }}
                    />
                </FormGroup>
                <Button type='submit' className='mr-1' color='primary' disabled={visible}>
                    Update
                </Button>
                <Button type='reset' color='secondary' outline onClick={openEditSidebar}>
                    Cancel
                </Button>
            </Form>
        </Sidebar>
    )
}
export default SidebarUpdateProject
