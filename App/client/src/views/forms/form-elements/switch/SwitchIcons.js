import { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, CustomInput } from 'reactstrap'
import { Check, X } from 'react-feather'

const Label = () => (
  <Fragment>
    <span className='switch-icon-left'>
      <Check size={14} />
    </span>
    <span className='switch-icon-right'>
      <X size={14} />
    </span>
  </Fragment>
)

const SwitchIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use class <code>.switch-icon-left &amp; .switch-icon-right</code> inside of
          <code>label</code> prop to create a switch with icon.
        </CardText>
        <div className='demo-inline-spacing'>
          <div>
            <CardText className='mb-0'>Primary</CardText>
            <CustomInput type='switch' label={<Label />} id='icon-primary' name='icon-primary' inline defaultChecked />
          </div>
          <div>
            <CardText className='mb-0'>Secondary</CardText>
            <CustomInput
              type='switch'
              label={<Label />}
              className='custom-control-secondary'
              id='icon-secondary'
              name='icon-secondary'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Success</CardText>
            <CustomInput
              type='switch'
              label={<Label />}
              className='custom-control-success'
              id='icon-success'
              name='icon-success'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Danger</CardText>
            <CustomInput
              type='switch'
              label={<Label />}
              className='custom-control-danger'
              id='icon-danger'
              name='icon-danger'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Warning</CardText>
            <CustomInput
              type='switch'
              label={<Label />}
              className='custom-control-warning'
              id='icon-warning'
              name='icon-warning'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Info</CardText>
            <CustomInput
              type='switch'
              label={<Label />}
              className='custom-control-info'
              id='icon-info'
              name='icon-info'
              inline
              defaultChecked
            />
          </div>
          <div>
            <CardText className='mb-0'>Dark</CardText>
            <CustomInput
              type='switch'
              label={<Label />}
              className='custom-control-dark'
              id='icon-dark'
              name='icon-dark'
              inline
              defaultChecked
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SwitchIcons
