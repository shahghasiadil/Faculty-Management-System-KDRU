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
import { addAttendance } from '../store/action'
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
const SidebarAttendanceEdit = ({ open, toggleSidebarEdit }) => {

    // ** State Vars
    const [subjects, setSubjects] = useState([])
    const [students, setStudents] = useState([])
    const [visible, setVisible] = useState('')

    // ** for edit
    const [subject, setSubject] = useState({ value: '', label: 'Select Subject' })
    const [student, setStudent] = useState({ value: '', label: 'Select Student' })
    const [month, setMonth] = useState({ value: '', label: 'Select Month' })
    const [year, setYear] = useState({ value: '', label: 'Select Year' })
    const [present, setPresent] = useState('')
    const [absent, setAbsent] = useState('')
    const [leave, setLeave] = useState('')

    const dispatch = useDispatch()

    // ** Validations Yup
    const AttendanceSchema = yup.object().shape({
        present: yup.string().required().label('Present'),
        absent: yup.string().required().label("Absent"),
        leave: yup.string().required().label("Leave")
    })

    // ** React hook form
    const { register, errors, handleSubmit, watch, trigger } = useForm({ mode: 'onChange', resolver: yupResolver(AttendanceSchema) })

    const loadSubjects = () => {

        axios.get('http://127.0.0.1:8000/api/subjects').then((res) => {
            for (const data of res.data.data) {
                subjects.push({ value: data.id, label: data.name })
            }
            setSubjects(subjects)
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

    const yearOptions = [
        { value: '', label: 'Select Period', number: 0 },
        { value: '2020', label: '2020', number: 1 },
        { value: '2021', label: '2021', number: 2 },
        { value: '2022', label: '2022', number: 3 }
    ]


    const monthsOptions = [
        { value: '', label: 'Select Month' },
        { value: 'حمل', label: 'حمل' },
        { value: 'ثور', label: 'ثور' },
        { value: 'جوزا', label: 'جوزا' },
        { value: 'سرطان', label: 'سرطان' },
        { value: 'اسد', label: 'اسد' },
        { value: 'سنبله', label: 'سنبله' },
        { value: 'میزان', label: 'میزان' },
        { value: 'عقرب', label: 'عقرب' },
        { value: 'قوس', label: 'قوس' },
        { value: 'جدی', label: 'جدی' },
        { value: 'دلو', label: 'دلو' },
        { value: 'حوت', label: 'حوت' }
    ]

    useEffect(() => {
        loadSubjects()
        loadStudents()
    }, [])

    // ** Function to handle form submit
    const onSubmit = () => {
        trigger()
        if (isObjEmpty(errors)) {
            toggleSidebarEdit()
            dispatch(
                addAttendance({
                    month,
                    year,
                    present,
                    absent,
                    leave,
                    student_id: student,
                    subject_id: subject
                })
            )
        }
    }

    return (
        <Sidebar
            size='lg'
            open={open}
            title='New Project'
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebarEdit={toggleSidebarEdit}
        >
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="new-password">
                <FormGroup>
                    <Label for='student'>
                        Student <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        name='loading'
                        options={students}
                        isLoading={true}
                        onChange={(e) => { setStudent(e.value) }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='student'>
                        Subject <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        name='loading'
                        options={subjects}
                        isLoading={true}
                        onChange={(e) => { setSubject(e.value) }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='present'>
                        Present <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='present'
                        id='present'
                        autoComplete="off"
                        onChange={(e) => { setPresent(e.value) }}
                        placeholder='49'
                        innerRef={register({ required: true })}
                        invalid={errors.present && true}
                        className={watch('present') ? classnames({ 'is-valid': !errors.present }) : ''}
                    />
                    {errors && errors.present && <FormFeedback>{errors.present.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='absent'>
                        Absent <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='absent'
                        id='absent'
                        autoComplete="off"
                        onChange={(e) => { setAbsent(e.value) }}
                        placeholder='3'
                        innerRef={register({ required: true })}
                        invalid={errors.absent && true}
                        className={watch('absent') ? classnames({ 'is-valid': !errors.absent }) : ''}
                    />
                    {errors && errors.absent && <FormFeedback>{errors.absent.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='leave'>
                        Leave <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='leave'
                        id='leave'
                        autoComplete="off"
                        onChange={(e) => { setLeave(e.value) }}
                        placeholder='5'
                        innerRef={register({ required: true })}
                        invalid={errors.leave && true}
                        className={watch('leave') ? classnames({ 'is-valid': !errors.leave }) : ''}
                    />
                    {errors && errors.leave && <FormFeedback>{errors.leave.message}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for='month'>
                        Month <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        name='loading'
                        options={monthsOptions}
                        isLoading={true}
                        onChange={(e) => { setMonth(e.value) }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='year'>
                        Year <span className='text-danger'>*</span>
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        name='loading'
                        options={yearOptions}
                        isLoading={true}
                        onChange={(e) => { setYear(e.value) }}
                    />
                </FormGroup>
                <Button type='submit' className='mr-1' color='primary' disabled={visible}>
                    Submit
                </Button>
                <Button type='reset' color='secondary' outline onClick={toggleSidebarEdit}>
                    Cancel
                </Button>
            </Form>
        </Sidebar>
    )
}
export default SidebarAttendanceEdit
