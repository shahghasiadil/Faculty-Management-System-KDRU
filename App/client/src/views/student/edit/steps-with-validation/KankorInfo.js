import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const KankorInfo = ({ stepper, type }) => {
  const { register, errors, handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      alert('submitted')
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Kankor</h5>
        <small>Enter Student's Kankor Info.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>

          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`kankor-id-${type}`}>
              Kankor ID
            </Label>
            <Input
              type='text'
              name={`kankor-id-${type}`}
              id={`kankor-id-${type}`}
              placeholder='1401334'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`kankor-id-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`kankor-year-${type}`}>
              Kankor Year
            </Label>
            <Input
              type='number'
              name={`kankor-year-${type}`}
              id={`kankor-year-${type}`}
              placeholder='1398'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`kankor-year-${type}`] })}
            />
          </FormGroup>
        </Row>
        <Row>

          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`kankor-score-${type}`}>
              Kankor Score
            </Label>
            <Input
              type='text'
              name={`kankor-score-${type}`}
              id={`kankor-score-${type}`}
              placeholder='2343'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`kankor-score-${type}`] })}
            />
          </FormGroup>
        </Row>

        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='success' className='btn-submit'>
            Submit
          </Button.Ripple>
        </div>


      </Form>
    </Fragment>
  )
}

export default KankorInfo
