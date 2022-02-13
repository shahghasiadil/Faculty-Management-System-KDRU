// ** React Imports
import { useState, useEffect, Fragment } from 'react'

// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** React hook forms
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Yup
import * as yup from 'yup'

// ** Redux
import { useDispatch } from 'react-redux'

// ** Router history
import { useHistory} from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Check } from "react-feather"
import Select from 'react-select'

// ** Third Party Components
import { Media, Row, FormText, Col, Button, Form, FormFeedback, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'


// ** Store & Actions
import { updateTeacher} from '../store/action'
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
const TeacherTab = ({ selectedTeacher }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  
  // ** States
  const [teacherData, setTeacherData] = useState(null)
  const [degree, setDegree] = useState(selectedTeacher.degree)
  const [value, setValue] = useState('')
  const [address, setAddress] = useState(selectedTeacher.address_id)

   // ** Validations Yup
   const TeacherSchema = yup.object().shape({
    name: yup.string().required().min(3).label('First Name'),
    lastName: yup.string().required().min(3).label('Last Name'),
    nid: yup.string().required().min(4).label('National ID'),
    bio: yup.string().required().min(10).label('Bio'),
    // degree:yup.string().required().label('Degree'),
    email: yup.string().email().required().label('Email'),
    password: yup.string().min(6).required().label('Password')
  })

  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(TeacherSchema) })
  
  const degrees = [
    { value: 'Bacholer', label: 'Bacholer'},
    { value: 'Master', label: 'Master' },
    { value: 'PhD', label: 'PhD' }
  ]
  const Address = [
    { value: 1, label: 'Kandahar' },
    { value: 2, label: 'Helmand' },
    { value: 3, label: 'Ghazni' },
    { value: 4, label: 'Farah'},
    { value: 5, label: 'Kabul'},
    { value: 6, label: 'Nangrahar'}
    // { value: 4, label: 'Farah'},
  ]
  // ** Finding index of degree { Master , PhD , Bacholer }
  const index = degrees.findIndex(ndx => ndx.label === selectedTeacher.degree)

  const ndx = Address.findIndex(ndx => ndx.value === selectedTeacher.address_id)
    // ** Update teacher on mount or change
  
  useEffect(() => {
  
    if (selectedTeacher !== null || (selectedTeacher !== null && teacherData !== null && selectedTeacher.id !== teacherData.id)) {
      setTeacherData(selectedTeacher)
    }
  }, [selectedTeacher])

  // ** Renders Teacher
  const onSubmit = values => {
    
    if (isObjEmpty(errors)) {
      if (degree) {
        // console.log(values)
        dispatch(
          updateTeacher({
            name: values.name,
            last_name:values.lastName,
            national_id:values.nid,
            degree,
            password: values.password,
            email: values.email,
            bio: values.bio,
            address_id:address
          }, selectedTeacher.id)
        )
      }
    }
    history.push('/teachers')
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          <Media className='mt-50' body>
            <h4>{`${selectedTeacher.name}  ${selectedTeacher.last_name}`} </h4>
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
                      defaultValue={teacherData && teacherData.name}
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
            defaultValue={teacherData && teacherData.last_name}
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
            placeholder='john@example.com'
            invalid={errors.email && true}
            defaultValue={teacherData && teacherData.user?.email}
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
            // defaultValue={teacherData && teacherData.user?.password}
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
              defaultValue={teacherData && teacherData.national_id}
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

            <Label for = "degree">Degree<span className='text-danger'>*</span></Label>
            <Select
              theme={selectThemeColors}
              classNamePrefix='select'
              name = 'degree'
              id = 'degree'
              options={degrees}
              onChange = { (e) => { setDegree(e.value) }} 
              isLoading
              defaultValue = {degrees[index] }
            />
          
        </FormGroup>
      </Col>
      <Col md = '4' sm = '12'>
        <FormGroup>
        <Label for = "address">Address<span className='text-danger'>*</span></Label>
            <Select
              theme={selectThemeColors}
              // className={classnames('react-select', { 'is-invalid': !degree})}
              classNamePrefix='select'
              defaultValue={Address[ndx]}
              name = 'address'
              id = 'addres'
              options={Address}
              onChange = { (e) => { setAddress(e.value) }}
              isLoading
            />
        </FormGroup>
      </Col>
      <Col md = '4' sm = '12'>
      <FormGroup className= 'mt-2'>
        <div className='form-label-group mb-0'>
          <Input
            type='textarea'
            name='bio'
            autoComplete = "off"
            id='bio'
            rows='3'
            placeholder='Bio'
            // eslint-disable-next-line no-mixed-operators
            invalid={ errors.bio && true || value.length > 100}
            innerRef={register({ required: true })}
            className={ watch('bio') && value.length <= 100 ? classnames({ 'is-valid': !errors.bio }) : ''}
            onChange={e => setValue(e.target.value)}
            defaultValue = {teacherData && teacherData.bio}
          />
          {errors && errors.bio && <FormFeedback>{errors.bio.message}</FormFeedback>}
          {value.length > 100 && <FormFeedback><b>Limit!</b></FormFeedback>}
          <Label>Bio</Label>
        </div>
        <span
          className={classnames('textarea-counter-value float-right', {
            'bg-danger': value.length > 100
          })}
        >
          {`${value.length}/100`}
        </span>
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
export default TeacherTab
