import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const ValidationOnChange = () => {
  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    lastName: yup.string().min(3).required(),
    firstName: yup.string().min(3).required(),
    password: yup.string().min(6).required()
  })

  const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    console.log(data)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Validation Schema With OnChange</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='firstName'>First Name</Label>
            <Input
              id='firstName'
              name='firstName'
              innerRef={register({ required: true })}
              invalid={errors.firstName && true}
              placeholder='Bruce'
            />
            {errors && errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for='lastName'>Last Name</Label>
            <Input
              id='lastName'
              name='lastName'
              innerRef={register({ required: true })}
              invalid={errors.lastName && true}
              placeholder='Wayne'
            />
            {errors && errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='email'
              innerRef={register({ required: true })}
              invalid={errors.email && true}
              placeholder='bruce.wayne@email.com'
            />
            {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input
              type='password'
              id='password'
              name='password'
              innerRef={register({ required: true })}
              invalid={errors.password && true}
              placeholder='password'
            />
            {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          </FormGroup>
          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default ValidationOnChange
