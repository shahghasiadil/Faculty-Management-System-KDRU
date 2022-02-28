import { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { Printer } from 'react-feather'
import { getSchedule } from './store/action'
import { Alert, Form, Button, CardBody, Card, CardHeader, CardTitle, Row, Col, Table } from 'reactstrap'
import img1 from '@src/assets/images/slider/06.jpg'

const CardActions = () => {

  const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
  const [currentYear, setCurrentYear] = useState({ value: 2022, label: 'Year 2022 ' })

  const yearOptions = [
    { value: 2020, label: 'Year 2020' },
    { value: 2021, label: 'Year 2021' },
    { value: 2022, label: 'Year 2022' },
    { value: 2023, label: 'Year 2023' }
  ]

  const semesterOptions = [
    { value: '', label: 'Select Semester' },
    { value: '1', label: 'لومړی' },
    { value: '2', label: 'دوهم' },
    { value: '3', label: 'دریم' },
    { value: '4', label: 'څلورم' },
    { value: '5', label: 'پنځم' },
    { value: '6', label: 'ښپږم' },
    { value: '7', label: 'اووم' },
    { value: '8', label: 'اتم' }
  ]
  const { schedule } = useSelector(state => state.schedule)

  const dispatch = useDispatch()

  const { handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()

    dispatch(getSchedule(currentSemester.value, currentYear.value))
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
              <Col md='5'>
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={yearOptions}
                  value={currentYear}
                  name='subject'
                  onChange={(e) => setCurrentYear(e)}
                />
              </Col>
              <Col md='5'>
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
              <Col md='1'>
                <Button color='success' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Submit</Button>
              </Col>
              <Col md='1'>
                {schedule && <Button onClick={prints} color='info' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Print <Printer size={16} /></Button>}
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>

      {schedule === null ? <Alert color='danger'> <h4 className='alert-heading'>Search by selecting the above filters </h4>
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
            <Avatar className='mr-1' img={img1} imgHeight='90' imgWidth='90' />
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
            {schedule.map((data, index) => (<>
              <tr>
                <td rowSpan={3}>{data.week_day}</td>
                <td colSpan={2}>{data.subject.name}</td>
                <td colSpan={2}>Math II  CS210</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={2}>(4 CP)</td>
                <td colSpan={2}>(4 CP)</td>
                <td></td>
              </tr>

              <tr>
                <td colSpan={2}>{data.teacher.name}</td>
                <td colSpan={2}>Samira ahmdazay</td>
                <td></td>
              </tr>
            </>
            ))}

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
