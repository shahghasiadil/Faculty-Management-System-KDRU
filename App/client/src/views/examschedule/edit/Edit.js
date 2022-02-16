// ** React Imports

import { useState, useEffect, Fragment } from 'react'
import { isObjEmpty } from '@utils'
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
import { updateStudent } from '../store/action'
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
const StudentTab = ({ selectedStudent }) => {
  // ** States
  const history = useHistory()
  const [studentData, setStudentData] = useState(null)
  const dispatch = useDispatch()
  // ** Function to change user image
 

  const StudentSchema = yup.object().shape({
    name: yup.string().required('First Name is required field').min(3, 'First Name must be at least 3 characters'),
    lastName: yup.string().required("Last Name is required field").min(3, 'Last Name must be at least 3 characters'),
    nid:  yup.string().required("National ID is required field").min(4, "National ID must be at least 4 characters"),
    period: yup.string().required("Period is required field"),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })
  
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedStudent !== null || (selectedStudent !== null && studentData !== null && selectedStudent.id !== StudentData.id)) {
      setStudentData(selectedStudent)
     
    }
  }, [selectedStudent])
  
  // ** Renders User
  const onSubmit = values => {
  
    if (isObjEmpty(errors)) {
      dispatch(
        updateStudent({
          name: values.name,
          last_name:values.lastName,
          national_id:values.nid,
          period: values.period,
          password: values.password,
          email: values.email
        }, selectedStudent.id)
      )
      
    }
    history.push('/students')
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          <Media className='mt-50' body>
            <h4>{selectedStudent.name} </h4>
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
                      defaultValue={studentData && studentData.name}
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
              <Label for='lastName'>
              Last Name <span className='text-danger'>*</span>
              </Label>
          <Input
            name='lastName'
            id='lastName'
            defaultValue={studentData && studentData.last_name}
            placeholder='Doe'
            invalid={errors.lastName && true}
            innerRef={register({ required: true })}
            className={watch('lastName') ? classnames({ 'is-valid': !errors.lastName }) : ''}
          />
          {errors && errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
        </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            autocomplete ='off'
            placeholder='john.doe@example.com'
            invalid={errors.email && true}
            defaultValue={studentData && studentData.email}
            innerRef={register({ required: true })}
            className={watch('email') ? classnames({ 'is-valid': !errors.email }) : ''}
          />
          {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
            </Col>
            <Col md ='4' sm="12">
            <FormGroup>
          <Label for='password'>
            Password <span className='text-danger'>*</span>
          </Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder=''
            invalid={errors.password && true}
            innerRef={register({ required: true })}
            className={watch('password') ? classnames({ 'is-valid': !errors.password }) : ''}
          />
          {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
          </FormGroup>
            </Col>

            <Col md = '4' sm ='12'>
            <FormGroup>
          <Label for='nid'>
            NID <span className='text-danger'>*</span>
          </Label>
          <Input
            name='nid'
            id='nid'
            type='number'
            defaultValue={studentData && studentData.national_id}
            placeholder='National Identity'
            invalid={errors.nid && true}
            innerRef={register({ required: true })}
            className={watch('nid') ? classnames({ 'is-valid': !errors.nid }) : ''}
          />
          {errors && errors.nid && <FormFeedback>{errors.nid.message}</FormFeedback>}
        </FormGroup>
            </Col>
            <Col md = '4' sm ='12'>
            <FormGroup>
          <Label for='period'>
            Period <span className='text-danger'>*</span>
          </Label>
          <Input
            name='period'
            id='period'
            type='number'
            placeholder=''
            invalid={errors.period && true}
            innerRef={register({ required: true })}
            className={watch('period') ? classnames({ 'is-valid': !errors.period }) : ''}
            defaultValue={studentData && studentData.period}
          />
          {errors && errors.period && <FormFeedback>{errors.period.message}</FormFeedback>}
        </FormGroup>
            </Col>
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline onClick = {() => { history.push('/students') }}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default StudentTab
