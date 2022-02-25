import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { Form, Button, CardBody, Card, CardHeader, CardTitle, CardImg, Row, Col, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import img1 from '@src/assets/images/slider/06.jpg'
import img10 from '@src/assets/images/avatars/10.png'

const CardActions = () => {

  const [currentWeek, setCurrentWeek] = useState({ value: '', label: 'Select Week' })
  const [currentMonth, setCurrentMonth] = useState({ value: '', label: 'Select Month' })
  const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
  const [currentPeriod, setCurrentPeriod] = useState({ value: '', label: 'Select Period' })
  const [currentSubject, setCurrentSubject] = useState({ value: '', label: 'Select Subject', number: 0 })

  // ** User filter options
  const weeksOptions = [
    { value: '', label: 'Select Week' },
    { value: '4', label: '4' },
    { value: '6', label: '6' }
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
    { value: '', label: 'Select Subject', number: 0 },
    { value: 'Math', label: 'Math', number: 1 },
    { value: 'Network', label: 'Network', number: 2 },
    { value: 'inactive', label: 'Inactive', number: 3 }
  ]

  const semesterOptions = [
    { value: '', label: 'Select Semester' },
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

  const { handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    // ** data of selected inputs

    // currentWeek.value
    // currentMonth.value
    // currentSemester.value
    // currentPeriod.value
    // currentSubject.value
  }


  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/students'> Students </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Attendance </span>
        </BreadcrumbItem>
      </Breadcrumb>
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
      <Card className='attendance-div'>
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
          <Table bordered className='table-student-info'>
            <tr style={{ borderTop: 0 }}>
              <td colSpan="25" >
                <h4>د ۱۴۰۰-۱۳۹۹ ل تحصیلې کال د لومړی ټولګې لومړې سمسټر د (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) مضمون د  (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) استاد (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) کریډیټه قوس د میاشتې حاضرې</h4>
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
            {/* // ** data loop area start */}
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
              <td width="5px"></td>
              <td width="5px"></td>
              <td colSpan="2" >خالد</td>
              <td colSpan="2" >محمود</td>
              <td width="88px" >23323</td>
              <td>۲</td>
            </tr>

            {/* // ** data loop area end */}

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
          </Table>
        </div>
        <Row style={{ float: 'right', marginRight: '10px' }}>
        </Row>
      </Card>

    </Fragment>
  )
}
export default CardActions
