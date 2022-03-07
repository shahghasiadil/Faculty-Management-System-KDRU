import * as yup from 'yup'
import { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Label, FormGroup, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'
import { updateStudent } from '../../store/action'

const KankorInfo = ({ stepper, type }) => {

    const history = useHistory()
    const StudentSchema = yup.object().shape({
        kankorId: yup.string().required('Kankor ID is required field'),
        kankorYear: yup.string().required("Kankor Year is required field"),
        kankorScore: yup.string().required("Kankor Score Number is required field"),
        school_name: yup.string().required().label('School Name')
    })
    // ** React hook form
    const { register, errors, handleSubmit, watch, trigger } = useForm({ mode: 'onChange', resolver: yupResolver(StudentSchema) })

    const { studentInfo, selectedStudent } = useSelector(state => state.students)
    const { kankor } = studentInfo

    const [studentData, setStudentData] = useState(null)

    useEffect(() => {
        if (selectedStudent !== null || (selectedStudent !== null && studentData !== null && selectedStudent.id !== StudentData.id)) {
            setStudentData(selectedStudent)
        }
    }, [selectedStudent])

    const dispatch = useDispatch()
    const onSubmit = (value) => {
        trigger()
        if (isObjEmpty(errors)) {
            kankor.kankor_id = value.kankorId
            kankor.kankor_year = value.kankorYear
            kankor.kankor_score = value.kankorScore
            kankor.school_name = value.school_name

            dispatch(updateStudent(studentInfo, selectedStudent.id))
            history.push('/students')
        }
    }

    return (
        <Fragment>
            <div className='content-header'>
                <h5 className='mb-0'>Kankor</h5>
                <small>Enter Student's Kankor Info.</small>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label for='school_name'>
                            School Name <span className='text-danger'>*</span>
                        </Label>
                        <Input
                            name='school_name'
                            id='school_name'
                            defaultValue={studentData && studentData.school_name}
                            autoComplete="off"
                            placeholder='340'
                            innerRef={register({ required: true })}
                            invalid={errors.school_name && true}
                            className={watch('school_name') ? classnames({ 'is-valid': !errors.school_name }) : ''}
                        />
                        {errors && errors.school_name && <FormFeedback>{errors.school_name.message}</FormFeedback>}
                    </FormGroup>

                    <FormGroup tag={Col} md='6'>
                        <Label for='kankorId'>
                            Kankor ID  <span className='text-danger'>*</span>
                        </Label>
                        <Input
                            name='kankorId'
                            id='kankorId'
                            defaultValue={studentData && studentData.kankor_id}
                            autoComplete="off"
                            placeholder='PH12243'
                            innerRef={register({ required: true })}
                            invalid={errors.kankorId && true}
                            className={watch('kankorId') ? classnames({ 'is-valid': !errors.kankorId }) : ''}
                        />
                        {errors && errors.kankorId && <FormFeedback>{errors.kankorId.message}</FormFeedback>}
                    </FormGroup>

                    <FormGroup tag={Col} md='6'>
                        <Label for='kankorYear'>
                            Kankor Year <span className='text-danger'>*</span>
                        </Label>
                        <Input
                            name='kankorYear'
                            id='kankorYear'
                            defaultValue={studentData && studentData.kankor_year}
                            autoComplete="off"
                            placeholder='1398'
                            innerRef={register({ required: true })}
                            invalid={errors.kankorYear && true}
                            className={watch('kankorYear') ? classnames({ 'is-valid': !errors.kankorYear }) : ''}
                        />
                        {errors && errors.kankorYear && <FormFeedback>{errors.kankorYear.message}</FormFeedback>}
                    </FormGroup>

                    <FormGroup tag={Col} md='6'>
                        <Label for='kankorScore'>
                            Kankor Score <span className='text-danger'>*</span>
                        </Label>
                        <Input
                            name='kankorScore'
                            id='kankorScore'
                            defaultValue={studentData && studentData.kankor_score}
                            autoComplete="off"
                            placeholder='340'
                            innerRef={register({ required: true })}
                            invalid={errors.kankorScore && true}
                            className={watch('kankorScore') ? classnames({ 'is-valid': !errors.kankorScore }) : ''}
                        />
                        {errors && errors.kankorScore && <FormFeedback>{errors.kankorScore.message}</FormFeedback>}
                    </FormGroup>
                </Row>

                <div className='d-flex justify-content-between'>
                    <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                        <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                        <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                    </Button.Ripple>
                    <Button.Ripple type='submit' color='success' className='btn-submit'>
                        Submit
                    </Button.Ripple>
                </div>


            </Form>
        </Fragment>
    )
}

export default KankorInfo
