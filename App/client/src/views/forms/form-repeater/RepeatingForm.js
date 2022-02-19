import { useState } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { X, Plus } from 'react-feather'

const RepeatingForm = () => {
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

  return (
    <Card>
      <CardHeader>
        <h4 className='card-title'>Repeating Forms</h4>
      </CardHeader>

      <CardBody>
        <Repeater count={count}>
          {i => (
            <Form key={i}>
              <Row className='justify-content-between align-items-center'>
                <Col md={4}>
                  <FormGroup>
                    <Label for={`item-name-${i}`}>Item Name</Label>
                    <Input type='text' id={`item-name-${i}`} placeholder='Vuexy Admin Template' />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`cost-${i}`}>Cost</Label>
                    <Input type='number' id={`cost-${i}`} placeholder='32' />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`quantity-${i}`}>Quantity</Label>
                    <Input type='number' id={`quantity-${i}`} placeholder='1' />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for={`price-${i}`}>Price</Label>
                    <input
                      className='form-control-plaintext'
                      type='number'
                      id={`price-${i}`}
                      value='$32'
                      placeholder='$32'
                      readOnly
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <Button.Ripple color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                    <X size={14} className='mr-50' />
                    <span>Delete</span>
                  </Button.Ripple>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </Form>
          )}
        </Repeater>
        <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add New</span>
        </Button.Ripple>
      </CardBody>
    </Card>
  )
}

export default RepeatingForm
