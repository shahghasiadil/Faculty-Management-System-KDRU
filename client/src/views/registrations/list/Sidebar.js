// ** React Import
import { useState, Fragment, useEffect} from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

import Avatar from '@components/avatar'
import { Check, X} from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import {Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'

// ** Store & Actions

import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addRegistration } from '../store/action'

export const SuccessProgressToast = ({student, subject, mark}) => (
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
         { `${mark}  Added Successfully`}
      </span>
    </div>
  </Fragment>
)
export const  ErrorToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='danger' icon={<X size={12} />} />
        <h6 className='toast-title'>Error!</h6>
      </div>
      <small className='text-muted'>3 Sec Ago</small>
    </div>
  </Fragment>
)
const SidebarNewRegistration = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  const [students, setStudents] = useState([])
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')

  const [selectedStudent, setSelectedStudent] = useState('')
  // ** Store Vars
  const dispatch = useDispatch()
  // ** Validations Yup
  const MidTermMarkSchema = yup.object().shape({
   
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(MidTermMarkSchema) })

  const loadStudents = () => {
    students.length = 0
    axios.get('http://127.0.0.1:8000/api/get_student').then((response) => {
      for (const data of response.data) {
         students.push({ value:data.id, label:data.name})
      }
    })
}


const loadSubjects = () => {
  subjects.length = 0
  axios.get('http://127.0.0.1:8000/api/get_subject').then((response) => {
    for (const data of response.data) {
       subjects.push({ value:data.id, label:data.name})
    }
  })
}
useEffect(() => {
    loadStudents() 
    loadSubjects()
}, [])
  const onSubmit = (values) => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addRegistration({
          student_id: selectedStudent,
          subject_id: selectedSubject
        })   
      )
    }
  }

  return (
    <Sidebar
    size='lg'
    open={open}
    title='New Registrations'
    headerClassName='mb-1'
    contentClassName='pt-0'
    toggleSidebar={toggleSidebar}
  >
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for='student_id'>
          Student <span className='text-danger'>*</span>
        </Label>
        <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={''}
              name='student_name'
              options={students}
              // isLoading={true}
              onChange = {(e) => { setSelectedStudent(e.value) } }
              // isClearable={false}
            />
            {/* {errors && errors.student_name && <FormFeedback>{errors.student_name.message}</FormFeedback>} */}
      </FormGroup>
      <FormGroup>
        <Label for='subject_id'>
          Subject <span className='text-danger'>*</span>
        </Label>
        <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={''}
              name='subject_id'
              options={subjects}
              // isLoading={true}
              onChange = {(e) => { setSelectedSubject(e.value) } }
              // isClearable={false}
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

export default SidebarNewRegistration
