// ** React Imports

import { useState, useEffect, Fragment, useLayoutEffect } from 'react'
import { isObjEmpty, selectThemeColors } from '@utils'

import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Check } from "react-feather"
import { updateSchedule } from '../store/action'
// ** Third Party Components
import axios from 'axios'
import Select from 'react-select'

import { Media, Row, FormText, Col, Button, Form, FormFeedback, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'

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
const SchedualEditView = ({ selectedSchedule }) => {
  console.log(selectedSchedule)
  // ** States
  const history = useHistory()
  const [ScheduleData, setScheduleData] = useState(null)
  const [value, setVaules] = useState(selectedSchedule.subject_id)
  const [picker, setPicker] = useState(selectedSchedule.date)
  const [subjects, setSubject] = useState([])
  const [teachers, setTeacher] = useState([])
  const [teacher, setTeachers] = useState(selectedSchedule.teacher_id)
  const dispatch = useDispatch()
  const [weekDay, setWeekDay] = useState('')
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  // ** Function to change user image

  const loadSubjects = () => {
    axios.get('http://127.0.0.1:8000/api/subjects').then((res) => {
      for (const data of res.data.data) {
        subjects.push({ id: data.id, name: data.name })
      }
    })
  }

  const loadTeachers = () => {
    axios.get('http://127.0.0.1:8000/api/teachers').then((res) => {
      for (const data of res.data.data) {
        setTeacher([...teachers, { id: data.id, value: data.name }])
      }
    })
  }

  const StudentSchema = yup.object().shape({

  })

  const dx = teachers.filter(ndx => ndx.id !== ScheduleData.teacher_id)
  const sub = subjects.filter(ndx => ndx.id !== ScheduleData.subject_id)

  const opt = dx.map((item, i) => {
    console.log(item)
    return (<option defaultValue= {item.id} key = {i}>{item.name}</option>)
   })

  const { register, errors, handleSubmit, watch } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedSchedule !== null || (selectedSchedule !== null && ScheduleData !== null && selectedSchedule.id !== ScheduleData.id)) {
      setScheduleData(selectedSchedule)
      loadSubjects()
      loadTeachers()
    }

  }, [selectedSchedule])


  // if (teachers.length > 0) {
  //
  //   setTeacher(Selectedteacher)
  // }

  // const Selectedteacher = subjects.findIndex(ndx => ndx.id === selectedSchedule.subject_id)
  // // console.log(Selectedteacher)
  // setTeacher(Selectedteacher)
  // ** Renders User
 
  const onSubmit = (values) => {
    const sDate = new Date(startTime)
    const eDate = new Date(endTime)
    const sTime = `${sDate.getHours()}:${sDate.getMinutes()}`
    const eTime = `${eDate.getHours()}:${eDate.getMinutes()}`

    dispatch(
      updateSchedule({
        start_time:sTime,
        end_time:eTime,
        week_day:weekDay,
        subject_id:value,
        teacher_id:teacher
      }, selectedSchedule.id)
    )
    history.push('/schedules')
}

  const week_day = [
    { value: 1, label: 'Satarday' },
    { value: 2, label: 'Sunday' },
    { value: 3, label: 'Monday' },
    { value: 4, label: 'Tuseday'},
    { value: 5, label: 'Wednesday'},
    { value: 6, label: 'Thursday'}
  ]
  const week = week_day.map((item, i) => {
    // console.log(item)
    return (<option defaultValue= {item.label} key = {i}>{item.label}</option>)
   })

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          <Media className='mt-50' body>
            <h4> Schedule </h4>
          </Media>
        </Media>
      </Col>
      <Col sm='12'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label>Subject</Label>
                <Input type='select'
                name='select'
                id='select-basic'
                onChange = { (e) => { setTeacher(e.target.value) }}>
                <option selected defaultValue= {selectedSchedule.subject_id} >{selectedSchedule.subject.name}</option>
                {
                    sub.map((item, i) => {
                      // console.log(item)
                      return (<option defaultValue= {item.id} key = {i}>{item.name}</option>)
                     })
                }
            </Input>
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label>Teacher</Label>
                <Input type='select'
                name='select'
                id='select-basic'
                onChange = { (e) => { setVaules(e.target.value) }}>
                <option selected defaultValue= {selectedSchedule.teacher_id} >{selectedSchedule.teacher.name}</option>
                {
                    opt
                }
          </Input>

              </FormGroup>
            </Col>
                
            <Col md='4' sm='12'>
              <FormGroup>
             <Label for = "weekday">Week Day<span className='text-danger'>*</span></Label>
             <Input type='select'
                name='select'
                id='select-basic'
                onChange = { (e) => { setWeekDay(e.target.value) }}>
                <option selected defaultValue= {selectedSchedule.week_day} >{selectedSchedule.week_day}</option>
                {
                    week
                }
          </Input>
          </FormGroup>
            </Col>
            <Col md='4' sm='12'>
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
            </Col>
            <Col md='4' sm='12'>
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
            </Col>
            

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline onClick={() => { history.push('/schedule') }}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default SchedualEditView
