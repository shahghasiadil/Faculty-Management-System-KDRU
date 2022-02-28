import { Card, CardHeader, CardTitle, CardBody, CardText, CustomInput } from 'reactstrap'

const CheckboxCustom = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Custom Checkboxes</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use <code>&lt;CustomInput /&gt;</code> instead of <code>&lt;Input /&gt;</code> to create custom input.
        </CardText>
        <div className='demo-inline-spacing'>
          <CustomInput inline type='checkbox' id='exampleCustomCheckbox' label='Checked' defaultChecked />
          <CustomInput inline type='checkbox' id='exampleCustomCheckbox2' label='Unchecked' />
          <CustomInput
            inline
            type='checkbox'
            id='exampleCustomCheckbox4'
            label='Checked Disabled'
            htmlFor='exampleCustomCheckbox4_X'
            defaultChecked
            disabled
          />
          <CustomInput
            inline
            type='checkbox'
            id='exampleCustomCheckbox5'
            label='Unchecked Disabled'
            htmlFor='exampleCustomCheckbox5_X'
            disabled
          />
        </div>
      </CardBody>
    </Card>
  )
}
export default CheckboxCustom
