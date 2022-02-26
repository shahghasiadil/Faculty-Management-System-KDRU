import { Card, CardHeader, CardTitle, CardBody, CustomInput } from 'reactstrap'

const SwitchBasic = () => {
  return (
    <Card>
      <CardHeader className='pb-0'>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <CustomInput
            type='switch'
            id='exampleCustomSwitch'
            name='customSwitch'
            label='Toggle this switch element'
            inline
          />
          <CustomInput
            type='switch'
            id='exampleCustomSwitchdisabled'
            name='customSwitchdisabled'
            label='Disabled switch element'
            inline
            disabled
          />
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchBasic
