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
import { updateMidTermMark, updateRegistration } from '../store/action'
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
const RegistrationTab = ({ selectedRegistration }) => {
  // ** States
  const history = useHistory()
  const [students, setStudents] = useState([])
  // const [subjectData, setSubjectData] = useState([])
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState(0)
  const [registrationData, setRegistrationData] = useState([])
  const [selectedStudent, setSelectedStudent] = useState('')
  const dispatch = useDispatch()
  // ** Function to change user image

  const MidTermMarkSchema = yup.object().shape({
   
  })
  
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(MidTermMarkSchema) })
  // ** Get Student Data
 
  //** Load Students */
  const loadStudents = () => {
    students.length = 0
    axios.get('http://127.0.0.1:8000/api/get_student').then((response) => {
      for (const data of response.data) {
          students.push({ value:data.name, label:data.name})
        }
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

    if (registrationData !== null) {
      setRegistrationData(selectedRegistration)
    }
  }, [selectedRegistration])
  // ** Renders User
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
        dispatch(
          updateRegistration({
            student_id: selectedStudent,
            subject_id: selectedSubject
          }, selectedRegistration.id)
        )

    } 
    history.push('/registration')
  }

  return (registrationData.length === 0 || selectedRegistration.length === 0) ? null : (
    <Row>
      <Col sm='12'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label>Student</Label>
                <Select
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  defaultValue={ name[0] }
                  name='loading'
                  options={students}
                  // isLoading={true}
                  // onChange = {(e) => { loadStudentFatherName(e.value) } }
                  // isClearable={false}
                />
              </FormGroup>
            </Col>
          
         
            <Col md='4' sm='12'>
              <FormGroup>
              <Label>
              Subject <span className='text-danger'>*</span>
              </Label>
              <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={ subjectData[0] }
              name='loading'
              options={subjects}
              // isLoading={true}
              // onChange = {(e) => { setSelectedSubject(e.value) } }
              // isClearable={false}
            />
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
export default RegistrationTab
