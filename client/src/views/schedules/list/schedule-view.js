
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch, patch } from 'react-redux'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { Printer } from 'react-feather'
import { getSchedule } from '../store/action'
import { Alert, Form, Button, CardBody, Card, CardHeader, CardTitle, Row, Col, Table } from 'reactstrap'
import img1 from '@src/assets/images/slider/06.jpg'
import { element } from 'prop-types'

const CardActions = () => {

    const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
    const [currentPeriod, setCurrentPeriod] = useState({ value: 2022, label: 'Select Period ' })
    const [schedule, setSchedule] = useState([])
    const [semesters, setSemesters] = useState([])

    const periodOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' }
    ]

    const loadSemesters = () => {
        axios.get('http://127.0.0.1:8000/api/semesters').then((res) => {

            for (const data of res.data.data) {
                semesters.push({ value: data.id, label: data.name })
            }
        })
    }
    useEffect(() => {
        loadSemesters()
    }, [])
    const dispatch = useDispatch()

    const { handleSubmit, trigger } = useForm()

    const onSubmit = () => {
        trigger()
        axios.get(`http://127.0.0.1:8000/api/schedules/get-schedule-by-semester/${currentSemester.value}`).then((res) => {
            setSchedule(res.data.data)
            console.log(res.data.data)
            res.data.data.filter((element, index) => {
                console.log(element['day'])
            })
        })

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
            <Card>
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
                                    options={semesters}
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

            {schedule === [] ? <Alert color='danger'> <h4 className='alert-heading'>Search by selecting the above filters </h4>
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
                        {/* {schedule.map((data, index) => (

                             */}
                            {/* <> */}
                            <tr>
                                <td rowSpan={3}>Saturday</td>
                                { schedule.map((data, index) => (

                                    <>
                                    {
                                        data['day'] === 'SATURDAY' ? <td colSpan={2}>{data.name }</td> : ''
                                    }
                                    </>
                                ))
                                }

                                {/* <td colSpan={2}>Math II  CS210</td> */}
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>(4 CP)</td>
                                <td colSpan={2}>(4 CP)</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td colSpan={2}></td>
                                <td colSpan={2}>Samira ahmdazay</td>
                                <td></td>
                            </tr>
                        {/* </> */}
                        {/* ))} */}

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
            </Card>
            }
        </Fragment>
    )
}
export default CardActions