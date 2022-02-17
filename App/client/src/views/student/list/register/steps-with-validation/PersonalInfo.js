import { Fragment } from 'react'
import Select from 'react-select'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors, isObjEmpty } from '@utils'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  const { register, errors, handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  const genderOptions = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' }
  ]
  const languageOptions = [
    { value: 'Pashto', label: 'Pashto' },
    { value: 'Dari', label: 'Dari' },
    { value: 'English', label: 'English' }
  ]

   const maritalStateOptions = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Divorced', label: 'Divorced' }
  ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Personal Info</h5>
        <small>Enter Student's Personal Info.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`first-name-${type}`}>
              First Name
            </Label>
            <Input
              type='text'
              name={`first-name-${type}`}
              id={`first-name-${type}`}
              placeholder='John'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`first-name-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`last-name-${type}`}>
              Last Name
            </Label>
            <Input
              type='text'
              name={`last-name-${type}`}
              id={`last-name-${type}`}
              placeholder='Doe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`last-name-${type}`] })}
            />
          </FormGroup>
            <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`father-name-${type}`}>
              Father Name
            </Label>
            <Input
              type='text'
              name={`father-name-${type}`}
              id={`father-name-${type}`}
              placeholder='Doe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`father-name-${type}`] })}
            />
          </FormGroup>
            <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`grand-father-name-${type}`}>
              Grand Father Name
            </Label>
            <Input
              type='text'
              name={`grand-father-name-${type}`}
              id={`grand-father-name-${type}`}
              placeholder='Doe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`grand-father-name-${type}`] })}
            />
          </FormGroup>
           <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`phone-${type}`}>
              Phone Number
            </Label>
            <Input
              type='number'
              name={`phone-${type}`}
              id={`phone-${type}`}
              placeholder='1234567890'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`phone-${type}`] })}
            />
          </FormGroup>
          <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`birth-date-${type}`}>
              Birth Date
            </Label>
            <Input
              type='date'
              name={`birth-date-${type}`}
              id={`birth-date-${type}`}
              placeholder='Doe'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`birth-date-${type}`] })}
            />
          </FormGroup>
          
        </Row>
        <Row>
             <FormGroup tag={Col} md='2'>
         <Label className='form-label' for={`gender-${type}`}>
              Gender
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`gender-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={genderOptions}
              defaultValue={genderOptions[0]}
            />
          </FormGroup>
          <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`language-${type}`}>
             Native Language
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`language-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={languageOptions}
              defaultValue={languageOptions[0]}
            />
          </FormGroup>
          <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`marital-state-${type}`}>
              Marital State
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`marital-state-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={maritalStateOptions}
              defaultValue={maritalStateOptions[0]}
            />
          </FormGroup>
          <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`role-no-${type}`}>
              Role No 
            </Label>
            <Input
              type='number'
              name={`role-no-${type}`}
              id={`role-no-${type}`}
              placeholder='12'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`role-no-${type}`] })}
            />
          </FormGroup>
           <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`period-${type}`}>
              Period 
            </Label>
            <Input
              type='number'
              name={`period-${type}`}
              id={`period-${type}`}
              placeholder='43'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`period-${type}`] })}
            />
          </FormGroup>
           <FormGroup tag={Col} md='2'>
            <Label className='form-label' for={`graduation-date-${type}`}>
              Graduation Year 
            </Label>
            <Input
              type='number'
              name={`graduation-date-${type}`}
              id={`graduation-date-${type}`}
              placeholder='1401'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors[`graduation-date-${type}`] })}
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

export default PersonalInfo
