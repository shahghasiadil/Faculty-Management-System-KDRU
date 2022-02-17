import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const Address = ({ stepper, type }) => {
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
        <h5 className='mb-0'>Address</h5>
        <small>Enter Student's Address.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`province-${type}`}>
              Province
            </Label>
            <Input
              type='text'
              id={`province-${type}`}
              name={`province-${type}`}
              placeholder='Kabul'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`province-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`district-${type}`}>
              District
            </Label>
            <Input
              type='text'
              name={`district-${type}`}
              id={`district-${type}`}
              placeholder='Paghman'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`district-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='4'>
            <Label className='form-label' for={`area-${type}`}>
              Area
            </Label>
            <Input
              type='text'
              name={`area-${type}`}
              id={`area-${type}`}
              placeholder='Area'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`area-${type}`] })}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`street-no-${type}`}>
              Street No
            </Label>
            <Input
              type='number'
              name={`street-no-${type}`}
              id={`street-no-${type}`}
              placeholder='12'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`street-no-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`house-no-${type}`}>
              House No
            </Label>
            <Input
              type='number'
              name={`house-no-${type}`}
              id={`house-no-${type}`}
              placeholder='4'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`house-no-${type}`] })}
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

export default Address
