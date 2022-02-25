import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { getStudents } from '../store/action/'
import Spinner from '@components/spinner/Loading-spinner'
import { Alert, Form, Button, CardBody, Card, CardHeader, CardTitle, CardImg, Row, Col, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import img1 from '@src/assets/images/slider/06.jpg'
import img10 from '@src/assets/images/avatars/10.png'

const CardActions = () => {

  const [currentWeek, setCurrentWeek] = useState({ value: '4', label: '4 weeks' })
  const [currentMonth, setCurrentMonth] = useState({ value: '', label: 'Select Month' })
  const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
  const [currentPeriod, setCurrentPeriod] = useState({ value: '', label: 'Select Period' })
  const [currentSubject, setCurrentSubject] = useState({ value: 0, label: 'Select Subject', number: 0 })

  // ** User filter options
  const weeksOptions = [
    { value: '4', label: '4 weeks' },
    { value: '6', label: '6 weeks' }
  ]

  const monthsOptions = [
    { value: '', label: 'Select Month' },
    { value: 'حمل', label: 'حمل' },
    { value: 'ثور', label: 'ثور' },
    { value: 'جوزا', label: 'جوزا' },
    { value: 'سرطان', label: 'سرطان' },
    { value: 'اسد', label: 'اسد' },
    { value: 'سنبله', label: 'سنبله' },
    { value: 'میزان', label: 'میزان' },
    { value: 'عقرب', label: 'عقرب' },
    { value: 'قوس', label: 'قوس' },
    { value: 'جدی', label: 'جدی' },
    { value: 'دلو', label: 'دلو' },
    { value: 'حوت', label: 'حوت' }
  ]

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
  const { students } = useSelector(state => state.attendance)

  const dispatch = useDispatch()

  const { handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()

    dispatch(getStudents(currentPeriod.value, currentSubject.value))

  }

  return (
    <Fragment>

      <Card style={{ margin: 'auto' }}>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <CardBody>
            <Row>
              <Col md='2'>
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
              </Col>
              <Col md='2'>
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
                  options={semesterOptions}
                  value={currentSemester}
                  name='semester'
                  onChange={(e) => setCurrentSemester(e)}
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
      {students === null ? <Alert color='danger'>
        <h4 className='alert-heading'>Search by selecting the above filters </h4>
        <div className='alert-body'>
          There is no data to show in table
        </div>
      </Alert> : <Card className='attendance-div'>
        <Row className='attendance-top-row' >
          <Col md='4' className='attendance-logo-1'>
            <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
          </Col>
          <Col md='4' className='top-center-div'>
            <Row></Row>
            <Row><h4>کندهار پوهنتون</h4></Row>
            <Row><h4>کمپیوټر ساینس پوهنځی</h4></Row>
            <Row><h4>د تدریسې چارو عمومې مدیریت</h4></Row>
          </Col>
          <Col md='4'>
            <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
          </Col>
        </Row>
        <div className='text-center'>
          {currentWeek.value === '4' ? <Table bordered className='table-student-info'>
            <tr style={{ borderTop: 0 }}>
              <td colSpan="25" >
                <h4>د ۱۴۰۰-۱۳۹۹ ل تحصیلې کال د لومړی ټولګې ({currentSemester.value}) سمسټر د ({currentSubject.label}) مضمون د  (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) استاد (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) کریډیټه ({currentMonth.value}) د میاشتې حاضرې</h4>
              </td>
            </tr>
            <tr style={{ textAlign: 'center' }}>
              <th rowSpan="3">کتنی</th>
              <th colSpan="2">حاضری</th>
              <th colSpan="16" className="test">3</th>
              <th colSpan="4">شهرت</th>
              <th rowSpan="3" className='col-code-number' style={{ padding: '0' }}>کود نمبر</th>
              <th rowSpan="3" className='col-gana' style={{ width: '10px' }}>گنه</th>
            </tr>
            <tr>
              <th rowSpan="2" className='col-absent' style={{ padding: '0' }}> غیرحاضر</th>
              <th rowSpan="2" className='col-present' style={{ padding: '0' }}>حاضر</th>
              <th colSpan="4">4</th>
              <th colSpan="4">3</th>
              <th colSpan="4">2</th>
              <th colSpan="4">1</th>
              <th rowSpan="2" colSpan="2" className='std-father-name'>د پلار نوم</th>
              <th rowSpan="2" colSpan="2">نوم</th>
            </tr>
            <tr>
              <th colSpan="2" width="50px"></th>
              <th colSpan="2" height="50"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
            </tr>
            {students.map((data, index) => (
              <tr key={index}>
                <td height="25px"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td width="5px"></td>
                <td width="5px"></td>
                <td colSpan="2" >{data.name}</td>
                <td colSpan="2" >{data.father_name}</td>
                <td width="88px" >{data.roll_no}</td>
                <td>{index + 1}</td>
              </tr>
            ))}
            <tr style={{ borderTop: 0 }}>
              <td height="25px"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan="6" >د استاد لاسلیک</td>
            </tr>
            <tr style={{ borderTop: 0 }}>
              <td colSpan="25" ><h4>د محترم استاد څخه هیله کوو چې حاضرې په جدې ډول روزمره کنټرول کړې ، امضا او تر ډکیدو وروسته یې پر ټاکلې وخت ادارې ته تسلیم کړې</h4>
              </td>
            </tr>
          </Table> : <Table bordered className='table-student-info'>
            <tr style={{ borderTop: 0 }}>
              <td colSpan="34" >
                <h4>د ۱۴۰۰-۱۳۹۹ ل تحصیلې کال د لومړی ټولګې ({currentSemester.value}) سمسټر د ({currentSubject.label}) مضمون د  (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) استاد (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) کریډیټه ({currentMonth.value}) د میاشتې حاضرې</h4>
              </td>
            </tr>
            <tr style={{ textAlign: 'center' }}>
              <th rowSpan="3">کتنی</th>
              <th colSpan="2">حاضری</th>
              <th colSpan="24" className="test">3</th>
              <th colSpan="4">شهرت</th>
              <th rowSpan="3" className='col-code-number' style={{ padding: '0' }}>کود نمبر</th>
              <th rowSpan="3" className='col-gana' style={{ width: '10px' }}>گنه</th>
            </tr>
            <tr>
              <th rowSpan="2" className='col-absent' style={{ padding: '0' }}> غیرحاضر</th>
              <th rowSpan="2" className='col-present' style={{ padding: '0' }}>حاضر</th>
              <th colSpan="4">6</th>
              <th colSpan="4">5</th>
              <th colSpan="4">4</th>
              <th colSpan="4">3</th>
              <th colSpan="4">2</th>
              <th colSpan="4">1</th>
              <th rowSpan="2" colSpan="2" className='std-father-name'>د پلار نوم</th>
              <th rowSpan="2" colSpan="2">نوم</th>
            </tr>
            <tr>
              <th colSpan="2" width="50px"></th>
              <th colSpan="2" height="50"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
            </tr>
            {students.map((data, index) => (
              <tr >
                <td height="25px"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td width="5px"></td>
                <td width="5px"></td>
                <td colSpan="2" >{data.name}</td>
                <td colSpan="2" >{data.father_name}</td>
                <td width="88px" >{data.roll_no}</td>
                <td>{index + 1}</td>
              </tr>
            ))}

            <tr style={{ borderTop: 0 }}>
              <td height="25px"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan="6" >د استاد لاسلیک</td>
            </tr>
            <tr style={{ borderTop: 0 }}>
              <td colSpan="34" ><h4>د محترم استاد څخه هیله کوو چې حاضرې په جدې ډول روزمره کنټرول کړې ، امضا او تر ډکیدو وروسته یې پر ټاکلې وخت ادارې ته تسلیم کړې</h4>
              </td>
            </tr></Table>}
        </div>
        <Row style={{ float: 'right', marginRight: '10px' }}>
        </Row>
      </Card>}

    </Fragment>
  )
}
export default CardActions
