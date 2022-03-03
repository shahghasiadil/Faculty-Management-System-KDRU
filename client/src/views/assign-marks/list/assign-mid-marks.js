// ** Styles
import '@styles/react/apps/app-users.scss'
// ** React Imports
import { useState, useEffect } from 'react'
// ** Third Party Components
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { Plus } from 'react-feather'
import { addMidTermMark } from '../../mid-term-marks/store/action'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, FormGroup, CardTitle, CardBody, Input, Row, Col, Label, Button, Form } from 'reactstrap'
import axios from 'axios'
import { useDispatch } from 'react-redux'
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Marks = () => {
    const [formValues, setFormValues] = useState([])

    const [currentSemester, setCurrentSemester] = useState({ value: '', label: 'Select Semester' })
    const [currentPeriod, setCurrentPeriod] = useState({ value: '', label: 'Select Period' })
    const [currentSubject, setCurrentSubject] = useState()
    const [subjects, setSubjects] = useState([])
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

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


    const periodOptions = [
        { value: '1', label: '1', number: 1 },
        { value: '2', label: '2', number: 2 },
        { value: '3', label: '3', number: 3 },
        { value: '4', label: '4', number: 4 }

    ]

    const handleChange = (i, e) => {
        const newFormValues = [...formValues]
        newFormValues[i][e.target.name] = e.target.value
        setFormValues(newFormValues)
    }
    const saveForm = (i, e) => {
        alert(e.mid_marks)
        if (e.mid_marks) {
            dispatch(addMidTermMark({
                student_id: e.id,
                subject_id: currentSubject.value,
                marks: e.mid_marks
            }))
            const newFormValues = [...formValues]
            newFormValues.splice(i, 1)
            setFormValues(newFormValues)
        }

    }

    const { handleSubmit, trigger } = useForm()

    const loadStudents = () => {
        axios.post(`http://127.0.0.1:8000/api/mid-term-marks/mark-assign-students?semester_id=${currentSemester.value}&subject_id=${currentSubject.value}&period=${currentPeriod.value}`).then(response => {
            setFormValues([...response.data.data])
        }).catch((err) => {
            console.log(err)
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
        loadSubjects()
    }, [])
    const onSubmit = () => {
        trigger()

        loadStudents()
    }

    return (
        <div className='app-user-list'>
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>Search Filter</CardTitle>
                </CardHeader>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <CardBody>
                        <Row>
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
                                    options={subjects}
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

            <Card>
                <CardBody>
                    {formValues.map((element, index) => (

                        <Row key={index} className='justify-content-between align-items-center'>
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
                                            disabled
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
                                            disabled
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
                                            disabled
                                        />

                                    </FormGroup>

                                    <FormGroup tag={Col} md='3'>
                                        <Label for='job'>
                                            Mid Marks  <span className='text-danger'>*</span>
                                        </Label>
                                        <Input
                                            name='mid_marks'
                                            onChange={e => handleChange(index, e)}
                                            id={`mid-marks-${index}`}
                                            autoComplete="off"
                                            placeholder='Middle Marks'
                                            required
                                        />
                                    </FormGroup>

                                    <FormGroup tag={Col} md='2' >
                                        <Label></Label>
                                        <Button.Ripple color='success' className='text-nowrap px-1 d-flex justify-content-center align-items-center' onClick={() => saveForm(index, element)} outline>
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

        </div>
    )
}

export default Marks
