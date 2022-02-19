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
  const [value, setVaules] = useState(0)
  const [picker, setPicker] = useState(selectedExamSchedule.date)
  const [subjects, setSubject] = useState([])
  const [teachers, setTeacher] = useState([])
  const [teacher, setTeachers] = useState(0)
  const dispatch = useDispatch()
  // ** Function to change user image

  const loadSubjects = () => {
    axios.get('http://127.0.0.1:8000/api/subjects').then((res) => {
      for (const data of res.data.data) {
        subjects.push({ value: data.id, label: data.name })
      }
    })
  }

  const loadTeachers = () => {
    axios.get('http://127.0.0.1:8000/api/teachers').then((res) => {
      for (const data of res.data.data) {
        teachers.push({ value: data.id, label: data.name })
      }
    })
  }

  const StudentSchema = yup.object().shape({

  })

  const { register, errors, handleSubmit, watch } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedExamSchedule !== null || (selectedExamSchedule !== null && ScheduleData !== null && selectedExamSchedule.id !== ScheduleData.id)) {
      setScheduleData(selectedExamSchedule)

    }

  }, [selectedExamSchedule])

  useLayoutEffect(() => {
    loadSubjects()
    loadTeachers()
  })
  const Selectedteacher = teachers.findIndex(ndx => ndx.id !== selectedExamSchedule.teacher_id)
  // console.log(teachers[Selectedteacher])
  // ** Renders User
  const onSubmit = values => {

    if (isObjEmpty(errors)) {
      dispatch(
        updateExamSchedule({

        }, selectedExamSchedule.id)
      )

    }
    history.push('/examschedules')
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
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={''}
                  name='clear'
                  options={subjects}

                  onChange={(e) => { setVaules(e.value) }}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label>Teacher</Label>
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={teachers[Selectedteacher]}
                  name='clear'
                  options={teachers}

                  onChange={(e) => { setTeachers(e.value) }}
                />
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
