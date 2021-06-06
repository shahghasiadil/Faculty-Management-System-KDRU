import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { Menu, Item, useContextMenu, animation } from 'react-contexify'

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

const ContextMenuAnimations = () => {
  const { show: showFade } = useContextMenu({
    id: 'fade'
  })
  const { show: showFlip } = useContextMenu({
    id: 'flip'
  })
  const { show: showSlide } = useContextMenu({
    id: 'pop'
  })

  const handleClick = text => {
    toast.success(<ToastContent text={text} />, { hideProgressBar: true, closeButton: false })
  }

  const FadeMenu = () => {
    return (
      <Menu id='fade' animation={animation.fade}>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }
  const FlipMenu = () => {
    return (
      <Menu id='flip' animation={animation.flip}>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }
  const SlideMenu = () => {
    return (
      <Menu id='pop' animation={animation.slide}>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Animations</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <Button color='primary' onContextMenu={showFade} outline>
            Fade
          </Button>

          <Button color='primary' onContextMenu={showFlip} outline>
            Flip
          </Button>

          <Button color='primary' onContextMenu={showSlide} outline>
            Slide
          </Button>
        </div>
        <FadeMenu />
        <FlipMenu />
        <SlideMenu />
      </CardBody>
    </Card>
  )
}

export default ContextMenuAnimations
