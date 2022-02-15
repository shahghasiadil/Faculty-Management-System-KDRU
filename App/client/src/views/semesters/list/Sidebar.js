// ** React Import
import { useState, Fragment} from 'react'

import Avatar from '@components/avatar'
import { Check, X} from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import {Button, FormGroup, Label, Form, Input, FormFeedback } from 'reactstrap'

// ** Store & Actions
import { addSemester } from '../store/action'
import { useDispatch } from 'react-redux'

export const SuccessProgressToast = ({name}) => (
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
         { `${name} Added Successfully`}
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
        
      </span>
    </div>
  </Fragment>
)
const SidebarNewSemesters = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  // ** Store Vars
  const dispatch = useDispatch()
  // ** Validations Yup
  const SemesterSchema = yup.object().shape({
    name: yup.string().required().min(3).label('Semester')
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(SemesterSchema) })
  
  // ** Function to handle form submit
  const onSubmit = (values) => {

    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addSemester({
          name: values.name
        })
      )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Semester'
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

export default SidebarNewSemesters
