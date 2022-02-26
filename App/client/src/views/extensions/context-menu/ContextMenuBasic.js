import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import { Menu, Item, useContextMenu } from 'react-contexify'
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

const ContextMenuBasic = () => {
  const { show } = useContextMenu({
    id: 'menu_id'
  })

  const handleClick = text => {
    toast.success(<ToastContent text={text} />, { hideProgressBar: true, closeButton: false })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic Context Menu</CardTitle>
      </CardHeader>
      <CardBody>
        <Button color='primary' onContextMenu={show} outline>
          Right Click On Me
        </Button>
        <Menu id='menu_id'>
          <Item onClick={() => handleClick('Option 1')}>Item 1</Item>
          <Item onClick={() => handleClick('Option 2')}>Item 2</Item>
        </Menu>
      </CardBody>
    </Card>
  )
}

export default ContextMenuBasic
