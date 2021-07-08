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
import { addMidTermMark } from '../store/action'
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
         { `${mark} Mid Term Mark Added Successfully`}
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
const SidebarNewMidTermMarks = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState('')
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [studentFathers, setStudentFathers] = useState([])
  const [selectedStudentFather, setSelectedStudentFather] = useState('')
  // ** Store Vars
  const dispatch = useDispatch()
  // ** Validations Yup
  const MidTermMarkSchema = yup.object().shape({
    mark:  yup.number().required("Mark is required field")
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(MidTermMarkSchema) })

  const loadStudents = () => {
    axios.get('http://127.0.0.1:8000/api/get_midterm_mark_student').then((response) => {
      for (const data of response.data) {
         students.push({ value:data.id, label:data.name})
        // setStudents([{ value:data.id, label:data.name }])
      }
    })
}
// const loadStudentFatherName = (name) => {
//   setStudentFathers([{}])
//   axios.get(`http://127.0.0.1:8000/api/get_student_father_name/${name}`)
//   .then((response) => {
//     for (const data of response.data) {
//          studentFathers.push({ value:data.id, label:data.father_name})
//         // setStudentFathers([{ value:data.id, label:data.father_name }])
//       }
//     })
//     console.log(studentFathers)
//     studentFathers.splice(0, 1)
// }
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
  const onSubmit = (values) => {

    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addMidTermMark({
          student_id: selectedStudent,
          subject_id: selectedSubject,
          marks: values.mark
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for='student_id'>
          STUDENT <span className='text-danger'>*</span>
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
      {/* <FormGroup>
        <Label for='student_id'>
          FATHER NAME <span className='text-danger'>*</span>
        </Label>
        <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue='---Select---'
              name='loading'
              options={studentFathers}
              // isLoading={true}
              onChange = {(e) => { setSelectedStudentFather(e.value) } }
              // isClearable={false}
            />
      </FormGroup> */}
      <FormGroup>
        <Label for='subject_id'>
          SUBJECT <span className='text-danger'>*</span>
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
        <Label for='mid_term_mark'>
          MID TERM MARK <span className='text-danger'>*</span>
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

export default SidebarNewMidTermMarks
