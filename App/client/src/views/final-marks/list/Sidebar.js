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
import { addFinalMark } from '../store/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'

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
         { `${mark} Final Mark Added Successfully`}
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
const SidebarNewMarks = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState('')
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  // ** Store Vars
  const dispatch = useDispatch()
  // ** Validations Yup
  const FinalMarkSchema = yup.object().shape({
    mark:  yup.number().required("Mark is required field")
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(FinalMarkSchema) })

  const loadStudents = () => {
      axios.get('http://127.0.0.1:8000/api/get_final_student').then((response) => {
        for (const data of response.data) {
           students.push({ value:data.id, label:data.name})
          // setStudents([{ value:data.id, label:data.name }])
        }
      })

  }
  const loadSubjects = () => {
    axios.get('http://127.0.0.1:8000/api/get_student_subject').then((response) => {
      for (const data of response.data) {
         subjects.push({ value:data.id, label:data.name})
        // setStudents([{ value:data.id, label:data.name }])
      }
    })
  
  }
  useEffect(() => {
      loadStudents() 
      loadSubjects()
      // console.log("ss", selectedStudent)
  }, [])

  // ** Function to handle form submit
  const onSubmit = (values) => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addFinalMark({
          student_id: selectedStudent,
          subject_id: selectedSubject,
          marks:values.mark
        })   
      )
    }
  }

  return (
    <Sidebar
    size='lg'
    open={open}
    title='New Mark'
    headerClassName='mb-1'
    contentClassName='pt-0'
    toggleSidebar={toggleSidebar}
  >
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete = "new-password">
      <FormGroup>
        <Label for='student_id'>
          Student <span className='text-danger'>*</span>
        </Label>
        <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={students[0]}
              name='loading'
              options={students}
              // isLoading={true}
              onChange = {(e) => { setSelectedStudent(e.value) } }
              // isClearable={false}
            />
      </FormGroup>
      <FormGroup>
        <Label for='subject_id'>
          Subject <span className='text-danger'>*</span>
        </Label>
        <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={subjects[0]}
              name='loading'
              options={subjects}
              // isLoading={true}
              onChange = {(e) => { setSelectedSubject(e.value) } }
              // isClearable={false}
            />
      </FormGroup>
      <FormGroup>
        <Label for='mark'>
          Mark <span className='text-danger'>*</span>
        </Label>
        <Input
          name='mark'
          id='mark'
          // value = {inputTerm}
          type='number'
          autoComplete = "off"
          placeholder='60'
          // eslint-disable-next-line no-mixed-operators
          innerRef={register({ required: true })}
          className={watch('mark') ? classnames({ 'is-valid': !errors.mark }) : ''}
        />
         {errors && errors.mark  && <FormFeedback>{errors.mark.message}</FormFeedback>}
      </FormGroup>
      <Button type='submit' className='mr-1' color='primary' disabled = {visible}>
        Submit
      </Button>
      <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
        Cancel
      </Button>
    </Form>
  </Sidebar>
 
  )
}

export default SidebarNewMarks
