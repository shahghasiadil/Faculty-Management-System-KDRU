import * as yup from 'yup'
import { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors, isObjEmpty } from '@utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Label, FormGroup, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {

  const [language, setLanguage] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  const [studentData, setStudentData] = useState(null)

  const StudentSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required field').min(3, 'First Name must be at least 3 characters'),
    lastName: yup.string().required("Last Name is required field").min(3, 'Last Name must be at least 3 characters'),
    fatherName: yup.string().required("Father Name is required field").min(3, 'Father Name must be at least 3 characters'),
    gFatherName: yup.string().required("Grand Father Name is required field").min(3, 'Grand Father Name must be at least 3 characters'),
    phone: yup.string().required("Phone Number is required field"),
    birthDate: yup.string().required("Birth Date is required field"),
    //gender: yup.string().required("Gender is required field").oneOf(genderOptions),
    //language: yup.string().required("Native Language is required field"),
    //maritalstate: yup.string().required("Marital State is required field"),
    roleNo: yup.string().required("Role Number is required field").max(2, "Role number must be 2 digits"),
    period: yup.string().required("Period is required field"),
    graduationYear: yup.string().required("Graduation year is required field").max(4)
  })
  // ** React hook form
  const { register, errors, handleSubmit, watch, trigger } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })
  const { studentInfo, selectedStudent } = useSelector(state => state.students)
  const { personal } = studentInfo
  useEffect(() => {
    if (selectedStudent !== null || (selectedStudent !== null && studentData !== null && selectedStudent.id !== StudentData.id)) {
      setStudentData(selectedStudent)
      setLanguage(selectedStudent.native_tongue)
    }
  }, [selectedStudent])

  const onSubmit = (value) => {
    trigger()
    if (isObjEmpty(errors)) {

      personal.name = value.firstName
      personal.last_name = value.lastName
      personal.father_name = value.fatherName
      personal.grand_father_name = value.gFatherName
      personal.phone = value.phone
      personal.birth_year = value.birthDate
      personal.gender = gender
      personal.native_tongue = language
      personal.marital_status = status
      personal.roll_no = value.roleNo
      personal.period = value.period
      personal.graduation_year = value.graduationYear

      stepper.next()
    }
  }
  const [genderIndex, setGenderIndex] = useState(0)
  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ]

    // const d =  genderOptions.findIndex(el => el.value === selectedStudent.gender)
    // setGenderIndex(d)
    console.log(selectedStudent)


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
          <FormGroup tag={Col} md='3'>
            <Label for='firstName'>
              First Name <span className='text-danger'>*</span>
            </Label>
            <Input
              name='firstName'
              id='firstName'
              defaultValue={studentData && studentData.name}
              autoComplete="off"
              placeholder='John'
              innerRef={register({ required: true })}
              invalid={errors.firstName && true}
              className={watch('firstName') ? classnames({ 'is-valid': !errors.firstName }) : ''}
            />
            {errors && errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='lastName'>
              Last Name <span className='text-danger'>*</span>
            </Label>
            <Input
              name='lastName'
              id='lastName'
              defaultValue={studentData && studentData.last_name}
              autoComplete="off"
              placeholder='John'
              innerRef={register({ required: true })}
              invalid={errors.lastName && true}
              className={watch('lastName') ? classnames({ 'is-valid': !errors.lastName }) : ''}
            />
            {errors && errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='fatherName'>
              Father Name <span className='text-danger'>*</span>
            </Label>
            <Input
              name='fatherName'
              id='fatherName'
              defaultValue={studentData && studentData.father_name}
              autoComplete="off"
              placeholder='John'
              innerRef={register({ required: true })}
              invalid={errors.fatherName && true}
              className={watch('fatherName') ? classnames({ 'is-valid': !errors.fatherName }) : ''}
            />
            {errors && errors.fatherName && <FormFeedback>{errors.fatherName.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='gFatherName'>
              Grand Father Name <span className='text-danger'>*</span>
            </Label>
            <Input
              name='gFatherName'
              id='gFatherName'
              defaultValue={studentData && studentData.grand_father_name}
              autoComplete="off"
              placeholder='John'
              innerRef={register({ required: true })}
              invalid={errors.gFatherName && true}
              className={watch('gFatherName') ? classnames({ 'is-valid': !errors.gFatherName }) : ''}
            />
            {errors && errors.gFatherName && <FormFeedback>{errors.gFatherName.message}</FormFeedback>}
          </FormGroup>

        </Row>

        <Row>

          <FormGroup tag={Col} md='3'>
            <Label for='phone'>
              Phone No <span className='text-danger'>*</span>
            </Label>
            <Input
              name='phone'
              id='phone'
              defaultValue={studentData && studentData.phone}
              type='number'
              autoComplete="off"
              placeholder='1234567890'
              innerRef={register({ required: true })}
              invalid={errors.phone && true}
              className={watch('phone') ? classnames({ 'is-valid': !errors.phone }) : ''}
            />
            {errors && errors.phone && <FormFeedback>{errors.phone.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='maritalState'>
              Marital State <span className='text-danger'>*</span>
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id='maritalState'
              name='maritalState'
              defaultValue={studentData && studentData.marital_status}
              classNamePrefix='select'
              options={maritalStateOptions}
              innerRef={register({ required: true })}
              invalid={errors.maritalState && true}
              onChange={(e) => setStatus(e.value)}
              className={watch('maritalState') ? classnames({ 'is-valid': !errors.maritalState }) : ''}
            />
            {errors && errors.maritalState && <FormFeedback>{errors.maritalState.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='gender'>
              Gender <span className='text-danger'>*</span>
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id='gender'
              name='gender'
              defaultValue={selectedStudent.gender}
              classNamePrefix='select'
              options={genderOptions}
              innerRef={register({ required: true })}
              invalid={errors.gender && true}
              onChange={(e) => setGender(e.value)}
              className={watch('gender') ? classnames({ 'is-valid': !errors.gender }) : ''}
            />
            {errors && errors.gender && <FormFeedback>{errors.gender.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='language'>
              Native Language <span className='text-danger'>*</span>
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id='language'
              name='language'
              // defaultValue={languageOptions[0]}
              classNamePrefix='select'
              options={languageOptions}
              innerRef={register({ required: true })}
              invalid={errors.language && true}
              onChange={(e) => setLanguage(e.value)}
              className={watch('language') ? classnames({ 'is-valid': !errors.language }) : ''}
            />
            {errors && errors.language && <FormFeedback>{errors.language.message}</FormFeedback>}
          </FormGroup>

        </Row>

        <Row>

          <FormGroup tag={Col} md='3'>
            <Label for='birthDate'>
              Birth Date <span className='text-danger'>*</span>
            </Label>
            <Input
              name='birthDate'
              id='birthDate'
              type='text'
              defaultValue={studentData && studentData.birth_year}
              autoComplete="off"
              placeholder='123'
              innerRef={register({ required: true })}
              invalid={errors.birthDate && true}
              className={watch('birthDate') ? classnames({ 'is-valid': !errors.birthDate }) : ''}
            />
            {errors && errors.birthDate && <FormFeedback>{errors.birthDate.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='roleNo'>
              Role No <span className='text-danger'>*</span>
            </Label>
            <Input
              name='roleNo'
              id='roleNo'
              type='number'
              defaultValue={studentData && studentData.roll_no}
              autoComplete="off"
              placeholder='1'
              innerRef={register({ required: true })}
              invalid={errors.roleNo && true}
              className={watch('roleNo') ? classnames({ 'is-valid': !errors.roleNo }) : ''}
            />
            {errors && errors.roleNo && <FormFeedback>{errors.roleNo.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='period'>
              Period  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='period'
              id='period'
              type='number'
              defaultValue={studentData && studentData.period}
              autoComplete="off"
              placeholder='1'
              innerRef={register({ required: true })}
              invalid={errors.period && true}
              className={watch('period') ? classnames({ 'is-valid': !errors.period }) : ''}
            />
            {errors && errors.period && <FormFeedback>{errors.period.message}</FormFeedback>}
          </FormGroup>

          <FormGroup tag={Col} md='3'>
            <Label for='graduationYear'>
              Graduation Year  <span className='text-danger'>*</span>
            </Label>
            <Input
              name='graduationYear'
              id='graduationYear'
              defaultValue={studentData && studentData.graduation_year}
              autoComplete="off"
              placeholder='1398'
              innerRef={register({ required: true })}
              invalid={errors.graduationYear && true}
              className={watch('graduationYear') ? classnames({ 'is-valid': !errors.graduationYear }) : ''}
            />
            {errors && errors.graduationYear && <FormFeedback>{errors.graduationYear.message}</FormFeedback>}
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
