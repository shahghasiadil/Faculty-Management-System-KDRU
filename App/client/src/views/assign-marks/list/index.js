// ** Styles
import '@styles/react/apps/app-users.scss'
// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
// ** Third Party Components
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight, X, Plus } from 'react-feather'

import { selectThemeColors } from '@utils'
import { Card, CardHeader, FormGroup, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button, Form } from 'reactstrap'


// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Marks = () => {
  const [formValues, setFormValues] = useState([])

  const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
  const [currentPeriod, setCurrentPeriod] = useState({ value: '', label: 'Select Period' })
  const [currentSubject, setCurrentSubject] = useState({ value: '', label: 'Select Subject', number: 0 })


  const subjectsOptions = [
    { value: 'Math', label: 'Math', number: 1 },
    { value: 'Network', label: 'Network', number: 2 },
    { value: 'inactive', label: 'Inactive', number: 3 }
  ]

  const semesterOptions = [
    { value: 'First', label: 'First' },
    { value: 'Second', label: 'Second' },
    { value: 'Third', label: 'Third' },
    { value: 'Fourth', label: 'Fourth' },
    { value: 'Fifth', label: 'Fifth' },
    { value: 'Sixth', label: 'Sixth' },
    { value: 'Seventh', label: 'Seventh' },
    { value: 'Eighth', label: 'Eighth' }
  ]


  const periodOptions = [
    { value: '1', label: '1', number: 1 },
    { value: '2', label: '2', number: 2 },
    { value: '3', label: '3', number: 3 }
  ]

  const handleChange = (i, e) => {
    const newFormValues = [...formValues]
    newFormValues[i][e.target.name] = e.target.value
    setFormValues(newFormValues)
  }
  const deleteForm = i => {
    const newFormValues = [...formValues]
    newFormValues.splice(i, 1)
    setFormValues(newFormValues)
  }

  const { handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    // ** data of selected inputs
  }

  return (
    <div className='app-user-list'>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <CardBody>
            <Row>
            <Col md='3'>
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={semesterOptions}
                  value={currentSemester}
                  name='semester'
                  onChange={(e) => setCurrentSemester(e)}
                />
              </Col>
              <Col md='3'>
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={subjectsOptions}
                  value={currentSubject}
                  name='subject'
                  onChange={(e) => setCurrentSubject(e)}
                />
              </Col>

              <Col md='2'>
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={periodOptions}
                  value={currentPeriod}
                  name='period'
                  onChange={(e) => setCurrentPeriod(e)}
                />
              </Col>
              <Col md='1'>
                <Button color='success' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Submit</Button>
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>
      <Form>

        <Card>
          <CardBody>
            {formValues.map((element, index) => (


              <Row className='justify-content-between align-items-center'>
                <Col md='12'>

                  <Row>

                    <FormGroup tag={Col} md='2'>
                      <Label for='relationship'>
                        Name  <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        onChange={e => handleChange(index, e)}
                        name='name'
                        id={`name-${index}`}
                        autoComplete="off"
                        placeholder='Name'
                        defaultValue={element.name || ''}
                      />
                    </FormGroup>

                    <FormGroup tag={Col} md='2'>
                      <Label for='name'>
                        Father Name  <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='father_name'
                        id={`father_name-${index}`}
                        defaultValue={element.father_name || ""}
                        autoComplete="off"
                        placeholder='Father Name'
                        onChange={e => handleChange(index, e)}

                      />

                    </FormGroup>
                    <FormGroup tag={Col} md='2'>
                      <Label for='fathername'>
                        Roll Number  <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='roll_no'
                        id={`roll_no-${index}`}
                        defaultValue={element.roll_no || ''}
                        autoComplete="off"
                        onChange={e => handleChange(index, e)}
                        placeholder='Roll Number'
                      />

                    </FormGroup>

                    <FormGroup tag={Col} md='2'>
                      <Label for='job'>
                        Mid Marks  <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='mid-marks'
                        onChange={e => handleChange(index, e)}
                        id={`mid-marks-${index}`}
                        defaultValue={element.job}
                        autoComplete="off"
                        placeholder='Middle Marks'

                      />
                    </FormGroup>
                    <FormGroup tag={Col} md='2'>
                      <Label for='final-marks'>
                        Final Marks  <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='final-marks'
                        onChange={e => handleChange(index, e)}
                        id={`final-marks-${index}`}
                        defaultValue={element.marks}
                        autoComplete="off"
                        placeholder='Final Marks'
                      />
                    </FormGroup>
                    <FormGroup tag={Col} md='2'>
                      <Label for='final-marks'>
                        Total <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='final-marks'
                        onChange={e => handleChange(index, e)}
                        id={`final-marks-${index}`}
                        defaultValue={''}
                        autoComplete="off"
                        placeholder='Final Marks'
                      />
                    </FormGroup>
                    <FormGroup tag={Col} md='2' >
                      <Button.Ripple color='success' className='text-nowrap px-1 d-flex justify-content-center align-items-center' onClick={() => deleteForm(index)} outline>
                        <Plus size={14} className='mr-50' />
                        <span>Save</span>
                      </Button.Ripple>
                    </FormGroup>
                  </Row>


                </Col>
              </Row>
            ))}

          </CardBody>
        </Card>


      </Form>
    </div>
  )
}

export default Marks