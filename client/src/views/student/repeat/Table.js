// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** for navigation
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Avatar from '@components/avatar'
import Select from 'react-select'
import { yupResolver } from '@hookform/resolvers/yup'
import { isObjEmpty, selectThemeColors } from '@utils'
// ** Columns
import { columns } from './columns'
import { useForm } from 'react-hook-form'

// ** Store & Actions
import { getAllData, restoreStudent } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import { ChevronDown, Check, Printer } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, Input, Row, Col, Label, Button, CardTitle, Form, CardBody, CardHeader } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { store } from '@store/storeConfig/store'

// ** ErrorToast Component for Undo Records
export const ErrorToast = ({ id }) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Check size={12} />} />
                <h6 className='toast-title'>Success</h6>
            </div>
            <small className='text-muted'>3 secondes Ago</small>
        </div>
        <div className='toastify-body alert-danger'>
            <span role='img' aria-label='toast-text'>
                Record deleted  <strong>Oops</strong> <Button.Ripple color='flat-info' onClick={() => { store.dispatch(restoreStudent(id)) }}>Undo</Button.Ripple>
            </span>
        </div>
    </Fragment>
)


const StudentsList = () => {
    // ** Store Vars
    const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
    const [currentPeriod, setCurrentPeriod] = useState({ value: 2022, label: 'Select Period ' })
    const [students, setStudents] = useState([])

    const periodOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' }
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

    const dispatch = useDispatch()

    const { handleSubmit, trigger } = useForm()

    const onSubmit = () => {
        trigger()
        axios.post(`http://127.0.0.1:8000/api/repeats?semester_id=${currentSemester.value}&period=${currentPeriod.value}`).then((res) => {
            setStudents(res.data.data)
        })
    }

    console.log(students)

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
                                    options={periodOptions}
                                    value={currentPeriod}
                                    name='subject'
                                    onChange={(e) => setCurrentPeriod(e)}
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
                                {students && <Button onClick={prints} color='info' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Print <Printer size={16} /></Button>}
                            </Col>
                        </Row>
                    </CardBody>
                </Form>
            </Card>
            <Card id='printBill'>
                <DataTable
                    noHeader
                    pagination
                    responsive
                    columns={columns}
                    sortIcon={<ChevronDown />}
                    className="react-dataTable"
                    data={students}
                />
            </Card>
        </Fragment>
    )
}

export default StudentsList
