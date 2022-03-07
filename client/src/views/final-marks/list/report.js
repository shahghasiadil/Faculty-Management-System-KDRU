import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { Printer } from 'react-feather'
import { getStudents } from '../store/action'

import { Alert, Form, Button, CardBody, Card, CardHeader, CardTitle, CardImg, Row, Col, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import cs from '@src/assets/images/slider/cs_logos.png'
import un from '@src/assets/images/slider/kdr.png'


const CardActions = () => {

  const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
  const [currentPeriod, setCurrentPeriod] = useState({ value: '', label: 'Select Period' })
  const [currentSubject, setCurrentSubject] = useState({ value: 0, label: 'Select Subject', number: 0 })
  const [subjects, setSubjects] = useState([])
  const subjectsOptions = [
    { value: 0, label: 'Select Subject', number: 0 },
    { value: 1, label: 'پروګرامینګ', number: 1 },
    { value: 2, label: 'نیټورک', number: 2 },
    { value: 3, label: 'اسلامیات', number: 3 }
  ]

  const semesterOptions = [
    { value: 1, label: 'First' },
    { value: 2, label: 'Second' },
    { value: 3, label: 'Third' },
    { value: 4, label: 'Fourth' },
    { value: 5, label: 'Fifth' },
    { value: 6, label: 'Sixth' },
    { value: 7, label: 'Seventh' },
    { value: 8, label: 'Eighth' }
]

    const loadSemesters = () => {
        axios.get('http://127.0.0.1:8000/api/semesters').then((res) => {

            for (const data of res.data.data) {
                semesters.push({ value: data.id, label: data.name })
            }
        })
    }

    const loadSubjects = () => {
        axios.get('http://127.0.0.1:8000/api/subjects').then((res) => {

            for (const data of res.data.data) {
                subjects.push({ value: data.id, label: data.name })
            }
        })
    }
    useEffect(() => {
        loadSemesters()
        loadSubjects()
    }, [])
    const periodOptions = [
        { value: '', label: 'Select Period', number: 0 },
        { value: '1', label: '1', number: 1 },
        { value: '2', label: '2', number: 2 },
        { value: '3', label: '3', number: 3 }
    ]

    const increaseCount = () => {
        setFormValues([...formValues, { relationship: "", name: "", father_name: "", job: "", academic_transfer: "", phone: "" }])
    }

    const { students } = useSelector(state => state.finalMarks)

    const dispatch = useDispatch()

    const { handleSubmit, trigger } = useForm()

    const onSubmit = () => {
        trigger()

        dispatch(getStudents(currentPeriod.value, currentSubject.value))

    }

    const print = () => {
        if (students !== null) {
            const mainLayout = document.getElementById('printTable').innerHTML
            const originalContent = document.body.innerHTML
            document.body.innerHTML = mainLayout
            window.print()
            document.body.innerHTML = originalContent
            window.close()
        }
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
                                    options={subjects}
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
                                    options={semesters}
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
                                {students && <Button onClick={print} color='info' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Print <Printer size={16} className='mr-50' /> </Button>}
                            </Col>
                        </Row>
                    </CardBody>
                </Form>
            </Card>

            {students === null ? <Alert color='danger'> <h4 className='alert-heading'>Search by selecting the above filters </h4>
                <div className='alert-body'>
                    There is no data to show in table
                </div>
            </Alert> : <Card className='attendance-div' id='printTable'>
                <Row className='attendance-top-row' >
                    <Col md='4' className='attendance-logo-1'>
                        <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
                    </Col>
                    <Col md='4' className='top-center-div'>
                        <Row></Row>
                        <Row><h4>کندهار پوهنتون</h4></Row>
                        <Row><h4>کمپیوټر ساینس تدریسې مدیریت</h4></Row>
                        <Row><h4>د ازموینې شقه</h4></Row>
                    </Col>
                    <Col md='4'>
                        <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
                    </Col>
                </Row>
                <div className='text-center'>
                    <Table bordered className='table-student-info'>
                        <tr>
                            <td colSpan="8" >
                                <h4>د ۱۴۰۰-۱۳۹۹ ل تحصیلې کال د لومړی ټولګې ({currentSemester.value}) سمسټر د ({currentSubject.label}) مضمون د  (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) استاد آزموینې شقه</h4>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan='2'>کتنې</td>
                            <td rowSpan='2'>نتیجه</td>
                            <td>مجموعه نمره</td>
                            <td>نمره</td>
                            <td> نمره</td>
                            <td colSpan='2'>پیژند</td>
                            <td rowSpan='2'>ګڼه</td>
                        </tr>
                        <tr>
                            <td>100%</td>
                            <td>80%</td>
                            <td>20%</td>
                            <td>د پلار نوم</td>
                            <td>نوم</td>
                        </tr>
                        {students.map((data, index) => (
                            <tr key={index}>
                                <td></td>
                                <td>{(Number(data.marks) + Number(data.student.midterm_marks[0].marks)) >= 55 ? 'کریدیت' : 'عدم کریدیت'} </td>
                                <td>  {Number(data.marks) + Number(data.student.midterm_marks[0].marks)} </td>
                                <td>{data.marks}</td>
                                <td>{data.student.midterm_marks[0].marks}</td>
                                <td>{data.student.father_name}</td>
                                <td>{data.student.name}</td>
                                <td>{index + 1}</td>
                            </tr>

                        ))}

                    </Table>
                </div>
                <Row style={{ float: 'right', marginRight: '10px' }}>
                </Row>
            </Card>}

        </Fragment>
    )
}
export default CardActions
