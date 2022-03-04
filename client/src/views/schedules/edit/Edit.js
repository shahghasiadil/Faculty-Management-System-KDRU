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
  // console.log(selectedSchedule)
  // ** States
  const history = useHistory()
  const [ScheduleData, setScheduleData] = useState(null)
  const [value, setVaules] = useState(selectedSchedule.subject_id)
  const [picker, setPicker] = useState(selectedSchedule.date)
  const [subjects, setSubject] = useState([])
  const dispatch = useDispatch()
  const [weekDay, setWeekDay] = useState('')
  const [hourCount, setHourCount] = useState()
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  // ** Function to change user image

  const loadSubjects = () => {
    axios.get('http://127.0.0.1:8000/api/subjects').then((res) => {
      for (const data of res.data.data) {
        subjects.push({ id: data.id, name: data.name })
      }
    })
    console.log(subjects)
  }


  const StudentSchema = yup.object().shape({

  })

  const sub = subjects.filter(ndx => ndx.id !== ScheduleData.subject_id)

  const { register, errors, handleSubmit, watch } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedSchedule !== null || (selectedSchedule !== null && ScheduleData !== null && selectedSchedule.id !== ScheduleData.id)) {
      setScheduleData(selectedSchedule)
      loadSubjects()
    }

  }, [selectedSchedule])


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
    return (<option defaultValue= {item.value} key = {i}>{item.label}</option>)
   })

   const handleValue = value => {
       week_day.find((value) => {
         setWeekDay(value.value)
       })
  }


   const hour_count = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4}
  ]

  const onSubmit = (values) => {
    dispatch(
      updateSchedule({
        week_day_id:weekDay,
        subject_id:value,
        hour_count:hourCount
      }, selectedSchedule.data.id)
    )
    history.push('/schedules')
    // console.log(selectedSchedule.data.id)
}

  const hour = hour_count.map((item, i) => {
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
                onChange = { (e) => { setSubject(e.target.value) }}>
                <option selected defaultValue= {selectedSchedule.subject_id} >{selectedSchedule.data.subject.name}</option>
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
             <Label for = "weekday">Week Day<span className='text-danger'>*</span></Label>
             <Input type='select'
                name='select'
                id='select-basic'
                onChange = { (e) => { handleValue(e.target.value) }}>
                <option selected defaultValue= {selectedSchedule.week_day_id} >{selectedSchedule.data.week_day.day}</option>
                {
                    week
                }
          </Input>
          </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
             <Label for = "weekday">Hour Count<span className='text-danger'>*</span></Label>
             <Input type='select'
                name='select'
                id='select-basic'
                onChange = { (e) => { setHourCount(e.target.value) }}>
                <option selected defaultValue= {selectedSchedule.hour_count} >{selectedSchedule.data.hour_count}</option>
                {
                    hour
                }
          </Input>
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
