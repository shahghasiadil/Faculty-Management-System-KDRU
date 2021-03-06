import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@components/avatar'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { getProjectsByPeriod } from '../store/action'
import { Printer } from 'react-feather'
import { Alert, Form, Button, CardBody, Card, CardHeader, CardTitle, Row, Col, Table } from 'reactstrap'

import cs from '@src/assets/images/slider/cs_logos.png'
import un from '@src/assets/images/slider/kdr.png'

const CardActions = () => {

    let counter = 1
    const [currentPeriod, setCurrentPeriod] = useState({ value: '', label: 'Select Period' })

    // ** User filter options
    const periodOptions = [
        { value: '', label: 'Select Period', number: 0 },
        { value: '1', label: '1', number: 1 },
        { value: '2', label: '2', number: 2 },
        { value: '4', label: '4', number: 4 },
        { value: '5', label: '5', number: 5 },
        { value: '6', label: '6', number: 6 },
        { value: '7', label: '7', number: 7 },
        { value: '8', label: '8', number: 8 }
    ]

    const dispatch = useDispatch()

    const { selectedProject } = useSelector(state => state.projects)

    const print = () => {
        const mainLayout = document.getElementById('printTable').innerHTML
        const originalContent = document.body.innerHTML
        document.body.innerHTML = mainLayout
        window.print()
        document.body.innerHTML = originalContent
        window.close()
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getProjectsByPeriod(currentPeriod.value))
    }

    return (
        <Fragment>

            <Card style={{ margin: 'auto' }}>
                <CardHeader>
                    <CardTitle tag='h4'>Search Filter</CardTitle>
                </CardHeader>
                <Form onSubmit={onSubmit}>
                    <CardBody>
                        <Row>

                            <Col md='4'>
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
                                {selectedProject && <Button onClick={print} color='info' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Print <Printer size={16} className='mr-50' /> </Button>}
                            </Col>
                        </Row>
                    </CardBody>
                </Form>
            </Card>
            {selectedProject === null ? <Alert color='danger'>
                <h4 className='alert-heading'>Search by selecting the above filter </h4>
                <div className='alert-body'>
                    There is no data to show in table
                </div>
            </Alert> : <Card className='attendance-div' id='printTable' >
                <Row className='attendance-top-row' >
                    <Col md='3' className='attendance-logo-1'>
                        <Avatar className='mr-1 ' img={un} imgHeight='90' imgWidth='90' />
                    </Col>
                    <Col md='6' className='top-center-div'>
                        <Row></Row>
                        <Row><h4>???????????? ??????????????</h4></Row>
                        <Row><h4>?????????????? ?????????? ????????????</h4></Row>
                        <Row><h4>?? ?????????????? ???????? ?????????? ????????????</h4></Row>
                        <Row><h4>?? ???????????? ???????? ?? ?????????? ?????????????? ?????????????? ?? ?????????????????????? ?? ?????????? ??????</h4></Row>
                    </Col>
                    <Col md='3'>
                        <Avatar className='mr-1 ' img={cs} imgHeight='90' imgWidth='90' />
                    </Col>
                </Row>
                <div className='text-center'>
                    <Table bordered className='table-student-info'>
                        <tr>
                            <td>?????????? ??????????</td>
                            <td>?????????? ?????? ??????????</td>
                            <td>?? ???????? ??????</td>
                            <td>??????</td>
                            <td>??????????</td>
                        </tr>
                        {selectedProject.map((data, index) => (<>
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
                            <h4>?? ?????????????? ?????????? ???????????? ????????</h4>
                        </Col>
                        <Col md='4' >
                        </Col>
                        <Col md='4' style={{ padding: '40px' }}>
                            <h4> ?? ?????????????? ???????? ????????</h4>
                        </Col>
                    </Row>
                </div>
            </Card>}

        </Fragment>
    )
}
export default CardActions
