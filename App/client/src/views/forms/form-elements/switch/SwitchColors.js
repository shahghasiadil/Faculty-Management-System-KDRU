import { Card, CardHeader, CardTitle, CardBody, CardText, CustomInput } from 'reactstrap'

const SwitchColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use class <code>.custom-control-colorName</code> to change switch's color
        </CardText>
        <div className='demo-inline-spacing'>
          <div>
            <CardText className='mb-0'>Primary</CardText>
            <CustomInput type='switch' id='switch-primary' name='primary' inline defaultChecked />
          </div>
          <div>
            <CardText className='mb-0'>Secondary</CardText>
            <CustomInput
              className='custom-control-secondary'
              type='switch'
              id='secondary'
              name='secondary'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Success</CardText>
            <CustomInput
              className='custom-control-success'
              type='switch'
              id='success'
              name='success'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Danger</CardText>
            <CustomInput
              className='custom-control-danger'
              type='switch'
              id='danger'
              name='danger'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Warning</CardText>
            <CustomInput
              className='custom-control-warning'
              type='switch'
              id='warning'
              name='warning'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Info</CardText>
            <CustomInput className='custom-control-info' type='switch' id='info' name='info' inline defaultChecked />
          </div>
          <div>
            <CardText className='mb-0'>Dark</CardText>
            <CustomInput className='custom-control-dark' type='switch' id='dark' name='dark' inline defaultChecked />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchColors
