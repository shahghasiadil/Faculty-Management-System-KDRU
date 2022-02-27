// ** React Import
import { useState, Fragment, useLayoutEffect, useEffect} from 'react'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Avatar from '@components/avatar'
import { Check, X} from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// import Time from 'react-time-formate'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

import Flatpickr from 'react-flatpickr'
// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import {Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'
import moment, { weekdays } from 'moment'
// ** Store & Actions
import { addSchedule } from '../store/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Select from 'react-select'

export const SuccessProgressToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title'>Success</h6>
      </div>
      <small className='text-muted'>3 secondes Ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'> Schedule Added Successfully

      </span>
    </div>
  </Fragment>
)

const SidebarNewSchedule = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  const [value, setVaules] = useState(0)
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [subjects, setSubject] = useState([])
  const [teachers, setTeacher] = useState([])
  const [teacher, setTeachers] = useState(0)
  const [weekDay, setWeekDay] = useState('')
  // ** Store Vars
  const dispatch = useDispatch()
  // ** Validations Yup
  const StudentSchema = yup.object().shape({
    // date:yup.date().required()

  })


  const loadSubjects = () => {
    axios.get('http://127.0.0.1:8000/api/subjects').then((res) => {
      for (const data of res.data.data) {
          subjects.push({value:data.id, label:data.name})
      }
    })
  }

  const loadTeachers = () => {
    axios.get('http://127.0.0.1:8000/api/teachers').then((res) => {
      for (const data of res.data.data) {
          teachers.push({value:data.id, label:data.name})
      }
    })
  }

  // useEffect(() => {
  //   loadSubjects()
  // }, [])

  useEffect(() => {
    loadSubjects()
    loadTeachers()
  }, [])

  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  const week_day = [
    { value: 1, label: 'Satarday' },
    { value: 2, label: 'Sunday' },
    { value: 3, label: 'Monday' },
    { value: 4, label: 'Tuseday'},
    { value: 5, label: 'Wednesday'},
    { value: 6, label: 'Thursday'}
    // { value: 4, label: 'Farah'},
  ]

  // ** Function to handle form submit
  const onSubmit = (values) => {
      const sDate = new Date(startTime)
      const eDate = new Date(endTime)
      const sTime = `${sDate.getHours()}:${sDate.getMinutes()}`
      const eTime = `${eDate.getHours()}:${eDate.getMinutes()}`
      toggleSidebar()
      dispatch(
        addSchedule({
          start_time:sTime,
          end_time:eTime,
          week_day:weekDay,
          subject_id:value,
          teacher_id:teacher
        })
      )
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Student'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)} >
        <FormGroup>
        <Label>Subject</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={''}
              name='clear'
              options={subjects}

              onChange = {(e) => { setVaules(e.value) } }
            />
        </FormGroup>
        <FormGroup>
        <Label>Teacher</Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={''}
              name='clear'
              options={teachers}

              onChange = {(e) => { setTeachers(e.value) } }
            />
        </FormGroup>
        <FormGroup>
        <Label for = "weekday">Week Day<span className='text-danger'>*</span></Label>
            <Select
              theme={selectThemeColors}
              // className={classnames('react-select', { 'is-invalid': !degree})}
              classNamePrefix='select'
              defaultValue={''}
              name = 'weekDay'
              id = 'weekday'
              options={week_day}
              onChange = { (e) => { setWeekDay(e.label) }}
              isLoading
            />
        </FormGroup>
        <FormGroup>
            <Label id='startTime'>Start Time</Label>
            <Flatpickr
              className='form-control'
              value={startTime}
              id='startTime'
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                time_24hr: true
              }}
              onChange={date => setStartTime(date)}
            />
        </FormGroup>
        <FormGroup>
            <Label id='endTime'>Start Time</Label>
            <Flatpickr
              className='form-control'
              value={endTime}
              id='endTime'
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                time_24hr: true
              }}
              onChange={date => setEndTime(date)}
            />
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewSchedule
