import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { Alert, Form, Button, CardBody, Card, CardHeader, CardTitle, CardImg, Row, Col, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import img1 from '@src/assets/images/slider/06.jpg'
import img10 from '@src/assets/images/avatars/10.png'

const CardActions = () => {

  const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
  const [currentPeriod, setCurrentPeriod] = useState({ value: '', label: 'Select Period' })
  const [currentSubject, setCurrentSubject] = useState({ value: 0, label: 'Select Subject', number: 0 })

  const subjectsOptions = [
    { value: 0, label: 'Select Subject', number: 0 },
    { value: 1, label: 'پروګرامینګ', number: 1 },
    { value: 2, label: 'نیټورک', number: 2 },
    { value: 3, label: 'اسلامیات', number: 3 }
  ]

  const semesterOptions = [
    { value: '', label: 'Select Semester' },
    { value: 'لومړی', label: 'لومړی' },
    { value: 'دوهم', label: 'دوهم' },
    { value: 'دریم', label: 'دریم' },
    { value: 'څلورم', label: 'څلورم' },
    { value: 'پنځم', label: 'پنځم' },
    { value: 'شپږم', label: 'ښپږم' },
    { value: 'اووم', label: 'اووم' },
    { value: 'اتم', label: 'اتم' }
  ]

  const periodOptions = [
    { value: '', label: 'Select Period', number: 0 },
    { value: '1', label: '1', number: 1 },
    { value: '2', label: '2', number: 2 },
    { value: '3', label: '3', number: 3 }
  ]

  const increaseCount = () => {
    setFormValues([...formValues, { relationship: "", name: "", father_name: "", job: "", academic_transfer: "", phone: "" }])
  }

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
  const { students } = useSelector(state => state.finalMarks)

  const dispatch = useDispatch()

  const { handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()

    //dispatch(getStudents(currentPeriod.value, currentSubject.value))
  }

  const prints = () => {

    const mainLayout = document.getElementById('printBill').innerHTML
    const originalContent = document.body.innerHTML
    document.body.innerHTML = mainLayout
    window.print()
    document.body.innerHTML = originalContent
    window.close()
  }

  return (
    <Fragment>

      <Card >
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <CardBody>
            <Row>
              {/* <Col md='2'>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  options={weeksOptions}
                  value={currentWeek}
                  name='week'
                  onChange={(e) => setCurrentWeek(e)}
                />
              </Col> */}
              {/* <Col md='2'>
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={monthsOptions}
                  value={currentMonth}
                  name='month'
                  onChange={(e) => setCurrentMonth(e)}
                />
              </Col> */}
              <Col md='4'>
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
                  options={periodOptions}
                  value={currentPeriod}
                  name='period'
                  onChange={(e) => setCurrentPeriod(e)}
                />
              </Col>
              <Col md='1'>
                <Button color='success' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Submit</Button>
              </Col>
              <Col md='1'>
                <Button onClick={prints} color='info' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Print</Button>
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>

      {students === 'k' ? <Alert color='danger'> <h4 className='alert-heading'>Search by selecting the above filters </h4>
        <div className='alert-body'>
          There is no data to show in table
        </div>
      </Alert> : <Card className='attendance-div' id='printBill'>
        <Row className='attendance-top-row' >
          <Col md='3' className='attendance-logo-1'>
            <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
          </Col>
          <Col md='6' className='top-center-div'>
            <Row><h4>Faculty of Computer Science 1st year, 2nd semester Scheduale, Year 1400</h4></Row>
          </Col>
          <Col md='3'>
            <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
          </Col>
        </Row>
        <div className='text-center'>
          <Table bordered className='table-student-info'>

            <tr>
              <td rowSpan={2}>Day /Hour</td>
              <td>1st</td>
              <td>2nd</td>
              <td>3rd</td>
              <td>4th</td>
              <td>Remarks</td>
            </tr>
            <tr>
              <td>1:30 - 2:20</td>
              <td>2:30- 3:10</td>
              <td>3:10 - 4:10</td>
              <td>4:10 - 5:00</td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan={3}>Saturday</td>
              <td colSpan={2}>Progmraming II CS211</td>
              <td colSpan={2}>Math II  CS210</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>(4 CP)</td>
              <td colSpan={2}>(4 CP)</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>Saye Shagha khan</td>
              <td colSpan={2}>Samira ahmdazay</td>
              <td></td>
            </tr>

            <tr>
              <td rowSpan={3}>Sunday</td>
              <td colSpan={2}>Progmraming II CS211</td>
              <td colSpan={2}>Math II  CS210</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>(4 CP)</td>
              <td colSpan={2}>(4 CP)</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>Saye Shagha khan</td>
              <td colSpan={2}>Samira ahmdazay</td>
              <td></td>
            </tr>

            <tr>
              <td rowSpan={3}>Monday</td>
              <td colSpan={2}>Progmraming II CS211</td>
              <td colSpan={2}>Math II  CS210</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>(4 CP)</td>
              <td colSpan={2}>(4 CP)</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>Saye Shagha khan</td>
              <td colSpan={2}>Samira ahmdazay</td>
              <td></td>
            </tr>

            <tr>
              <td rowSpan={3}>Tuesday</td>
              <td colSpan={2}>Progmraming II CS211</td>
              <td colSpan={2}>Math II  CS210</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>(4 CP)</td>
              <td colSpan={2}>(4 CP)</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2}>Saye Shagha khan</td>
              <td colSpan={2}>Samira ahmdazay</td>
              <td></td>
            </tr>
          </Table>
          <Row style={{ justifyContent: 'space-between', marginBottom: '30px' }} >
            <Col md='4' style={{ padding: '40px' }}>
              <h4>Dean of Faculty</h4>
            </Col>
            <Col md='4' >
            </Col>
            <Col md='4' style={{ padding: '40px' }}>
              <h4> Teaching Admin officer</h4>
            </Col>
          </Row>
        </div>
      </Card>}
    </Fragment>
  )
}
export default CardActions
