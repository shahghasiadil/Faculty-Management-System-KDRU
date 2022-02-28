import { Card, CardHeader, CardBody, CardTitle, Button, Row, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BasicSweetCallback = () => {
  const handleConfirmText = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  const handleConfirmCancel = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Callback</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col className='mb-2 mb-md-0' md='6' sm='12'>
            <h5 className='mb-1'>Confirm Button Text</h5>
            <Button color='primary' onClick={handleConfirmText} outline>
              Confirm Text
            </Button>
          </Col>

          <Col md='6' sm='12'>
            <h5 className='mb-1'>Confirm Button Color</h5>
            <Button color='primary' onClick={handleConfirmCancel} outline>
              Confirm & cancel
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BasicSweetCallback
