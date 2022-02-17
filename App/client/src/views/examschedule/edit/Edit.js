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
import { updateExamSchedule, updateStudent } from '../store/action'
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
const StudentTab = ({ selectedExamSchedule }) => {
  // ** States
  const history = useHistory()
  const [ScheduleData, setScheduleData] = useState(null)
  const dispatch = useDispatch()
  // ** Function to change user image
 

  const StudentSchema = yup.object().shape({

  })
  
  const { register, errors, handleSubmit, watch} = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedExamSchedule !== null || (selectedExamSchedule !== null && ScheduleData !== null && selectedExamSchedule.id !== ScheduleData.id)) {
      setStudentData(selectedExamSchedule)
     
    }
  }, [selectedExamSchedule])
  
  // ** Renders User
  const onSubmit = values => {
  
    if (isObjEmpty(errors)) {
      dispatch(
        updateExamSchedule({

        }, selectedExamSchedule.id)
      )
      
    }
    history.push('/examschedules')
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          <Media className='mt-50' body>
            <h4>{selectedExamSchedule.name} </h4>
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
                      defaultValue={ScheduleData && ScheduleData.date}
                      placeholder='John'
                      innerRef={register({ required: true })}
                      invalid={errors.date && true}
                      className={watch('date') ? classnames({ 'is-valid': !errors.date }) : ''}
                    />
                    {errors && errors.date && <FormFeedback>{errors.date.message}</FormFeedback>}
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
