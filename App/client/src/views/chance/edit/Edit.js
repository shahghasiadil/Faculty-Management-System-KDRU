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
import { updateChance } from '../store/action'
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
  const dispatch = useDispatch()
  // ** Function to change user image
 

  const ChanceSchema = yup.object().shape({
    student_id: yup.number().required('Student ID is required field'),
    subject_id: yup.number().required("Subject ID is required field"),
    chanceMark:  yup.number().required("Mark is required field"),
    chanceCount: yup.number().required("Chance Count is required field").max(5)
  })
  
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(ChanceSchema) })
  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedChance !== null || (selectedChance !== null && chanceData !== null && selectedChance.id !== chanceData.id)) {
      setChanceData(selectedChance)
     
    }
  }, [selectedChance])
  
  // ** Renders User
  const onSubmit = values => {
  
    if (isObjEmpty(errors)) {
      dispatch(
        updateChance({
          student_id: values.student_id,
          subject_id:values.subject_id,
          marks:values.chanceMark,
          chance_count: values.chanceCount
        }, selectedChance.id)
      )
      
    }
    history.push('/chances')
  }

  return (
    <Row>
      <Col sm='12'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='student_id'>STUDENT ID</Label>
                <Input
                      name='student_id'
                      id='student_id'
                      type='number'
                      defaultValue={chanceData && chanceData.student_id}
                      placeholder='STUDENT ID'
                      innerRef={register({ required: true })}
                      invalid={errors.student_id && true}
                      className={watch('student_id') ? classnames({ 'is-valid': !errors.student_id }) : ''}
                    />
                    {errors && errors.student_id && <FormFeedback>{errors.student_id.message}</FormFeedback>}
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='subject_id'>
              SUBJECT ID <span className='text-danger'>*</span>
              </Label>
          <Input
            name='subject_id'
            id='subject_id'
            type='number'
            defaultValue={chanceData && chanceData.subject_id}
            placeholder='SUBJECT ID'
            invalid={errors.subject_id && true}
            innerRef={register({ required: true })}
            className={watch('subject_id') ? classnames({ 'is-valid': !errors.subject_id }) : ''}
          />
          {errors && errors.subject_id && <FormFeedback>{errors.subject_id.message}</FormFeedback>}
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
