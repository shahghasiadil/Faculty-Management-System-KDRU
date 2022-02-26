import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import { Menu, Item, Submenu, useContextMenu } from 'react-contexify'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'

const ToastContent = ({ text }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check />} />
        <h6 className='toast-title'>Clicked {text}</h6>
      </div>
    </div>
  </Fragment>
)

const ContextSubMenu = () => {
  const { show } = useContextMenu({
    id: 'submenu_id'
  })

  const handleClick = text => {
    toast.success(<ToastContent text={text} />, { hideProgressBar: true, closeButton: false })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Sub Menu</CardTitle>
      </CardHeader>
      <CardBody>
        <Button color='primary' onContextMenu={show} outline>
          Submenu
        </Button>
        <Menu id='submenu_id'>
          <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
          <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
          <Item disabled>Option 3</Item>
          <Submenu label='Submenu'>
            <Item onClick={() => handleClick('Foo Bar')}>Foo Bar</Item>
            <Submenu label='Submenu'>
              <Item onClick={() => handleClick('Echo')}>Echo</Item>
              <Item onClick={() => handleClick('Foxtrot')}>Foxtrot</Item>
              <Item onClick={() => handleClick('Golf')}>Golf</Item>
            </Submenu>
          </Submenu>
        </Menu>
      </CardBody>
    </Card>
  )
}

export default ContextSubMenu
