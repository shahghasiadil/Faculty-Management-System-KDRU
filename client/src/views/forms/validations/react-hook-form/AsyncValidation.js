import { useForm } from 'react-hook-form'
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AsyncValidationForm = () => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = async data => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(1000)
    alert('Form Submitted')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Async Submit</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='firstNameAsync'>First Name</Label>
            <Input
              id='firstNameAsync'
              name='firstNameAsync'
              innerRef={register({ required: true })}
              invalid={errors.firstNameAsync && true}
              placeholder='Bruce'
            />
          </FormGroup>
          <FormGroup>
            <Label for='lastNameAsync'>Last Name</Label>
            <Input
              id='lastNameAsync'
              name='lastNameAsync'
              innerRef={register({ required: true })}
              invalid={errors.lastNameAsync && true}
              placeholder='Wayne'
            />
          </FormGroup>
          <FormGroup>
            <Label for='emailAsync'>Email</Label>
            <Input
              type='email'
              name='emailAsync'
              id='emailAsync'
              innerRef={register({ required: true })}
              invalid={errors.emailAsync && true}
              placeholder='bruce.wayne@email.com'
            />
          </FormGroup>
          <FormGroup>
            <Label for='passwordAsync'>Password</Label>
            <Input
              type='password'
              id='passwordAsync'
              name='passwordAsync'
              innerRef={register({ required: true })}
              invalid={errors.passwordAsync && true}
              placeholder='passwordAsync'
            />
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

export default AsyncValidationForm
