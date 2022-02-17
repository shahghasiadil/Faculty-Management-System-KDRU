import { Fragment, useState } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight, X, Plus } from 'react-feather'

import Repeater from '@components/repeater'
import { SlideDown } from 'react-slidedown'

import { Label, Card, CardBody, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const Relatives = ({ stepper, type }) => {
  const { register, errors, handleSubmit, trigger } = useForm()


  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    const slideDownWrapper = e.target.closest('.react-slidedown'),
      form = e.target.closest('form')
    if (slideDownWrapper) {
      slideDownWrapper.remove()
    } else {
      form.remove()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Relatives</h5>
        <small>Enter Student's Relatives Info.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Card>
          <CardBody>
            <Repeater count={count}>
              {i => {
                const Tag = i === 0 ? 'div' : SlideDown
                return (
                  <Tag key={i}>
                    <Form>
                      <Row className='justify-content-between align-items-center'>
                        <Col md='10'>

                          <Row>

                            <FormGroup tag={Col} md='4'>
                              <Label className='form-label' for={`relationship-${type}`}>
                                Relationship
                              </Label>
                              <Input
                                type='text'
                                id={`relationship-${type}`}
                                name={`relationship-${type}`}
                                placeholder='Uncle'
                                innerRef={register({ required: true })}
                                className={classnames({ 'is-invalid': errors[`relationship-${type}`] })}
                              />
                            </FormGroup>

                            <FormGroup tag={Col} md='4'>
                              <Label className='form-label' for={`name-${type}`}>
                                Name
                              </Label>
                              <Input
                                type='text'
                                id={`name-${type}`}
                                name={`name-${type}`}
                                placeholder='Doe'
                                innerRef={register({ required: true })}
                                className={classnames({ 'is-invalid': errors[`name-${type}`] })}
                              />
                            </FormGroup>

                            <FormGroup tag={Col} md='4'>
                              <Label className='form-label' for={`father-name-${type}`}>
                                Father Name
                              </Label>
                              <Input
                                type='text'
                                id={`father-name-${type}`}
                                name={`father-name-${type}`}
                                placeholder='Doe'
                                innerRef={register({ required: true })}
                                className={classnames({ 'is-invalid': errors[`father-name-${type}`] })}
                              />
                            </FormGroup>
                          </Row>

                          <Row>
                            <FormGroup tag={Col} md='4'>
                              <Label className='form-label' for={`job-${type}`}>
                                Job
                              </Label>
                              <Input
                                type='text'
                                id={`job-${type}`}
                                name={`job-${type}`}
                                placeholder='Web Developer'
                                innerRef={register({ required: true })}
                                className={classnames({ 'is-invalid': errors[`job-${type}`] })}
                              />
                            </FormGroup>

                            <FormGroup tag={Col} md='4'>
                              <Label className='form-label' for={`academic-transfer-${type}`}>
                                Academic Transfer
                              </Label>
                              <Input
                                type='text'
                                id={`academic-transfer-${type}`}
                                name={`academic-transfer-${type}`}
                                placeholder=' '
                                innerRef={register({ required: true })}
                                className={classnames({ 'is-invalid': errors[`academic-transfer-${type}`] })}
                              />
                            </FormGroup>

                            <FormGroup tag={Col} md='4'>
                              <Label className='form-label' for={`phone-${type}`}>
                                Phone
                              </Label>
                              <Input
                                type='text'
                                id={`phone-${type}`}
                                name={`phone-${type}`}
                                placeholder='1234567890'
                                innerRef={register({ required: true })}
                                className={classnames({ 'is-invalid': errors[`phone-${type}`] })}
                              />
                            </FormGroup>
                          </Row>
                        </Col>

                        <Col md='2'>

                          <FormGroup tag={Col} md='2'>
                            <Button.Ripple color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                              <X size={14} className='mr-50' />
                              <span>Delete</span>
                            </Button.Ripple>
                          </FormGroup>
                        </Col>

                      </Row>
                    </Form>
                  </Tag>
                )
              }}
            </Repeater>
            <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
              <Plus size={14} />
              <span className='align-middle ml-25'>Add New</span>
            </Button.Ripple>
          </CardBody>
        </Card>

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
export default Relatives
