import { Card, CardHeader, CardBody, CardTitle, Button, CardText } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const SweetAlertPositions = () => {
  const handleTopStart = () => {
    return MySwal.fire({
      position: 'top-start',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleTopEnd = () => {
    return MySwal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleBottomStart = () => {
    return MySwal.fire({
      position: 'bottom-start',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleBottomEnd = () => {
    return MySwal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Position</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          You can specify position of your alert with
          <code>{'position : top-start | top-end | bottom-start | bottom-end '}</code>{' '}
        </CardText>
        <div className='demo-inline-spacing'>
          <Button color='primary' onClick={handleTopStart} outline>
            Top Start
          </Button>

          <Button color='primary' onClick={handleTopEnd} outline>
            Top End
          </Button>

          <Button color='primary' onClick={handleBottomStart} outline>
            Bottom Start
          </Button>

          <Button color='primary' onClick={handleBottomEnd} outline>
            Bottom End
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default SweetAlertPositions
