// ** React Imports

import { useState, useEffect, Fragment } from 'react'
import Select from 'react-select'
import { isObjEmpty, selectThemeColors } from '@utils'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
import { Check } from "react-feather"

// ** Third Party Components
import { Media, Row, FormText, Col, Button, Form, FormFeedback, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'
import { updateSubject } from '../store/action'
import AsyncSelect from 'react-select/async'
import axios from 'axios'
export const UpdateProgressToast = () => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Check size={12} />} />
                <h6 className='toast-title'>Success</h6>
            </div>
            <small className='text-muted'>3 secondes Ago</small>
        </div>
        <div className='toastify-body'>
            <span role='img' aria-label='toast-text'>
                Record Successfully Updated
            </span>
        </div>
    </Fragment>
)
const SubjectTab = ({ selectedSubject }) => {
    // ** States
    const history = useHistory()
    const [subjectData, setSubjectData] = useState(null)
    const [semesters, setSemesters] = useState([])
    const [teachers, setTeachers] = useState([])
    const [value, setValue] = useState(0)
    const [value1, setValue1] = useState(0)
    const dispatch = useDispatch()
    // ** Function to change user image

    const options = []
    function loadSemesters() {
        axios.get('http://127.0.0.1:8000/api/semesters').then((res) => {
            setSemesters(res.data.data)
        })
    }

    function loadTeachers() {
        axios.get('http://127.0.0.1:8000/api/teachers').then((res) => {
            setTeachers(res.data.data)
        })
    }
    const SubjectSchema = yup.object().shape({
        name: yup.string().required().min(3).label('Name'),
        credit: yup.string().required().label("Credit"),
        code: yup.string().required().label("Code")
    })
    const dx = semesters.filter(ndx => ndx.id !== subjectData.semester.id)
    const opt = dx.map((item, i) => {
        return (<option value={item.id} key={i}>{item.name}</option>)
    })

    const dxs = teachers.filter(ndx => ndx.id !== subjectData.teacher.id)
    const opts = dxs.map((item, i) => {
        return (<option value={item.id} key={i}>{item.name}</option>)
    })

    const { register, errors, handleSubmit, watch } = useForm({ mode: 'onChange', resolver: yupResolver(SubjectSchema) })
    // ** Update user image on mount or change
    useEffect(() => {

        if (selectedSubject !== null || (selectedSubject !== null && subjectData !== null && selectedSubject.id !== teacherData.id)) {
            setSubjectData(selectedSubject)
            loadSemesters()
            loadTeachers()
            setValue(selectedSubject.semester.id)
            setValue1(selectedSubject.teacher.id)
        }

    }, [selectedSubject])

    // ** Renders User
    const onSubmit = values => {

        if (isObjEmpty(errors)) {
            dispatch(
                updateSubject({
                    name: values.name,
                    credit: values.credit,
                    semester_id: value,
                    teacher_id: value1,
                    code: values.code
                }, selectedSubject.id)
            )
        }
        history.push('/subjects')
    }

    return (
        <Row>
            <Col sm='12'>
                <Media className='mb-2'>
                    <Media className='mt-50' body>
                        <h4>{selectedSubject.name} </h4>
                    </Media>
                </Media>
            </Col>
            <Col sm='12'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md='4' sm='12'>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input
                                    name='name'
                                    id='name'
                                    defaultValue={subjectData && subjectData.name}
                                    placeholder='John'
                                    innerRef={register({ required: true })}
                                    invalid={errors.name && true}
                                    className={watch('name') ? classnames({ 'is-valid': !errors.name }) : ''}
                                />
                                {errors && errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12'>
                            <FormGroup>
                                <Label for='code'>Code</Label>
                                <Input
                                    name='code'
                                    id='code'
                                    defaultValue={subjectData && subjectData.name}
                                    placeholder='Code'
                                    innerRef={register({ required: true })}
                                    invalid={errors.code && true}
                                    className={watch('code') ? classnames({ 'is-valid': !errors.code }) : ''}
                                />
                                {errors && errors.code && <FormFeedback>{errors.code.message}</FormFeedback>}
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12'>
                            <FormGroup>
                                <Label for='credit'>
                                    Credit <span className='text-danger'>*</span>
                                </Label>
                                <Input
                                    name='credit'
                                    id='credit'
                                    defaultValue={subjectData && subjectData.credit}
                                    placeholder='Doe'
                                    invalid={errors.credit && true}
                                    innerRef={register({ required: true })}
                                    className={watch('credit') ? classnames({ 'is-valid': !errors.credit }) : ''}
                                />
                                {errors && errors.credit && <FormFeedback>{errors.credit.message}</FormFeedback>}
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12'>
                            <FormGroup>
                                <Label for='semesters'>
                                    Semester <span className='text-danger'>*</span>
                                </Label>
                                <Input type='select'
                                    name='select'
                                    id='select-basic'
                                    onChange={(e) => { setValue(e.target.value) }}>
                                    <option selected value={selectedSubject.semester_id} >{selectedSubject.semester.name}</option>
                                    {
                                        opt
                                    }
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12'>
                            <FormGroup>
                                <Label for='semesters'>
                                    Teacher <span className='text-danger'>*</span>
                                </Label>
                                <Input type='select'
                                    name='select'
                                    id='select-basic'
                                    onChange={(e) => { setValue1(e.target.value) }}>
                                    <option selected value={selectedSubject.teacher_id} >{selectedSubject.teacher.name}</option>
                                    {
                                        opts
                                    }
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                            <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                                Save Changes
                            </Button.Ripple>
                            <Button.Ripple color='secondary' outline onClick={() => { history.push('/subjects') }}>
                                Cancel
                            </Button.Ripple>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}
export default SubjectTab
