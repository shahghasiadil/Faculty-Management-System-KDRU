import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Card, CardHeader, CardBody, CardTitle, Button, CardText } from 'reactstrap'

const MySwal = withReactContent(Swal)

const AnimatedSweetAlert = () => {
  const handleBounceIn = () => {
    return MySwal.fire({
      title: 'Bounce In Animation',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      showClass: {
        popup: 'animate__animated animate__bounceIn'
      },
      buttonsStyling: false
    })
  }

  const handleFadeIn = () => {
    return MySwal.fire({
      title: 'Fade In Animation',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn'
      },
      buttonsStyling: false
    })
  }

  const handleFlipIn = () => {
    return MySwal.fire({
      title: 'Flip In Animation',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      showClass: {
        popup: 'animate__animated animate__flipInX'
      },
      buttonsStyling: false
    })
  }

  const handleTada = () => {
    return MySwal.fire({
      title: 'Tada Animation',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      showClass: {
        popup: 'animate__animated animate__tada'
      },
      buttonsStyling: false
    })
  }

  const handleShake = () => {
    return MySwal.fire({
      title: 'Shake Animation',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      showClass: {
        popup: 'animate__animated animate__shakeX'
      },
      buttonsStyling: false
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Animations</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          Use <code>popup</code> inside <code>showClass</code> parameter to add animation to your alert.
        </CardText>
        <div className='demo-inline-spacing'>
          <Button color='primary' onClick={handleBounceIn} outline>
            Bounce In
          </Button>
          <Button color='primary' onClick={handleFadeIn} outline>
            Fade In
          </Button>
          <Button color='primary' onClick={handleFlipIn} outline>
            Flip In
          </Button>
          <Button color='primary' onClick={handleTada} outline>
            Tada
          </Button>
          <Button color='primary' onClick={handleShake} outline>
            Shake
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default AnimatedSweetAlert
