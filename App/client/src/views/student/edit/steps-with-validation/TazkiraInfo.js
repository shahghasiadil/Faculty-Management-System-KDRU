import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const TazkiraInfo = ({ stepper, type }) => {
  const { register, errors, handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Tazkira</h5>
        <small>Enter Student's Tazkira Info.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`tazkira-volume-${type}`}>
              Tazkira Volume
            </Label>
            <Input
              type='text'
              name={`tazkira-volume-${type}`}
              id={`tazkira-volume-${type}`}
              placeholder='1401-2234-54'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`tazkira-volume-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`tazkira-page-${type}`}>
              Tazkira Page
            </Label>
            <Input
              type='text'
              name={`tazkira-page-${type}`}
              id={`tazkira-page-${type}`}
              placeholder='3'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`tazkira-page-${type}`] })}
            />
          </FormGroup>
        </Row>
        <Row>
          
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`registration-no-${type}`}>
              Registration No
            </Label>
            <Input
              type='text'
              name={`registration-no-${type}`}
              id={`registration-no-${type}`}
              placeholder='2343'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`registration-no-${type}`] })}
            />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default TazkiraInfo
