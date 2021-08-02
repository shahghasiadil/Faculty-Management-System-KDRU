// ** React Imports

import { useState, useEffect, Fragment } from 'react'
import Select from 'react-select'
import { isObjEmpty, selectThemeColors } from '@utils'
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
import { updateSubject } from '../store/action'
import axios from 'axios'
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
const SubjectTab = ({ selectedSubject}) => {
  // ** States
  const history = useHistory()
  const [subjectData, setSubjectData] = useState(null)
  const [semesters, setSemesters] = useState([])
  const [values, setValue] = useState('')
  const dispatch = useDispatch()
  // ** Function to change user image

  const options = []
  const loadSemesters = () => {
    axios.get('http://127.0.0.1:8000/api/get-semesters').then((res) => {
      for (const data of res.data) {
          options.push({values:data.id, label:data.name})
          // console.log(data)
      }
    })
  }
  const SubjectSchema = yup.object().shape({
    name: yup.string().required().min(3).label('Name'),
    credit: yup.string().required().label("Credit")
  })
  
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(SubjectSchema) })
  // ** Update user image on mount or change
  useEffect(() => {
    loadSemesters()
    if (selectedSubject !== null || (selectedSubject !== null && subjectData !== null && selectedSubject.id !== teacherData.id)) {
      setSubjectData(selectedSubject)
     
    }
  })
  console.log(options)
  const index = options.findIndex(ndx => ndx.values === subjectData.semester_id)
  console.log(index)
  // ** Renders User
  const onSubmit = values => {
  
    if (isObjEmpty(errors)) {
      dispatch(
        updateSubject({
          name: values.name,
          credit:values.credit,
          semester_id:values
        }, selectedSubject.id)
      )
      
    }
    history.push('/subjects')
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          <Media className='mt-50' body>
            <h4>{selectedSubject.name} </h4>
          </Media>
        </Media>
      </Col>
      <Col sm='12'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                      name='name'
                      id='name'
                      defaultValue={subjectData && subjectData.name}
                      placeholder='John'
                      innerRef={register({ required: true })}
                      invalid={errors.name && true}
                      className={watch('name') ? classnames({ 'is-valid': !errors.name }) : ''}
                    />
                    {errors && errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='credit'>
              Credit <span className='text-danger'>*</span>
              </Label>
          <Input
            name='credit'
            id='credit'
            defaultValue={subjectData && subjectData.credit}
            placeholder='Doe'
            invalid={errors.credit && true}
            innerRef={register({ required: true })}
            className={watch('credit') ? classnames({ 'is-valid': !errors.credit }) : ''}
          />
          {errors && errors.credit && <FormFeedback>{errors.credit.message}</FormFeedback>}
        </FormGroup>
            </Col>
            <Col md = '4'  sm = '12'>
          <FormGroup>
          <Label for='semesters'>
          Semester <span className='text-danger'>*</span>
        </Label>
        <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={options[0]}
              name='loading'
              options={options}
              isLoading={true}
              onChange = {(e) => { setValue(e.value) } }
              // isClearable={false}
            />
          </FormGroup>
        </Col>
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline onClick = {() => { history.push('/subjects') }}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default SubjectTab
