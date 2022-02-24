// ** Styles
import '@styles/react/apps/app-users.scss'
// ** React Imports
import { Fragment, useState, useEffect } from 'react'


// ** Third Party Components
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight, X, Plus } from 'react-feather'

import { selectThemeColors } from '@utils'
import { Card, CardHeader, FormGroup, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button, Form } from 'reactstrap'


// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Marks = () => {
  const [formValues, setFormValues] = useState([{ relationship: "", name: "", fathername: "", job: "", academicTransfer: "", phone: "" }])
  const [currentRole, setCurrentRole] = useState()
  const [currentPlan, setCurrentPlan] = useState({ value: '', label: 'Select Plan' })
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })

      // ** User filter options
  const roleOptions = [
    { value:  1, label: 1 },
    { value: 2, label: 2},
    { value: 3, label: 3 },
    { value:  4, label: 4 },
    { value: 5, label: 5 },
    { value:  6, label: 6 }
  ]

  const planOptions = [
    { value: '', label: 'Select Plan' },
    { value: 'basic', label: 'Basic' },
    { value: 'company', label: 'Company' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'team', label: 'Team' }
  ]

  const statusOptions = [
    { value: '', label: 'Select Status', number: 0 },
    { value: 'pending', label: 'Pending', number: 1 },
    { value: 'active', label: 'Active', number: 2 },
    { value: 'inactive', label: 'Inactive', number: 3 }
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
  return (
    <div className='app-user-list'>
        <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
            <Label>Period</Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={roleOptions}
                value={roleOptions[0]}
                onChange={(e) =>  setCurrentRole(e.value)}
              />
            </Col>
            <Col className='my-md-0 my-1' md='4'>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={planOptions}
                value={currentPlan}

              />
            </Col>
            <Col md='4'>

              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={statusOptions}
                value={currentStatus}

              />
            </Col>
          </Row>
        </CardBody>
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