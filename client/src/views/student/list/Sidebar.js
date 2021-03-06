// ** React Import
import { useState, Fragment} from 'react'

import Avatar from '@components/avatar'
import { Check, X} from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'
import Select from 'react-select'
// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import {Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'

// ** Store & Actions
import { addStudent } from '../store/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export const SuccessProgressToast = ({name, lastName}) => (
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
         { `${name} ${lastName} Added Successfully`}
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
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        Email or National Id is Duplicate
      </span>
    </div>
  </Fragment>
)
const SidebarNewStudents = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  const [address, setAddress] = useState('')
  // ** Store Vars
  const dispatch = useDispatch()
  // ** Validations Yup
  const StudentSchema = yup.object().shape({
    name: yup.string().required('First Name is required field').min(3, 'First Name must be at least 3 characters'),
    lastName: yup.string().required("Last Name is required field").min(3, 'Last Name must be at least 3 characters'),
    nid:  yup.string().required("National ID is required field").min(4, "National ID must be at least 4 characters"),
    period: yup.string().required("Period is required field"),
    email: yup.string().email().required(),
    father_name:yup.string().required().label("Father Name"),
    grand_father_name:yup.string().required().label("Grand Father Name"),
    roll_no: yup.string().required().label('Roll No'),
    password: yup.string().min(6).required()
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  const Address = [
    { value: 1, label: 'Kandahar' },
    { value: 2, label: 'Helmand' },
    { value: 3, label: 'Ghazni' },
    { value: 4, label: 'Farah'},
    { value: 5, label: 'Kabul'},
    { value: 6, label: 'Nangrahar'}
    // { value: 4, label: 'Farah'},
  ]
  // ** Check if user Exists Validation
  const  handleInputChange = (value) => {
    setInputTerm(value)
      const res = axios.get(`http://127.0.0.1:8000/api/students/find-by-email?email=${value}`).then(response => {
        if (response.data.status === 200) {
          setVisible(true)
          console.log(visible)
        } else {
          setVisible(false)
        }
       
      })
     
  }
  // ** Function to handle form submit
  const onSubmit = (values) => {

    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addStudent({
          name: values.name,
          last_name:values.lastName,
          national_id:values.nid,
          period: values.period,
          password: values.password,
          email: values.email,
          address_id:address,
          father_name:values.father_name,
          grand_father_name:values.grand_father_name,
          roll_no:values.roll_no
        })
      )
    }
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
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete = "new-password">
        <FormGroup>
          <Label for='first-name'>
            Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='name'
            id='name'
            autoComplete = "off"
            placeholder='John'
            innerRef={register({ required: true })}
            invalid={errors.name && true}
            className={watch('name') ? classnames({ 'is-valid': !errors.name }) : ''}
          />
          {errors && errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for='lastName'>
            Last Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='lastName'
            id='lastName'
            placeholder='Doe'
            autoComplete = "off"
            invalid={errors.lastName && true}
            innerRef={register({ required: true })}
            className={watch('lastName') ? classnames({ 'is-valid': !errors.lastName }) : ''}
          />
          {errors && errors.lastName  && <FormFeedback>{errors.lastName.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for='father_name'>
            Father Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='father_name'
            id='father_name'
            placeholder='Doe'
            autoComplete = "off"
            invalid={errors.father_name && true}
            innerRef={register({ required: true })}
            className={watch('father_name') ? classnames({ 'is-valid': !errors.father_name }) : ''}
          />
          {errors && errors.father_name  && <FormFeedback>{errors.father_name.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for='father_name'>
            Grand Father Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='grand_father_name'
            id='grand_father_name'
            placeholder='Doe'
            autoComplete = "off"
            invalid={errors.grand_father_name && true}
            innerRef={register({ required: true })}
            className={watch('grand_father_name') ? classnames({ 'is-valid': !errors.grand_father_name }) : ''}
          />
          {errors && errors.grand_father_name  && <FormFeedback>{errors.grand_father_name.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for='roll_no'>
            Roll No <span className='text-danger'>*</span>
          </Label>
          <Input
            name='roll_no'
            id='roll_no'
            type ="number"
            placeholder='Doe'
            autoComplete = "off"
            invalid={errors.roll_no && true}
            innerRef={register({ required: true })}
            className={watch('roll_no') ? classnames({ 'is-valid': !errors.roll_no }) : ''}
          />
          {errors && errors.roll_no  && <FormFeedback>{errors.roll_no.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            // value = {inputTerm}
            autoComplete = "off"
            placeholder='john.doe@example.com'
            // eslint-disable-next-line no-mixed-operators
            invalid={errors.email && true || visible }
            onChange = {event => { handleInputChange(event.target.value) }}
            innerRef={register({ required: true })}
            className={watch('email') && !visible ? classnames({ 'is-valid': !errors.email }) : ''}
          />
          {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback> }
          {visible && <FormFeedback>This email <strong>already exits!</strong> </FormFeedback>}  
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='password'>
            Password <span className='text-danger'>*</span>
          </Label>
          <Input
            type='password'
            name='password'
            autoComplete = "off"
            id='password'
            placeholder=''
            invalid={errors.password && true}
            innerRef={register({ required: true })}
            className={watch('password') ? classnames({ 'is-valid': !errors.password }) : ''}
          />
          {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='nid'>
            NID <span className='text-danger'>*</span>
          </Label>
          <Input
            name='nid'
            id='nid'
            autoComplete = "off"
            type='number'
            placeholder='National Identity'
            invalid={errors.nid && true}
            innerRef={register({ required: true })}
            className={watch('nid') ? classnames({ 'is-valid': !errors.nid }) : ''}
          />
          {errors && errors.nid && <FormFeedback>{errors.nid.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for='period'>
            Period <span className='text-danger'>*</span>
          </Label>
          <Input
            name='period'
            id='period'
            autoComplete = "off"
            type='number'
            placeholder=''
            invalid={errors.period && true}
            innerRef={register({ required: true })}
            className={watch('period') ? classnames({ 'is-valid': !errors.period }) : ''}
            
          />
          {errors && errors.period && <FormFeedback>{errors.period.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
        <Label for = "address">Address<span className='text-danger'>*</span></Label>
            <Select
              theme={selectThemeColors}
              // className={classnames('react-select', { 'is-invalid': !degree})}
              classNamePrefix='select'
              defaultValue={''}
              name = 'address'
              id = 'addres'
              options={Address}
              onChange = { (e) => { setAddress(e.value) }}
              isLoading
            />
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

export default SidebarNewStudents
