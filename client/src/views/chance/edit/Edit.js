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
import { updateChance } from '../store/action'
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
const ChanceTab = ({ selectedChance }) => {
  // ** States
  const history = useHistory()
  const [chanceData, setChanceData] = useState(null)
  const [name, setName] = useState([])
  const [fatherName, setFatherName] = useState([])
  const [rollNo, setRollNo] = useState([])
  const [students, setStudents] = useState([])
  const [subjectData, setSubjectData] = useState([])
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState(0)
  const [studentFathers, setStudentFathers] = useState([])
  const [studentRollNo, setStudentRollNo] = useState([])
  const [selectedStudentRollNo, setSelectedStudentRollNo] = useState(0)
  const dispatch = useDispatch()
  // ** Function to change user image

  const ChanceSchema = yup.object().shape({
    chanceMark:  yup.number().required("Mark is required field"),
    chanceCount: yup.number().required("Chance Count is required field").max(5)
  })
  
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(ChanceSchema) })
  // ** Update user image on mount or change
  // ** Get Student Data
  const getStudentData = (id) => {
    axios.get(`http://127.0.0.1:8000/api/students/${id}`).then((response) => {
      setName([{ value:response.data.name, label:response.data.name }])
      setFatherName([{ value:response.data.father_name, label:response.data.father_name }])
      setRollNo([{ value:response.data.id, label:response.data.roll_no }])
    })
  }
  //** Load Students */
  const loadStudents = () => {
    students.length = 0
    axios.get('http://127.0.0.1:8000/api/get_student').then((response) => {
      for (const data of response.data) {
         students.push({ value:data.name, label:data.name})
      }
    })
}
// ** load student father names
const loadStudentFatherName = (name) => {
  studentFathers.length = 0
  axios.get(`http://127.0.0.1:8000/api/get_student_father_name/${name}`)
  .then((response) => {
    for (const data of response.data) {
         studentFathers.push({ value:data.father_name, label:data.father_name})
      }
    })
    studentFathers.splice(0, 1)
}
// ** load student roll no
const loadStudentRollNo = (fname) => {
  studentRollNo.length = 0
  axios.get(`http://127.0.0.1:8000/api/get_student_roll_no/${fname}`)
  .then((response) => {
    for (const data of response.data) {
         studentRollNo.push({ value:data.id, label:data.roll_no})
      }
    })
    studentFathers.splice(0, 1)
}
 // ** Get Subject Data
 const getSubject = (id) => {
  axios.get(`http://127.0.0.1:8000/api/subjects/${id}`).then((response) => {
    setSubjectData([{ value:response.data.id, label:response.data.name }])
  })
}
//** Load Subjects */
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
  // ** Update user image on mount or change
  useEffect(() => {
    setChanceData(selectedChance)
    if (chanceData !== null) {
      getStudentData(selectedChance.student_id)
      getSubject(selectedChance.subject_id)
    }
  }, [selectedChance])
  
  // ** Renders User
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      if (selectedStudentRollNo === 0 && selectedSubject === 0) {
        dispatch(
          updateChance({
            student_id: rollNo[0].value,
            subject_id: subjectData[0].value,
            marks:values.chanceMark,
            chance_count: values.chanceCount
          }, selectedChance.id)
        )
      } else if (selectedSubject === 0) {
        dispatch(
          updateChance({
            student_id: selectedStudentRollNo,
            subject_id: subjectData[0].value,
            marks:values.chanceMark,
            chance_count: values.chanceCount
          }, selectedChance.id)
        )
      } else if ((selectedStudentRollNo === 0)) {
         dispatch(
          updateChance({
            student_id: rollNo[0].value,
            subject_id: selectedSubject,
            marks:values.chanceMark,
            chance_count: values.chanceCount
          }, selectedChance.id)
        )
      } else {
        dispatch(
          updateChance({
            student_id: selectedStudentRollNo,
            subject_id:selectedSubject,
            marks:values.chanceMark,
            chance_count: values.chanceCount
          }, selectedChance.id)
        )
      }
    }
    history.push('/chances')
  }

  return (rollNo.length === 0 || subjectData.length === 0) ? null : (
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
                  defaultValue={ name[0] }
                  name='loading'
                  options={students}
                  // isLoading={true}
                  onChange = {(e) => { loadStudentFatherName(e.value) } }
                  // isClearable={false}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
           <FormGroup>
            <Label>
              FATHER NAME <span className='text-danger'>*</span>
            </Label>
            <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={ fatherName[0] }
                  name='loading'
                  options={studentFathers}
                  // isLoading={true}
                  onChange = {(e) => { loadStudentRollNo(e.value) } }
                  // isClearable={false}
                />
          </FormGroup>
          </Col>
          <Col md='4' sm='12'>
          <FormGroup>
            <Label>
              Roll No <span className='text-danger'>*</span>
            </Label>
            <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={ rollNo[0] }
                  name='loading'
                  options={studentRollNo}
                  // isLoading={true}
                  onChange = {(e) => { setSelectedStudentRollNo(e.value) } }
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
              <Label for='chanceCount'>
              CHANCE COUNT <span className='text-danger'>*</span>
              </Label>
          <Input
            name='chanceCount'
            id='chanceCount'
            type='number'
            defaultValue={chanceData && chanceData.chance_count}
            placeholder='CHANCE COUNT'
            invalid={errors.chanceCount && true}
            innerRef={register({ required: true })}
            className={watch('chanceCount') ? classnames({ 'is-valid': !errors.chanceCount }) : ''}
          />
          {errors && errors.chanceCount && <FormFeedback>{errors.chanceCount.message}</FormFeedback>}
        </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='chanceMark'>
              CHANCE MARK <span className='text-danger'>*</span>
              </Label>
          <Input
            name='chanceMark'
            id='chanceMark'
            type='number'
            defaultValue={chanceData && chanceData.marks}
            placeholder='CHANCE MARK'
            invalid={errors.chanceMark && true}
            innerRef={register({ required: true })}
            className={watch('chanceMark') ? classnames({ 'is-valid': !errors.chanceMark }) : ''}
          />
          {errors && errors.chanceMark && <FormFeedback>{errors.chanceMark.message}</FormFeedback>}
        </FormGroup>
            </Col>
            
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline onClick = {() => { history.push('/chances') }}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default ChanceTab
