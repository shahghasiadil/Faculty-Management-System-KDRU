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

  const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
  ]

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Personal Info</h5>
        <small>Enter Your Personal Info.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='6'>
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
          <FormGroup tag={Col} md='6'>
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
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`country-${type}`}>
              Country
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`country-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={countryOptions}
              defaultValue={countryOptions[0]}
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`language-${type}`}>
              Language
            </Label>
            <Select
              isMulti
              isClearable={false}
              theme={selectThemeColors}
              id={`language-${type}`}
              options={languageOptions}
              className='react-select'
              classNamePrefix='select'
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
