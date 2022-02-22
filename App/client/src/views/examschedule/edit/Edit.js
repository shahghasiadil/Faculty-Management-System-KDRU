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
import { updateExamSchedule } from '../store/action'
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
const ExamSchedualEditView = ({ selectedExamSchedule }) => {
  // console.log(selectedExamSchedule)
  // ** States
  const history = useHistory()
  const [ScheduleData, setScheduleData] = useState(null)
  const [value, setVaules] = useState(selectedExamSchedule.subject_id)
  const [picker, setPicker] = useState(selectedExamSchedule.date)
  const [subjects, setSubject] = useState([])
  const [teachers, setTeacher] = useState([])
  const [teacher, setTeachers] = useState(selectedExamSchedule.teacher_id)
  const dispatch = useDispatch()
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
    if (selectedExamSchedule !== null || (selectedExamSchedule !== null && ScheduleData !== null && selectedExamSchedule.id !== ScheduleData.id)) {
      setScheduleData(selectedExamSchedule)
      loadSubjects()
      loadTeachers()
    }

  }, [selectedExamSchedule])


  // if (teachers.length > 0) {
  //
  //   setTeacher(Selectedteacher)
  // }

  // const Selectedteacher = subjects.findIndex(ndx => ndx.id === selectedExamSchedule.subject_id)
  // // console.log(Selectedteacher)
  // setTeacher(Selectedteacher)
  // ** Renders User
  const onSubmit = values => {

    if (isObjEmpty(errors)) {
      console.log(value)
      dispatch(
        updateExamSchedule({
          date:picker,
          subject_id:value,
          teacher_id:teacher
        }, selectedExamSchedule.id)
      )

    }
    history.push('/exam-schedule')
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          <Media className='mt-50' body>
            <h4> Exam Schedule </h4>
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
                <option selected defaultValue= {selectedExamSchedule.subject_id} >{selectedExamSchedule.subject.name}</option>
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
                <option selected defaultValue= {selectedExamSchedule.teacher_id} >{selectedExamSchedule.teacher.name}</option>
                {
                    opt
                }
          </Input>

              </FormGroup>
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='default-picker'>Date</Label>
                <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
              </FormGroup>
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline onClick={() => { history.push('/exam-schedule') }}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default ExamSchedualEditView
