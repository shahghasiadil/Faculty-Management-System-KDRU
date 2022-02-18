import * as yup from 'yup'
import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowLeft, ArrowRight, X, Plus } from 'react-feather'

import Repeater from '@components/repeater'
import { SlideDown } from 'react-slidedown'

import { Label, Card, CardBody, FormGroup, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const Relatives = ({ stepper, type }) => {

  const StudentSchema = yup.object().shape({
    relationship: yup.string().required('Relationship is required field').min(4, 'Relationship must be at least 3 characters'),
    name: yup.string().required("Name is required field").min(3, 'Name must be at least 3 characters'),
    fatherName: yup.string().required("Father Name is required field").min(3, 'Father Name must be at least 3 characters'),
    job: yup.string().required("Job is required field").min(3, 'Job must be at least 3 characters'),
    academicTransfer: yup.string().required("Academic transfer is required field").min(4, 'Academic transfer must be at least 3 characters'),
    phone: yup.string().required("Phone Number is required field")
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch, trigger } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })

  const { studentInfo } = useSelector(state => state.students)
  const { relative } = studentInfo

  const onSubmit = (value) => {
    trigger()
    if (isObjEmpty(errors)) {
      relative.relationship = value.relationship
      relative.name = value.name
      relative.fathername = value.fatherName
      relative.job = value.job
      relative.academictransfer = value.academicTransfer
      relative.phone = value.phone

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
                              <Label for='relationship'>
                                Relationship  <span className='text-danger'>*</span>
                              </Label>
                              <Input
                                name='relationship'
                                id='relationship'
                                autoComplete="off"
                                placeholder='Uncle'
                                innerRef={register({ required: true })}
                                invalid={errors.relationship && true}
                                className={watch('relationship') ? classnames({ 'is-valid': !errors.relationship }) : ''}
                              />
                              {errors && errors.relationship && <FormFeedback>{errors.relationship.message}</FormFeedback>}
                            </FormGroup>

                            <FormGroup tag={Col} md='4'>
                              <Label for='name'>
                                Name  <span className='text-danger'>*</span>
                              </Label>
                              <Input
                                name='name'
                                id='name'
                                autoComplete="off"
                                placeholder='john'
                                innerRef={register({ required: true })}
                                invalid={errors.name && true}
                                className={watch('name') ? classnames({ 'is-valid': !errors.name }) : ''}
                              />
                              {errors && errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
                            </FormGroup>


                            <FormGroup tag={Col} md='4'>
                              <Label for='fatherName'>
                                Father Name  <span className='text-danger'>*</span>
                              </Label>
                              <Input
                                name='fatherName'
                                id='fatherName'
                                autoComplete="off"
                                placeholder='Doe'
                                innerRef={register({ required: true })}
                                invalid={errors.fatherName && true}
                                className={watch('fatherName') ? classnames({ 'is-valid': !errors.fatherName }) : ''}
                              />
                              {errors && errors.fatherName && <FormFeedback>{errors.fatherName.message}</FormFeedback>}
                            </FormGroup>
                          </Row>

                          <Row>
                            <FormGroup tag={Col} md='4'>
                              <Label for='job'>
                                Job  <span className='text-danger'>*</span>
                              </Label>
                              <Input
                                name='job'
                                id='job'
                                autoComplete="off"
                                placeholder='Web developer'
                                innerRef={register({ required: true })}
                                invalid={errors.job && true}
                                className={watch('job') ? classnames({ 'is-valid': !errors.job }) : ''}
                              />
                              {errors && errors.job && <FormFeedback>{errors.job.message}</FormFeedback>}
                            </FormGroup>

                            <FormGroup tag={Col} md='4'>
                              <Label for='academicTransfer'>
                                Academic Transfer  <span className='text-danger'>*</span>
                              </Label>
                              <Input
                                name='academicTransfer'
                                id='academicTransfer'
                                autoComplete="off"
                                placeholder='Academic Transfer'
                                innerRef={register({ required: true })}
                                invalid={errors.academicTransfer && true}
                                className={watch('academicTransfer') ? classnames({ 'is-valid': !errors.academicTransfer }) : ''}
                              />
                              {errors && errors.academicTransfer && <FormFeedback>{errors.academicTransfer.message}</FormFeedback>}
                            </FormGroup>

                            <FormGroup tag={Col} md='4'>
                              <Label for='phone'>
                                Phone Number  <span className='text-danger'>*</span>
                              </Label>
                              <Input
                                name='phone'
                                id='phone'
                                autoComplete="off"
                                placeholder='1234567890'
                                innerRef={register({ required: true })}
                                invalid={errors.phone && true}
                                className={watch('phone') ? classnames({ 'is-valid': !errors.phone }) : ''}
                              />
                              {errors && errors.phone && <FormFeedback>{errors.phone.message}</FormFeedback>}
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
