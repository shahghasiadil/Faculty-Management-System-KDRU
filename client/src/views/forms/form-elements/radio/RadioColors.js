import { Card, CardHeader, CardTitle, CardBody, CardText, CustomInput } from 'reactstrap'

const RadioColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use class <code>&lt;.custom-control-[color]</code> for colored Radio.
        </CardText>
        <div className='demo-inline-spacing'>
          <CustomInput
            type='radio'
            className='custom-control-Primary'
            id='Primary'
            label='Primary'
            defaultChecked
            inline
          />
          <CustomInput
            type='radio'
            className='custom-control-secondary'
            id='secondary'
            label='Secondary'
            defaultChecked
            inline
          />
          <CustomInput
            type='radio'
            className='custom-control-success'
            id='success'
            label='Success'
            defaultChecked
            inline
          />
          <CustomInput
            type='radio'
            className='custom-control-warning'
            id='warning'
            label='Warning'
            defaultChecked
            inline
          />
          <CustomInput
            type='radio'
            className='custom-control-danger'
            id='danger'
            label='Danger'
            defaultChecked
            inline
          />
          <CustomInput type='radio' className='custom-control-info' id='info' label='Info' defaultChecked inline />
        </div>
      </CardBody>
    </Card>
  )
}
export default RadioColors
