import Cleave from 'cleave.js/react'
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'

const CardPayment = () => {
  return (
    <Card className='card-payment'>
      <CardHeader>
        <CardTitle tag='h4'>Pay Amount</CardTitle>
        <CardTitle className='text-primary' tag='h4'>
          $455.60
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Form className='form' onSubmit={e => e.preventDefault()}>
          <Row>
            <Col sm='12'>
              <FormGroup className='mb-2'>
                <Label for='payment-card-number'>Card Number</Label>
                <Cleave
                  className='form-control'
                  placeholder='2133 3244 4567 8921'
                  options={{ creditCard: true }}
                  id='payment-card-number'
                />
              </FormGroup>
            </Col>
            <Col sm='6'>
              <FormGroup className='mb-2'>
                <Label for='payment-expiry'>Expiry</Label>
                <Cleave
                  className='form-control'
                  placeholder='MM / YY'
                  options={{ date: true, delimiter: '/', datePattern: ['Y', 'm'] }}
                  id='payment-expiry'
                />
              </FormGroup>
            </Col>
            <Col sm='6'>
              <FormGroup className='mb-2'>
                <Label for='payment-cvv'>CVV / CVC</Label>
                <Input type='number' placeholder='123' id='payment-cvv' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='mb-2'>
                <Label for='payment-input-name'>Input Name</Label>
                <Input placeholder='Curtis Stone' id='payment-input-name' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <Button.Ripple color='primary' block>
                Make Payment
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default CardPayment
