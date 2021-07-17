// ** React Imports

import { useState, useEffect, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useHistory} from 'react-router-dom'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Check } from "react-feather"
// ** Third Party Components
import { Media, Row, FormText, Col, Button, Form, FormFeedback, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'
import { getStudent, updateFinalMark } from '../store/action'
import axios from 'axios'
import Select from 'react-select'
// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'
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
const FinalMarkTab = ({ selectedFinalMark }) => {
  // ** States
  const history = useHistory()
  const [finalMarkData, setFinalMarkData] = useState(null)
  const [studentData, setStudentData] = useState([])
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState('')
  const [subjectData, setSubjectData] = useState([])
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const dispatch = useDispatch()
  // ** Function to change user image
 

  const FinalMarkSchema = yup.object().shape({
    mark:  yup.number().required("Mark is required field")
  })
  
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(FinalMarkSchema) })
  // ** Get Student Data
  const getStudent = (id) => {
    setStudentData([])
    axios.get(`http://127.0.0.1:8000/api/students/${id}`).then((response) => {
      setStudentData([{ value:response.data.id, label:response.data.name }])
    })
  }
  //** Load Students */
  const loadStudents = () => {
    axios.get('http://127.0.0.1:8000/api/get_final_student').then((response) => {
      for (const data of response.data) {
         students.push({ value:data.id, label:data.name})
      }
    })
}
 // ** Get Subject Data
 const getSubject = (id) => {
  axios.get(`http://127.0.0.1:8000/api/subjects/${id}`).then((response) => {
    setSubjectData([{ value:response.data.id, label:response.data.name }])
  })
}
//** Load Subjects */
const loadSubjects = () => {
  axios.get('http://127.0.0.1:8000/api/get_student_subject').then((response) => {
    for (const data of response.data) {
       subjects.push({ value:data.id, label:data.name})
    }
  })
}
  useEffect(() => {
    loadStudents()
    loadSubjects()
  }, [])
  // ** Update user image on mount or change
  useEffect(() => {
    setFinalMarkData(selectedFinalMark)
    if (finalMarkData !== null) {
      getStudent(selectedFinalMark.student_id)
      getSubject(selectedFinalMark.subject_id)
    }
  }, [selectedFinalMark])
 
  // ** Renders User
  const onSubmit = values => {
  
    if (isObjEmpty(errors)) {
      if (selectedStudent.length === 0 && selectedSubject.length === 0) {
        dispatch(
          updateFinalMark({
            student_id: studentData[0].value,
            subject_id: subjectData[0].value,
            marks:values.mark
          }, selectedFinalMark.id)
        )
      } else if (selectedSubject.length === 0) {
        dispatch(
          updateFinalMark({
            student_id: selectedStudent,
            subject_id: subjectData[0].value,
            marks:values.mark
          }, selectedFinalMark.id)
        )
      } else if (selectedStudent.length === 0) {
        dispatch(
          updateFinalMark({
            student_id: studentData[0].value,
            subject_id: selectedSubject,
            marks:values.mark
          }, selectedFinalMark.id)
        )
      } else {
        dispatch(
          updateFinalMark({
            student_id: selectedStudent,
            subject_id:selectedSubject,
            marks:values.mark
          }, selectedFinalMark.id)
        )
      }
    } 
    history.push('/final-marks')
  }

  return (studentData.length === 0 || subjectData.length === 0) ? null : (
    <Row>
      <Col sm='12'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label>STUDENT</Label>
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={ studentData[0] }
                  name='loading'
                  options={students}
                  // isLoading={true}
                  onChange = {(e) => { setSelectedStudent(e.value) } }
                  // isClearable={false}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
              <Label>
              SUBJECT <span className='text-danger'>*</span>
              </Label>
              <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={ subjectData[0] }
              name='loading'
              options={subjects}
              // isLoading={true}
              onChange = {(e) => { setSelectedSubject(e.value) } }
              // isClearable={false}
            />
            </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='mid_term_mark'>
              MID TERM MARK <span className='text-danger'>*</span>
              </Label>
          <Input
            name='mark'
            id='mark'
            type='number'
            defaultValue={finalMarkData && finalMarkData.marks}
            placeholder='MID TERM MARK'
            invalid={errors.mark && true}
            innerRef={register({ required: true })}
            className={watch('mark') ? classnames({ 'is-valid': !errors.mark }) : ''}
          />
          {errors && errors.mark && <FormFeedback>{errors.mark.message}</FormFeedback>}
        </FormGroup>
            </Col>
            
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline onClick = {() => { history.push('/mid-term-marks') }}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default FinalMarkTab
