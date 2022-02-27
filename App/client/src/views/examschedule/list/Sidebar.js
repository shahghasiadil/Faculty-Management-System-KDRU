// ** React Import
import { useState, Fragment, useLayoutEffect, useEffect} from 'react'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Avatar from '@components/avatar'
import { Check, X} from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

import Flatpickr from 'react-flatpickr'
// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import {Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'
import moment from 'moment'
// ** Store & Actions
import { addExamSchedule } from '../store/action'
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
      <span role='img' aria-label='toast-text'> Exam Schedule Added Successfully

      </span>
    </div>
  </Fragment>
)

const SidebarNewExamSchedule = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  const [value, setVaules] = useState(0)
  const [picker, setPicker] = useState(new Date())
  const [subjects, setSubject] = useState([])
  const [teachers, setTeacher] = useState([])
  const [teacher, setTeachers] = useState(0)
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
  

  // ** Function to handle form submit
  const onSubmit = (values) => {

      toggleSidebar()
      dispatch(
        addExamSchedule({
          date:picker,
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
        <Label for='default-picker'>Date</Label>
        <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
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

export default SidebarNewExamSchedule
