// ** React Import
import { useState, Fragment} from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

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
import {Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'

// ** Store & Actions
import { addChance } from '../store/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export const SuccessProgressToast = ({chanceCount, mark}) => (
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
         { `${chanceCount} Chance ${mark} Mark Added Successfully`}
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
const SidebarNewChances = ({ open, toggleSidebar }) => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')
  // ** Store Vars
  const dispatch = useDispatch()
  // ** Validations Yup
  const ChanceSchema = yup.object().shape({
    student_id: yup.number().required('Student ID is required field'),
    subject_id: yup.number().required("Subject ID is required field"),
    chanceMark:  yup.number().required("Mark is required field"),
    chanceCount: yup.number().required("Chance Count is required field").max(5)
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(ChanceSchema) })

  // Get Student Data For Select Options
  // const [student, setStudent] = useState({ std: null})
  // const handleStudent = () => {
  //         axios.get(`http://127.0.0.1:8000/api/students`)
  //           .then(response => {
  //               setStudent({std:response.data.data})
  //           })
  //           .catch((error) => {
  //             console.log(error, "catch the hoop")
  //           })
              
  //     }  

  // ** Function to handle form submit
  const onSubmit = (values) => {

    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addChance({
          student_id:values.student_id,
          subject_id:values.subject_id,
          marks:values.chanceMark,
          chance_count:values.chanceCount
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
          Student <span className='text-danger'>*</span>
        </Label>
        <Input
          name='student_id'
          id='student_id'
          type='number'
          placeholder='Student ID'
          autoComplete = "off"
          invalid={errors.student_id && true}
          innerRef={register({ required: true })}
          className={watch('student_id') ? classnames({ 'is-valid': !errors.student_id }) : ''}
        />
        {errors && errors.student_id  && <FormFeedback>{errors.student_id.message}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for='subject_id'>
          Subject <span className='text-danger'>*</span>
        </Label>
        <Input
          name='subject_id'
          id='subject_id'
          type='number'
          placeholder='subject'
          autoComplete = "off"
          invalid={errors.subject_id && true}
          innerRef={register({ required: true })}
          className={watch('subject_id') ? classnames({ 'is-valid': !errors.subject_id }) : ''}
        />
        {errors && errors.subject_id  && <FormFeedback>{errors.subject_id.message}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for='chanceCount'>
          Chance Count <span className='text-danger'>*</span>
        </Label>
        <Input
          name='chanceCount'
          id='chanceCount'
          // value = {inputTerm}
          type='number'
          autoComplete = "off"
          placeholder='1'
          // eslint-disable-next-line no-mixed-operators
          innerRef={register({ required: true })}
          className={watch('chanceCount') ? classnames({ 'is-valid': !errors.chanceCount }) : ''}
        />
         {errors && errors.chanceCount  && <FormFeedback>{errors.chanceCount.message}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for='chanceMark'>
          Chance Mark <span className='text-danger'>*</span>
        </Label>
        <Input
          name='chanceMark'
          id='chanceMark'
          // value = {inputTerm}
          type='number'
          autoComplete = "off"
          placeholder='60'
          // eslint-disable-next-line no-mixed-operators
          innerRef={register({ required: true })}
          className={watch('chanceMark') ? classnames({ 'is-valid': !errors.chanceMark }) : ''}
        />
         {errors && errors.chanceMark  && <FormFeedback>{errors.chanceMark.message}</FormFeedback>}
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

export default SidebarNewChances
