import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'

const TextareaFloatingLabel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Floating label</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use <code>.form-label-group</code> as a wrapper to add a Floating Label with Textarea
        </CardText>
        <div className='form-label-group mt-2'>
          <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Floating Label' />
          <Label>Floating Label</Label>
        </div>
      </CardBody>
    </Card>
  )
}
export default TextareaFloatingLabel
