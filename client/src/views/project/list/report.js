import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { getAllData } from '../store/action'
import { Printer } from 'react-feather'
import { Alert, Form, Button, CardBody, Card, CardHeader, CardTitle, CardImg, Row, Col, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import img1 from '@src/assets/images/slider/06.jpg'
import img10 from '@src/assets/images/avatars/10.png'

const CardActions = () => {

    let counter = 1
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

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllData())
    }, [])

    const { allData } = useSelector(state => state.projects)

    console.log(allData)

    const print = () => {
        const mainLayout = document.getElementById('printTable').innerHTML
        const originalContent = document.body.innerHTML
        document.body.innerHTML = mainLayout
        window.print()
        document.body.innerHTML = originalContent
        window.close()
    }

    return (
        <Fragment>

            <Card style={{ margin: 'auto' }}>
                {/* <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        onSubmit={handleSubmit(onSubmit)}
        */}

                <Form  >
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
              <Col md='2'>
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
              </Col> */}

                            <Col md='1'>
                                <Button onClick={print} color='info' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Print <Printer size={16} className='mr-50' /> </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Form>
            </Card>
            {allData === "ddd" ? <Alert color='danger'>
                <h4 className='alert-heading'>Search by selecting the above filters </h4>
                <div className='alert-body'>
                    There is no data to show in table
                </div>
            </Alert> : <Card className='attendance-div' id='printTable' >
                <Row className='attendance-top-row' >
                    <Col md='3' className='attendance-logo-1'>
                        <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
                    </Col>
                    <Col md='6' className='top-center-div'>
                        <Row></Row>
                        <Row><h4>کندهار پوهنتون</h4></Row>
                        <Row><h4>کمپیوټر ساینس پوهنځی</h4></Row>
                        <Row><h4>د اجرائیه چارو عمومې مدیریت</h4></Row>
                        <Row><h4>د څلورمې دورې د فارغه کیدونکو محصلینو د مونوګرافونو د پروژو لست</h4></Row>
                    </Col>
                    <Col md='3'>
                        <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
                    </Col>
                </Row>
                <div className='text-center'>
                    <Table bordered className='table-student-info'>
                        <tr>
                            <td>رهمنا استاد</td>
                            <td>تائید شوې پروژه</td>
                            <td>د پلار نوم</td>
                            <td>نوم</td>
                            <td>شمیره</td>
                        </tr>
                        {allData.map((data, index) => (<>
                            <tr>
                                <td rowSpan={data.students.length + 2} >{data.teacher.name}</td>
                            </tr>

                            <tr>
                                <td rowSpan={data.students.length + 1}>{data.name} </td>
                            </tr>

                            {data.students.map((std, i) => (
                                <tr>
                                    <td>{std.father_name} </td>
                                    <td> {std.name}</td>
                                    <td>{counter++}</td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={5} style={{ backgroundColor: 'rgba(230, 98, 59, 0.466)' }}></td>
                            </tr>
                        </>
                        ))}


                    </Table>
                    <Row style={{ justifyContent: 'space-between', marginBottom: '30px' }} >
                        <Col md='4' style={{ padding: '40px' }}>
                            <h4>د کمپیوټر ساینس پوهنځی رئیس</h4>
                        </Col>
                        <Col md='4' >
                        </Col>
                        <Col md='4' style={{ padding: '40px' }}>
                            <h4> د اجرائیه چارو مدیر</h4>
                        </Col>
                    </Row>
                </div>
            </Card>}

        </Fragment>
    )
}
export default CardActions
