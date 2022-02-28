import { Card, CardHeader, CardTitle, CardBody, CardText, CustomInput } from 'reactstrap'

const RadioCustom = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Custom</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText className='mb-0'>
          Use <code>&lt;CustomInput /&gt;</code> instead of <code>&lt;Input /&gt;</code> to create custom input.
        </CardText>
        <div className='demo-inline-spacing'>
          <CustomInput type='radio' id='exampleCustomRadio' name='customRadio' inline label='Active' defaultChecked />
          <CustomInput type='radio' id='exampleCustomRadio2' name='customRadio' inline label='Inactive' />
          <CustomInput type='radio' id='exampleCustomRadio3' inline label='Active Disabled' disabled defaultChecked />
          <CustomInput
            type='radio'
            id='exampleCustomRadio4'
            inline
            label='Inactive disabled'
            htmlFor='exampleCustomRadio4_X'
            disabled
          />
        </div>
      </CardBody>
    </Card>
  )
}
export default RadioCustom
